// TODO: Document Object Model -- DOM

// to know the attribute we use -- getAttribute('class / id want to know the attributes of')
console.log(document.getElementById("title").getAttribute("id")); // ouput : title

// to set the attribute we use -- setAttribute
console.log(
  document.getElementById("title").setAttribute("class", "title heading ")
);
// can set attribute as much as you want by giving a space between them
// setAttribute == this will show undefined in console but will always overwrite the existing class attribute

// adding styles using DOM
const title = document.querySelector(".title");
title.style.color = "#00ff00";
title.style.backgroundColor = "#202020";
title.style.letterSpacing = "20px";

// innerText -- shows the real time text present on the screen
console.log(title.innerText); // output : DOM learning and Manipulation

// textContent -- shows the all over text present which may be hidden by some function or method or styling
console.log(title.textContent); // output : DOM learning and Manipulation test text

// innerHTML -- shows all the tags and attributes present inside the element
console.log(title.innerHTML); // output : DOM learning and Manipulation <span style="display: none;">test text</span>

// . -- to select class we use .
// # -- to select id we use #

// NodeList : not an array but have properties as that of Array

const list = document.querySelectorAll("li");
console.log(list);
// though node list appears as array but its not like an array but have some properties as that of an array
list[0].style.color = "#00ff00";

// using forEach on Node List
list.forEach((listItem) => {
  listItem.style.color = "#212121";
  listItem.style.backgroundColor = `#00ff00`;
  listItem.style.listStyle = "none";
});

// converting node list into Array
const myConvertedArray = Array.from(list);
console.log(myConvertedArray);

myConvertedArray.forEach((li) => {
  li.style.color = `red`;
});

// converting HTMLCollection into an Array
const wholeList = document.getElementsByClassName("list-item");
console.log(wholeList);

const newConvertedArray = Array.from(wholeList);
// now we can use the htmlCOllection like an array as we have converted into an array

newConvertedArray.forEach((list) => {
  list.style.color = `#ddd`;
  list.style.backgroundColor = "#000";
});

// querySelectorAll -- nodeList
// getElementsByClassName -- HTMLCollection
const unorderedList = document.getElementsByClassName("newOlList");
console.log(unorderedList);

const olList = document.querySelectorAll(`ol`);
console.log(olList);


