import "./styles.css"

function renderAbout(){

const container = document.createElement("div");
const heading = document.createElement("h1");
heading.id = "menuHead"

heading.textContent = "It's Delicious"

container.appendChild(heading);

return container;

}

export { renderAbout };