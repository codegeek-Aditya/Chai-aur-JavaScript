// TODO: Add li to language class

// using function -- not recommended because of the Optimisation Issue
function addLanguageName(languageName) {
  const list = document.createElement("li");
  document.querySelector("li");
  list.innerHTML = `${languageName}`;
  document.querySelector(".language").appendChild(list);
}
addLanguageName("React");
addLanguageName("Angular");

// using function(arrow) -- but in an optimised way
const addOptiLang = (langName) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(li);
};
addOptiLang("goLang");

// editing the value

const secondLang = document.querySelector("li:nth-child(2)");
const newLi = document.createElement("li");
newLi.textContent = "Mojo";
secondLang.replaceWith(newLi);

// ediitng -- using outer html
const newSecondLang = document.querySelector(`li:first-child`);
newSecondLang.outerHTML = `<li>TypeScript</li>`;


// remove -- eg.last child
const lastLang = document.querySelector("li:last-child");
lastLang.remove();
