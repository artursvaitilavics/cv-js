let historyEducation = [];
let historyWork = [];

const getHistory = async () => {
  const response = await getData();
  historyEducation = response.history.education;
  historyWork = response.history.work;
};

const clearHistory = () => {
  const allHistory = document.querySelectorAll(".history__container");
  allHistory.forEach((element) => {
    element.remove();
  });
};

const generateHistoryDOM = async (list, _type) => {
  // let list = [];

  // if (_type === "education") {
  //   list = historyEducation;
  // } else {
  //   list = historyWork;
  // }

  const educatioElement = document.querySelector("#education");
  const workHistoryElement = document.querySelector("#work");

  list.forEach((element) => {
    const date = `${element.from} - ${element.to}`;

    const mainBlockElement = document.createElement("div");
    const mainTitle = document.createElement("div");
    const secondaryTitle = document.createElement("div");
    const dateElement = document.createElement("div");

    mainBlockElement.classList.add("history__container");
    mainTitle.classList.add("history__title");
    secondaryTitle.classList.add("history__subject");
    dateElement.classList.add("history__date");

    dateElement.innerHTML = date;

    mainBlockElement.addEventListener("click", () => {
      createCard(element);
    });

    mainBlockElement.appendChild(mainTitle);
    mainBlockElement.appendChild(secondaryTitle);
    mainBlockElement.appendChild(dateElement);

    if (_type === "education") {
      mainTitle.innerHTML = element.schoolTitle;
      secondaryTitle.innerHTML = element.subject;
      educatioElement.appendChild(mainBlockElement);
    } else if (_type === "work") {
      mainTitle.innerHTML = element.jobTitle;
      secondaryTitle.innerHTML = element.company;
      workHistoryElement.appendChild(mainBlockElement);
    } else {
      throw new Error("MISSING History type");
    }
  });
};

const sortByDate = async (sort) => {
  if (sort) {
    historyWork.sort((a, b) => {
      if (a.from > b.from) {
        return 1;
      } else if (a.from < b.from) {
        return -1;
      } else {
        return 0;
      }
    });
  } else {
    historyWork.sort((a, b) => {
      if (a.from > b.from) {
        return -1;
      } else if (a.from < b.from) {
        return 1;
      } else {
        return 0;
      }
    });
  }
};

const renderHistory = async (software) => {
  clearHistory();
  let filteredWork = historyWork.filter((history) => {
    return history.software.includes(software);
  });

  if (filteredWork.length === 0) {
    filteredWork = historyWork;
  }

  generateHistoryDOM(historyEducation, "education");
  generateHistoryDOM(filteredWork, "work");
};
