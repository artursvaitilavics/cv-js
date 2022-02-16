const renderPage = async () => {
  const response = await getData();
  await getHistory();
  createHeader(response);
  renderFullHistory(response);
  setFooter(response);
};

renderPage();

const btnSortByDate = document.querySelector("#sort-by-date");
let dateSortTypeGrowing = false;

btnSortByDate.addEventListener("click", () => {
  dateSortTypeGrowing = !dateSortTypeGrowing;
  sortByDate(dateSortTypeGrowing);
  renderHistory();
});
