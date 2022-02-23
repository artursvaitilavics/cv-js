const mainList = [
  "Frodo",
  "Sam",
  "Pippin",
  "Merry",
  "Gandalf",
  "Legolas",
  "Boromir",
  "Aragorn",
  "Gimli",
];

const hobbitList = () => mainList.slice(5);

const listElement = document.querySelector("#list");
const btnFullList = document.querySelector("#full-list");
const btnSmallList = document.querySelector("#small-list");

const createDOMList = (list) => {
  index = 0;
  while (listElement.firstChild) {
    listElement.removeChild(listElement.firstChild);
  }
  list.forEach((element) => {
    const nameElement = document.createElement("div");
    nameElement.id = `fella-number-${index}`;
    nameElement.innerHTML = element;
    listElement.appendChild(nameElement);
    index++;
  });
};

btnFullList.addEventListener("click", () => {
  createDOMList(mainList);
});

btnSmallList.addEventListener("click", () => {
  createDOMList(hobbitList());
});
