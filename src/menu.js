function createMenu () {
    const mainmenu = document.createElement('div');
    mainmenu.id = "main-menu";
    mainmenu.appendChild(createMenuItems("chicken pho", "Signature Chicken Pho: $16"));
    mainmenu.appendChild(createMenuItems("fried rice", "Fried Rice: $17"));
    mainmenu.appendChild(createMenuItems("vermicelli", "Stir Fry Vermicelli: $16"));
    mainmenu.appendChild(createMenuItems("beef", "Shaking Beef: $20"));
    mainmenu.appendChild(createMenuItems("summer", "Summer Rolls: $12"));
    mainmenu.appendChild(createMenuItems("rolls", "Spring Rolls: $12"));
    return mainmenu;
}

function createMenuItems (name, description) {
    const menuItems = document.createElement('div');
    menuItems.classList.add("menu-item");
    const itemImage = document.createElement("img");
    itemImage.src = `images/${name}.jpg`;
    const itemDescription = document.createElement("div");
    itemDescription.textContent = description;
    menuItems.appendChild(itemImage);
    menuItems.appendChild(itemDescription);
    return menuItems;

}

function loadMenu () {
    const main = document.querySelector(".main");
    main.textContent = "";
    main.appendChild(createMenu());
    return main;
}

export {loadMenu};