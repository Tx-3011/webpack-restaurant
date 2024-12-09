import "./styles.css"

function renderMenu(){

const container = document.createElement("div");
const heading = document.createElement("h1");
heading.id = "menuHead"

heading.textContent = "Me  'N  U"

container.appendChild(heading);

return container;

}

export { renderMenu };