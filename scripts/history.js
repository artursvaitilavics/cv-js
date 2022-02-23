let activeHistoryEducation = [];
let activeHistoryWork = [];

let fullEducationHistory = [];
let fullWorkHistory = [];

const getHistory = async () => {
  const response = await getData();
  fullEducationHistory = response.history.education;
  fullWorkHistory = response.history.work;
  activeHistoryEducation = fullEducationHistory;
  activeHistoryWork = fullWorkHistory;
};

const clearHistory = () => {
  const allHistory = document.querySelectorAll(".history__container");
  allHistory.forEach((element) => {
    element.remove();
  });
};

const sortByDate = async (sort) => {
  if (sort) {
    activeHistoryWork.sort((a, b) => {
      if (a.from > b.from) {
        return 1;
      } else if (a.from < b.from) {
        return -1;
      } else {
        return 0;
      }
    });
  } else {
    activeHistoryWork.sort((a, b) => {
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

const setActiveHistoryFromSoftware = (software) => {
  activeHistoryWork = fullWorkHistory.filter((history) => {
    return history.software.includes(software);
  });

  renderHistory();
  if (activeHistoryWork.length === 0) {
    createCard({
      jobTitle: "",
      company: "",
      description: `I didn't work with ${software} professionally!`,
    });
  }
};

const renderHistory = async () => {
  clearHistory();
  generateHistoryDOM(activeHistoryEducation, "education");
  generateHistoryDOM(activeHistoryWork, "work");
  // filteredWork = activeHistoryWork;
};
const renderFullHistory = async () => {
  clearHistory();
  activeHistoryWork = fullWorkHistory;
  generateHistoryDOM(fullEducationHistory, "education");
  generateHistoryDOM(fullWorkHistory, "work");
};
