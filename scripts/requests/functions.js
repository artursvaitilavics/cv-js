const setHeader = async (response) => {
  const nameElement = document.querySelector("#name");
  nameElement.innerHTML = response.basicInfo.name;

  const titleElement = document.querySelector("#title");
  titleElement.innerHTML = response.basicInfo.title;

  const aboutMeElement = document.querySelector("#about-me");
  aboutMeElement.innerHTML = response.basicInfo.aboutMe;

  // Set image
  const header = document.querySelector(".header");
  const imageElement = document.createElement("img");

  imageElement.setAttribute("src", response.imageUrl);
  imageElement.setAttribute("width", "200px");

  header.appendChild(imageElement);
};

const setHistory = async (response, _type) => {
  const work = response.history.work;
  const education = response.history.education;

  let list = [];

  if (_type === "education") {
    list = education;
  } else {
    list = work;
  }

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

const setFooterSubElements = async (list, footerElementType) => {
  const softwareSkillsElement = document.querySelector("#software-skills");
  const tehnologySkillsElement = document.querySelector("#tehnology-skills");
  const languagesElement = document.querySelector("#languagles");
  const contactDetailsElement = document.querySelector("#contact-details");

  if (footerElementType === "contactDetails") {
    const addressElement = document.createElement("div");
    const emailElement = document.createElement("div");
    const emailLinkElement = document.createElement("a");
    const phoneElemet = document.createElement("div");
    const phoneLinkElement = document.createElement("a");
    const linkedInURLElement = document.createElement("div");
    const linkedInURLLinkElement = document.createElement("a");
    // TODO:
    // get all above elements properly. tags, classlists divs and so on

    addressElement.innerHTML = list.address;

    emailLinkElement.innerHTML = "e-mail";
    emailLinkElement.setAttribute("href", `mailto:${list.email}`);
    emailLinkElement.setAttribute("target", "_blank");
    emailElement.appendChild(emailLinkElement);

    phoneLinkElement.innerHTML = list.phone;
    phoneLinkElement.setAttribute("href", `tel:${list.phone}`);
    phoneLinkElement.setAttribute("target", "_blank");
    phoneElemet.appendChild(phoneLinkElement);

    linkedInURLLinkElement.innerHTML = "LinkedIn";
    linkedInURLLinkElement.setAttribute("href", `${list.linkedInURL}`);
    linkedInURLLinkElement.setAttribute("target", "_blank");
    linkedInURLElement.appendChild(linkedInURLLinkElement);

    contactDetailsElement.appendChild(addressElement);
    contactDetailsElement.appendChild(emailElement);
    contactDetailsElement.appendChild(phoneElemet);
    contactDetailsElement.appendChild(linkedInURLElement);
  }

  Array.from(list).forEach((element) => {
    const footerSubElement = document.createElement("div");
    footerSubElement.classList.add("footer__sub__container");
    footerSubElement.innerHTML = element;
    // console.log(element)
    if (footerElementType === "softwareSkills") {
      softwareSkillsElement.appendChild(footerSubElement);
    } else if (footerElementType === "tehnologySkills") {
      tehnologySkillsElement.appendChild(footerSubElement);
    } else if (footerElementType === "languages") {
      languagesElement.appendChild(footerSubElement);
    } else {
      throw new Error("Wrong footer sub type");
    }
  });
};

const setFooter = async (response) => {
  const softwareSkills = response.footer.softwareSkills;
  const tehnologySkills = response.footer.tegnologySkills;
  const languages = response.footer.languages;
  const contactDetails = response.footer.contactDetails;

  setFooterSubElements(softwareSkills, "softwareSkills");
  setFooterSubElements(tehnologySkills, "tehnologySkills");
  setFooterSubElements(languages, "languages");
  setFooterSubElements(contactDetails, "contactDetails");
};

const renderHistory = async (response) => {
  // const response = await getData();
  setHistory(response, "education");
  setHistory(response, "work");
};

const renderPage = async () => {
  const response = await getData();

  setHeader(response);
  // const work = response.history.work;
  // const education = response.history.education;
  renderHistory(response);

  setFooter(response);
};
