const item = document.querySelectorAll("#categories");
const categories = document.querySelectorAll(".item");

console.log("Number of categories: ", item.length);

// console.log("Category: " + item[0].firstElementChild.textContent);
// console.log("Elements: " + item[0].lastElementChild.children.length);

// console.log("Category: " + item[1].firstElementChild.textContent);
// console.log("Elements: " + item[1].lastElementChild.children.length);

// console.log("Category: " + item[2].firstElementChild.textContent);
// console.log("Elements: " + item[2].lastElementChild.children.length);

categories.forEach((item)=>{
    const title = item.firstElementChild.textContent;
    const elements = item.lastElementChild.children.length;
    console.log("Category: ", title);
    console.log("Elements: ", elements);
})