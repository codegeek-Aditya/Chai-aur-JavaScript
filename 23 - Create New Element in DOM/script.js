const parentElement = document.querySelector(".parent");
console.log(parentElement.innerHTML);
console.log(parentElement.children); // NodeList
console.log(parentElement.children[0]); //
console.log(parentElement.children[0].innerHTML); // Monday

for (let i = 0; i < parentElement.children.length; i++) {
  console.log(parentElement.children[i].innerHTML);
}
parentElement.children[1].style.color = "orange";

// firstElementChild -- to know the fisrt element
console.log(parentElement.firstElementChild);

// lastElementChild -- to know the last element
console.log(parentElement.lastElementChild);

// parentElement -- to know the parent element of the child
const dayOne = document.querySelector(".day");
console.log(dayOne.parentElement); // parent

// nextElementSibling -- used to get next element sibling of the specified target
console.log(dayOne.nextElementSibling); // tuesday

// to know the child nodes of the parent element
console.log(`Nodes :`, parentElement.childNodes); // output : 9 nodeslist
// though we have only 4 child nodes it shows 9 bcoz it also counts the new line on which the code has been written jaise ki monday ke baad tuesday likha hua hai toh isne enter ko bhi as a child node count kiya hai


