let select = document.getElementById("selectFood");
let food = ["Burger King", "Carl's Jr", "Wendy's", "McDonalds", "Taco Time", "Taco Bell", "Panda Express"];

for (var i = 0; i < food.length; i++) {
    let choice = food[i];
    let el = document.createElement("option");
    el.textContent = choice;
    el.value = choice;
    select.appendChild(el);
}
let x = document.getElementById("food").innerHTML = choice;

function getRandomFood() {
    let random = Math.floor(Math.random() * food.length);
    document.getElementById("food").innerHTML = food[random];
}