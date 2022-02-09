const createCard = (element) => {
  const bodyElement = document.body;

  const cardElement = document.createElement("div");
  const cardContent = document.createElement("div");
  const header = document.createElement("div");
  const body = document.createElement("div");
  const title = document.createElement("div");
  const subtitle = document.createElement("div");
  const date = document.createElement("div");

  cardElement.classList.add("cardElement");
  cardContent.classList.add("cardContent");

  header.classList.add("card__container");
  body.classList.add("card__container");

  header.id = "card-header";
  body.id = "card-body";
  // title.classList.add("card__container");

  if (element.jobTitle) {
    title.innerHTML = element.jobTitle;
    subtitle.innerHTML = element.company;
  } else {
    title.innerHTML = element.schoolTitle;
    subtitle.innerHTML = element.subject;
  }
  date.innerHTML = `${element.from} - ${element.to}`;

  body.innerHTML = element.description;

  header.appendChild(title);
  header.appendChild(subtitle);
  header.appendChild(date);

  cardContent.appendChild(header);
  cardContent.appendChild(body);

  cardElement.appendChild(cardContent);

  cardElement.style.display = "block";
  cardElement.addEventListener("click", () => {
    cardElement.remove();
  });

  bodyElement.appendChild(cardElement);
};
