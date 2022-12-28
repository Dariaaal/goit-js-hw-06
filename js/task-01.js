const categories = document.querySelectorAll("#categories");
const items = document.querySelectorAll(".item");

console.log("Number of categories: ", items.length);

items.forEach((item)=>{
    const title = item.firstElementChild.textContent;
    const elements = item.lastElementChild.children.length;
    console.log("Category: ", title);
    console.log("Elements: ", elements);
})