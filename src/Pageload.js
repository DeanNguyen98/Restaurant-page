import { loadHome} from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";


function createHeader () {
    const header = document.createElement("header");
    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Pho PHD";
    content.appendChild(header);
    header.appendChild(restaurantName);
    header.appendChild(createNav());
    return header;
}


function createNav() {
const navbar = document.createElement("nav");
navbar.getAttribute("id", "navbar");
const homeButton = document.createElement("button");
homeButton.classList.add("button-nav")
homeButton.textContent = "Home";
const menuButton = document.createElement("button");
menuButton.textContent = "Menu";
menuButton.classList.add("menu-btn");
menuButton.classList.add("button-nav");
const contactButton = document.createElement("button");
contactButton.textContent = "Contact";
contactButton.classList.add("button-nav");

navbar.appendChild(homeButton);
navbar.appendChild(menuButton);
navbar.appendChild(contactButton);

menuButton.addEventListener("click", () => {
    loadMenu();
    getActiveButton(menuButton);
})

homeButton.addEventListener("click", () => {
    loadHome();
    getActiveButton(homeButton);
})

contactButton.addEventListener("click", () => {
    loadContact();
    getActiveButton(contactButton);
})

return navbar
}

function getActiveButton (button) {
        document.querySelectorAll(".button-nav").forEach((btn) => {
            btn.classList.remove("active");
        })
       button.classList.add("active");
}

function createMain () {
    const main = document.createElement("main");
    main.classList.add("main");
    return main;
}

function createFooter () {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    const copyright = document.createElement("p");
    copyright.textContent = "Copyright @Deannguyen";
    footer.appendChild(copyright);
    return footer;
}

function createWebsite () {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    getActiveButton(document.querySelector(".button-nav"));
    loadHome();
    document.addEventListener("DOMContentLoaded", function () {
        const orderButton = document.getElementById("order");
        orderButton.addEventListener("click", () => {
            loadMenu();
            getActiveButton(document.querySelector(".button-nav:nth-child(2)"));
        });
    });
    return content;
}

export default createWebsite;
