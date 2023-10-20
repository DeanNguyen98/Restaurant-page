function createHome() {
    const mainHome = document.createElement("div");
    mainHome.id = "main-home";
    const mainheading = document.createElement("h1");
    mainheading.textContent = "About Us";
    const para1 = document.createElement("p");
    para1.textContent = "Opened in 2012 and located centrally in Marrickville, Pho Phd is a fully licenced Vietnamese restaurant that specialises in traditional Pho Beef Noodle Soup whilst serving other Vietnamese finest favourites. The restaurant continues on from the success and popularity of the original retired PHD Vietnamese Restaurant which was established in 2006."
    const para2 = document.createElement("p");
    para2.textContent = "Our extensive menu selections caters for all with a great selection of vegan / vegetarian dishes and gluten-free options. Other services we offer includes take-away, deliveries or catering for that special occasion.";
    const orderButton = document.createElement("button");
    orderButton.textContent = "Order Now";
    orderButton.id = "order";
    mainHome.appendChild(mainheading);
    mainHome.appendChild(para1);
    mainHome.appendChild(para2);
    mainHome.appendChild(orderButton);
    return mainHome;
}

function loadHome() {
    const main = document.querySelector(".main");
    main.textContent = "";
    main.appendChild(createHome());
}

export {loadHome};