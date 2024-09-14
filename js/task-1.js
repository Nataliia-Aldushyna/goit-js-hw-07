const categories = document.querySelector("#categories");
console.log("Number of categories: ", categories.children.length);
categories.childNodes.forEach((el) => {
  if (el.children) {
    console.log("Category ", el.children[0].textContent);
    console.log("Elemets: ", el.children[1].children.length);
  }
});