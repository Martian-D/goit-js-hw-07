const list = document.querySelector("#categories");
const items = list.querySelectorAll(".item");
const totalCategories = items.length;
console.log(`Number of categories: ${totalCategories}`);

items.forEach((item) => {
  const titleElement = item.querySelector("h2");
  const categoryName = titleElement.textContent;
  const categoryItems = item.querySelectorAll("li");
  const elementsCount = categoryItems.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
