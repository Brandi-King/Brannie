// Five game scores
let scores = [75, 88, 92, 65, 81];

// Get the container from the HTML
let container = document.getElementById("container");

// Create the title
let title = document.createElement("h1");
title.textContent = "Game Score Logs";
container.appendChild(title);

// Create the message
let message = document.createElement("h2");
message.textContent = "My Loop Project";
container.appendChild(message);

// Create a place for the game scores
let items = document.createElement("div");
items.id = "items";
container.appendChild(items);

// FOR LOOP
// Displays the 5 game scores
for (let i = 0; i < scores.length; i++) {
    let newItem = document.createElement("div");

    newItem.className = "item";

    newItem.textContent = "Game " + (i + 1) + ": " + scores[i];

    items.appendChild(newItem);
}

// Create the counter
let counter = document.createElement("p");
counter.id = "counter";
container.appendChild(counter);

// WHILE LOOP
// Counts from 1 to 10
let number = 1;

while (number <= 10) {
    counter.textContent += number + " ";
    number++;
}
// Create the button
let button = document.createElement("button");
button.textContent = "Change CSS";
container.appendChild(button);

// Variable that controls the CSS
let score = 75;

// Button function
button.onclick = function changePage() {

    if (score >= 90) {
        container.style.backgroundColor = "lightgreen";
        container.style.borderColor = "green";
        message.textContent = "Excellent Score!";
    }

    else if (score >= 70) {
        container.style.backgroundColor = "lightyellow";
        container.style.borderColor = "orange";
        message.textContent = "Good Score!";
    }

    else {
        container.style.backgroundColor = "lightcoral";
        container.style.borderColor = "red";
        message.textContent = "Keep Practicing!";
    }
};