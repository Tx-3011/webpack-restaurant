import "./styles.css"
import pizzaImgPath from "./images/pizzaSlice.png"


function renderHome(){

const container = document.createElement("div");
container.id = "container"

const heading = document.createElement("h1");
heading.textContent = "Tony's Pizzeria";
heading.id = "heading";


const pizza = document.createElement("img");
pizza.src = pizzaImgPath;
pizza.alt = "Photo of a Pizza Slice"
pizza.id = "pizzaImage";

const orderBtn = document.createElement("button");
orderBtn.textContent = "Order Now!!";
orderBtn.id = "orderBtn"

const leftDiv = document.createElement("div");
leftDiv.id = "left";

const rightDiv = document.createElement("div");
rightDiv.id = "right";

leftDiv.appendChild(heading);
leftDiv.appendChild(orderBtn);
rightDiv.appendChild(pizza);

container.appendChild(leftDiv);
container.appendChild(rightDiv);

return container;

}

export{renderHome};