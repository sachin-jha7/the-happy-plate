let menu = document.querySelector(".menu");
let exploreBtn = document.querySelector(".explore-btn");

exploreBtn.addEventListener("click", () => {
    menu.style.display = "block";
    vegBox.style.display = "none";
    nonVegBox.style.display = "none";
    sweetBox.style.display = "none";
    snacksBox.style.display = "none";
    pizaaBox.style.display = "none";
    foodText.style.display = "none";
    hrLine.style.display = "none";
});

let allFoodBtn = document.querySelector(".all-food");
let foodText = document.querySelector(".foods .heading");
let hrLine = document.querySelector(".foods hr");

foodText.style.display = "none";
hrLine.style.display = "none";

allFoodBtn.addEventListener("click", () => {
    vegBox.style.display = "block";
    nonVegBox.style.display = "block";
    sweetBox.style.display = "block";
    snacksBox.style.display = "block";
    pizaaBox.style.display = "block";
    foodText.style.display = "flex";
    hrLine.style.display = "block";
    menu.style.display = "block";
});


let vegBox = document.querySelector("#veg");
let nonVegBox = document.querySelector("#non-veg");
let sweetBox = document.querySelector("#sweets");
let snacksBox = document.querySelector("#snacks");
let pizaaBox = document.querySelector("#pizaas");

let sweetBtn = document.querySelector(".sweets");
let vegBtn = document.querySelector(".veg");
let nonVegBtn = document.querySelector(".non-veg");
let snacksBtn = document.querySelector(".snacks");
let pizzaBtn = document.querySelector(".pizzas");

vegBox.style.display = "none";
nonVegBox.style.display = "none";
sweetBox.style.display = "none";
snacksBox.style.display = "none";
pizaaBox.style.display = "none";

let side_bar = document.querySelector(".nav-links");
let side_bar_menuBtn = document.querySelector(".side-bar-menu-btn");
let cross_btn = document.querySelector(".cross-btn");

side_bar_menuBtn.addEventListener("click", () => {
    side_bar.style.transform = "translateX(-100%)";
    side_bar.style.boxShadow = "2px 2px 15px black";
});

cross_btn.addEventListener("click", () => {
    side_bar.style.transform = "translateX(0%)";
    side_bar.style.boxShadow = "0px 0px 0px black";
});

sweetBtn.addEventListener("click", () => {
    sweetBox.style.display = "block";
    vegBox.style.display = "none";
    nonVegBox.style.display = "none";
    snacksBox.style.display = "none";
    pizaaBox.style.display = "none";
    foodText.style.display = "none";
    hrLine.style.display = "none";
});

vegBtn.addEventListener("click", () => {
    vegBox.style.display = "block";
    nonVegBox.style.display = "none";
    sweetBox.style.display = "none";
    snacksBox.style.display = "none";
    pizaaBox.style.display = "none";
    foodText.style.display = "none";
    hrLine.style.display = "none";
});

nonVegBtn.addEventListener("click", () => {

    nonVegBox.style.display = "block";
    vegBox.style.display = "none";
    sweetBox.style.display = "none";
    snacksBox.style.display = "none";
    pizaaBox.style.display = "none";
    foodText.style.display = "none";
    hrLine.style.display = "none";
});

snacksBtn.addEventListener("click", () => {
    snacksBox.style.display = "block";
    nonVegBox.style.display = "none";
    vegBox.style.display = "none";
    sweetBox.style.display = "none";
    pizaaBox.style.display = "none";
    foodText.style.display = "none";
    hrLine.style.display = "none";
});

pizzaBtn.addEventListener("click", () => {
    pizaaBox.style.display = "block";
    nonVegBox.style.display = "none";
    vegBox.style.display = "none";
    sweetBox.style.display = "none";
    snacksBox.style.display = "none";
    foodText.style.display = "none";
    hrLine.style.display = "none";
});


document.querySelector(".back-btn").addEventListener("click", () => {
    info_card.style.display = "none";
});


