document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("greetButton").addEventListener("click", getGreeting);
});

function getGreeting() {
    const name = document.getElementById("nameInput").value;
    const messageElement = document.getElementById("message");

    if (!name) {
        messageElement.textContent = "Oops! Please enter your name. 😊";
        return;
    }

    fetch(`http://localhost:5000/api/greet?name=${name}`)
        .then(response => response.json())
        .then(data => {
            messageElement.textContent = data.message + " 🎉" || data.error;
        })
        .catch(error => {
            messageElement.textContent = "Oops! Something went wrong. 😢";
            console.error(error);
        });
}
