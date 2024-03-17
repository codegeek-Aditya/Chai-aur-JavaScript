// TODO: Create element using DOM Manipulation

const div = document.createElement("div");
console.log(div);
div.className = "main";
div.setAttribute("title", `generated title`);
div.style.backgroundColor = "#00ff00";
div.style.fontSize = "2rem";
div.style.padding = `10px`;
div.style.color = "#000";
div.style.fontFamily = "roboto";
div.style.textAlign = "center";
div.innerText = `Aditya aur JavaScript`; // not recommended
const addText = document.createTextNode("Aditya aur Javascript");
div.appendChild(addText);
// ab iss purey ko document mei display karna hai
document.body.appendChild(div);
div.id = Math.round(Math.random() * 10 + 1);
