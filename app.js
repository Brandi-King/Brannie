// Five game scores
let scores = [75, 88, 92, 65, 81];

// Get Elements from the HTML
let container = document.getElementById("container");
let message = document.getElementById("message");
let items = document.getElementById("items");
let counter = document.getElementById("counter");
let button = document.getElementById("changeButton");

// FOR LOOP
// Display 5 game scores
for (let i = 0; i < scores.length; i++) {
    let newItem = document.createElement("div");

    newItem.className = "item";
    newItem.textContent = "Game " + (i + 1) + ": " + scores[i];

    items.appendChild(newItem);
}


// WHILE LOOP
// Counts from 1 to 10
let number = 1;

while (number <= 10) {
    counter.textContent += number + " ";
    number++;
}

// Variable that controls the CSS
let score = 75;

//Change CSS when the button is clicked
button.onclick = function changePage() {

    //Remove any previous CSS Class
    container.classList.remove(
        "excellent", 
        "good", 
        "average"
    );

    if (score >= 90) {
        container.classList.add("excellent");
        message.textContent = "Excellent Score!";
    }

    else if (score >= 70) {
        container.classList.add("good");
        message.textContent = "Good Score!";
    }

    else {
        container.classList.add("practice");
        message.textContent = "Keep Practicing!";
    }
};