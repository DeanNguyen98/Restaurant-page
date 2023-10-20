function createContact () {
    const maincontact = document.createElement("div");
    maincontact.id = "main-contact";
    const contactheader = document.createElement("h1");
    contactheader.textContent = "Contact";
    const para1 = document.createElement("p");
    para1.textContent = "If your order is late, incorrect , or if you're not happy with the food, please contact us directly on 0129230902";
    const header2 = document.createElement("h2");
    header2.textContent ="Opening hours:";
    const para2 = document.createElement("p");
    para2.textContent ="Monday to Sunday: 5:15pm - 9:15pm";
    const header3 = document.createElement("h2");
    header3.textContent ="Delivery hours:";
    const para3 = document.createElement("p");
    para3.textContent ="Monday to Sunday: 5:00pm - 9:30pm";
    const header4 = document.createElement("h2");
    header4.textContent ="Location:";
    const contactimage = document.createElement("img");
    contactimage.src = "./images/map.png";
    contactimage.classList.add("map");
    
    maincontact.appendChild(contactheader);
    maincontact.appendChild(para1);
    maincontact.appendChild(header2);
    maincontact.appendChild(para2);
    maincontact.appendChild(header3);
    maincontact.appendChild(para3);
    maincontact.appendChild(header4);
    maincontact.appendChild(contactimage);


    return maincontact;
}

function loadContact () {
    const main = document.querySelector(".main");
    main.innerText = "";
    main.appendChild(createContact());
    return main;
}

export {loadContact};