let info_card = document.querySelector(".info-card");
let allCard = document.querySelectorAll(".card");
// console.log(allCard);
for (let card of allCard) {
    card.addEventListener("click", () => {
        cardName = card.getAttribute("id");
        info_card.style.display = "block";
        console.log(card);
        // VEG Section

        if (cardName == "veg-biryani") {
            info_card.childNodes[5].innerText = "Fragrant basmati rice layered with spiced paneer and fresh veggies, slow-cooked for rich flavor.";
            info_card.childNodes[3].src = "gallery/paneer-biryani_img.jpg";
        } else if (cardName == "paneer-butter") {
            info_card.childNodes[5].innerText = "Soft paneer cubes in a creamy, buttery tomato gravy with aromatic spices.";
            info_card.childNodes[3].src = "gallery/paneer butter masala img.jpg";
        } else if (cardName == "chili-paneer") {
            info_card.childNodes[5].innerText = "Crispy paneer tossed in Indo-Chinese chilli sauce with peppers and onions.";
            info_card.childNodes[3].src = "gallery/chili paneer img.jpg";
        } else if (cardName == "mix-veg") {
            info_card.childNodes[5].innerText = "Seasonal vegetables cooked in a mildly spiced, flavourful garvy.";
            info_card.childNodes[3].src = "gallery/mix veg img.jpg";
        } else if (cardName == "malai-kofta") {
            info_card.childNodes[5].innerText = "Soft paneer & potato dumplings in a rich, creamy cashew gravy.";
            info_card.childNodes[3].src = "gallery/malai kofta img.jpeg";
        } else if (cardName == "sahi-paneer") {
            info_card.childNodes[5].innerText = "Royal dish of cottage cheese in a rich, mildly sweet, creamy gravy.";
            info_card.childNodes[3].src = "gallery/sahi paneer img.jpg";
        }

        // Non Veg Section

        else if (cardName == "chicken-tandoori") {
            info_card.childNodes[5].innerText = "Tender chicken marinated in spices & yogurt, roasted to smoky perfection.";
            info_card.childNodes[3].src = "gallery/chicken tandoori img.jpg";
        } else if (cardName == "mutton-roganjosh") {
            info_card.childNodes[5].innerText = "Traditional slow-cooked Kashmiri mutton curry with aromatic spices.";
            info_card.childNodes[3].src = "gallery/mutton rogan josh.jpg";
        } else if (cardName == "egg-curry") {
            info_card.childNodes[5].innerText = "Boiled eggs in a flavourful spiced onion-tomato gravy.";
            info_card.childNodes[3].src = "gallery/egg curry img.jpeg";
        } else if (cardName == "mutton-biryani") {
            info_card.childNodes[5].innerText = "Layered basmati rice with tender mutton, slow-cooked with herbs & spices.";
            info_card.childNodes[3].src = "gallery/mutton biryani img.jpg";
        } else if (cardName == "fish-curry") {
            info_card.childNodes[5].innerText = "Fresh fish cooked in a tangy, spiced curry with coastal flavours.";
            info_card.childNodes[3].src = "gallery/fish curry image.jpg";
        } else if (cardName == "mutton-curry") {
            info_card.childNodes[5].innerText = "Tender mutton cooked in a rich, spicy traditional gravy.";
            info_card.childNodes[3].src = "gallery/mutton curry img.jpeg";
        }

        // Sweets Section

        else if (cardName == "rasmalai") {
            info_card.childNodes[5].innerText = "Soft cottage cheese discs soaked in saffron-flavoured sweet milk.";
            info_card.childNodes[3].src = "gallery/rasmalai img.jpeg";
        } else if (cardName == "gajar") {
            info_card.childNodes[5].innerText = "Classic Indian dessert made with slow-cooked carrots, milk & ghee.";
            info_card.childNodes[3].src = "gallery/gajar ka halwa img.jpg";
        } else if (cardName == "jalebi") {
            info_card.childNodes[5].innerText = "Crispy, golden spirals dipped in fragrant sugar syrup.";
            info_card.childNodes[3].src = "gallery/jalebi img.jpg";
        }
        else if (cardName == "kala-jamun") {
            info_card.childNodes[5].innerText = "Dark, rich gulab jamun with a caramelized outer layer and soft center.";
            info_card.childNodes[3].src = "gallery/kala jamun.jpg";
        } else if (cardName == "rasgulla") {
            info_card.childNodes[5].innerText = "Spongy, syrup-soaked Bengali sweet that melts in your mouth.";
            info_card.childNodes[3].src = "gallery/rash gulla img.jpg";
        } else if (cardName == "misti-doi") {
            info_card.childNodes[5].innerText = "Traditional sweet Bengali yogurt with a creamy caramel flavour.";
            info_card.childNodes[3].src = "gallery/misti doi img.jpg";
        }

        // Snacks Section

        else if (cardName == "samosa") {
            info_card.childNodes[5].innerText = "Crispy pastry filled with spiced potato mixture-perfect tea-time snack.";
            info_card.childNodes[3].src = "gallery/samosa img.jpg";
        } else if (cardName == "kachori") {
            info_card.childNodes[5].innerText = "Flaky, deep-fried snack stuffed with spicy lentil masala.";
            info_card.childNodes[3].src = "gallery/Kachori img.jpg";
        } else if (cardName == "pani-puri") {
            info_card.childNodes[5].innerText = "Crispy puris filled with spicy mint water, tangy chutney & potato mix.";
            info_card.childNodes[3].src = "gallery/pani puri img.jpg";
        } else if (cardName == "chhole-bhature") {
            info_card.childNodes[5].innerText = "Fluffy bhaturas served with rich and spicy chickpea curry.";
            info_card.childNodes[3].src = "gallery/chhole bhature img.jpg";
        } else if (cardName == "veg-burger") {
            info_card.childNodes[5].innerText = "Crispy vegetables patty with fresh veggies & sauces in a soft bun.";
            info_card.childNodes[3].src = "gallery/veg burger img.jpg";
        } else if (cardName == "paneer-burger") {
            info_card.childNodes[5].innerText = "Crispy paneer patty loaded with cheese, veggies & chef's special sauce.";
            info_card.childNodes[3].src = "gallery/paneer burger img.jpg";
        }

        // Pizza Section

        else if (cardName == "sausage-pizza") {
            info_card.childNodes[5].innerText = "Loaded with juicy chicken sausages, cheese & Italian herbs.";
            info_card.childNodes[3].src = "gallery/chicken_sausage_pizza_img.png";
        } else if (cardName == "margherita") {
            info_card.childNodes[5].innerText = "Classic cheese pizza with fresh basil & signature tomato sauce.";
            info_card.childNodes[3].src = "gallery/Margherita-Pizza-img.jpg";
        } else if (cardName == "peri-peri") {
            info_card.childNodes[5].innerText = "Veggies and cheese topped with spicy peri-peri seasoning tomato sauce.";
            info_card.childNodes[3].src = "gallery/peri peri veg pizza img.jpeg";
        }
    });

};
