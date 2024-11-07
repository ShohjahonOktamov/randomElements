const limit = document.getElementById("limit");
const list = document.getElementById("list");
const generateButton = document.getElementById("generate");
let numbers = [];

function generate() {
    list.innerHTML = "";
    numbers = [];
    for (let i = 1; i <= limit.value; i++) {
        numbers.push(i);
    }

    while (numbers.length) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const number = numbers.splice(randomIndex, 1)[0];

        const li = document.createElement("li");
        li.textContent = number;
        list.appendChild(li);
    }
};
