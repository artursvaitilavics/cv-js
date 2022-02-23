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

    footerSubElement.title = `Companies where I have worked with ${element}`;

    footerSubElement.addEventListener("click", () => {
      // checkForNull()
      scroll({
        top: 0,
        left: 100,
        behavior: "smooth",
      });
      setActiveHistoryFromSoftware(element);
      // renderHistory(element)
    });

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
