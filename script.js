const limit = document.getElementById("limit");
const list = document.getElementById("list");
const generateButton = document.getElementById("generate");
let numbers = null;

function generate() {
    if (numbers === null) {
        numbers = [];
        for (let i = 1; i <= limit.value; i++) {
            numbers.push(i);
        }
    }

    if (numbers.length > 0) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const number = numbers.splice(randomIndex, 1)[0];

        const li = document.createElement("li");
        li.textContent = number;
        list.appendChild(li);
    } else {
        alert("No numbers are left!");
    }
};
