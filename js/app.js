document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener("click", deleteAllClick)


})


const handleFormSubmit = function (event) {
  event.preventDefault();
  const newItem = document.createElement("p");
  newItem.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`;
  newItem.classList.add("reading-list-item")
  const resultParagraph = document.querySelector("#reading-list");
  resultParagraph.appendChild(newItem);
  this.reset();
}

const deleteAllClick = function (event) {
  const resultParagraph = document.querySelector("#reading-list");
  resultParagraph.textContent = null;

}
