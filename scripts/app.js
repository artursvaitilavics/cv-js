


const renderPage = async () => {
  const response = await getData();
  await getHistory();
  createHeader(response);
  renderFullHistory(response);
  setFooter(response);
};


renderPage();

const btnSortByDate = document.querySelector("#sort-by-date");
let dateSortTypeGrowing = true;

btnSortByDate.addEventListener("click", () => {
  dateSortTypeGrowing = !dateSortTypeGrowing;
  sortByDate(dateSortTypeGrowing);
  renderHistory()
  // renderFullHistory(); //This metod should sort by date what ever is displayed
});

const btnFullHistory = document.querySelector("#full-history");

btnFullHistory.addEventListener("click", () => {
  renderFullHistory();
});
