const createHeader = async (response) => {
  const nameElement = document.querySelector("#name");
  nameElement.innerHTML = response.basicInfo.name;

  const titleElement = document.querySelector("#title");
  titleElement.innerHTML = response.basicInfo.title;

  const aboutMeElement = document.querySelector("#about-me");
  aboutMeElement.innerHTML = response.basicInfo.aboutMe;

  // Set image
  const header = document.querySelector(".header");
  const imageElement = document.createElement("img");
  imageElement.id = "profile-picture";

  imageElement.setAttribute("src", response.imageUrl);
  imageElement.setAttribute("width", "200px");

  header.appendChild(imageElement);
};
