const generateHistoryDOM = async (list, _type) => {
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

// export { generateHistoryDOM };
