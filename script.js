const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("player");
const computerDisplay = document.getElementById("computer");

document.querySelectorAll(".rps-item").forEach(item => {
    item.addEventListener("click", () => {
        const player = item.id;
        const computer = choices[Math.floor(Math.random() * 3)];

        // Hide both first
        playerDisplay.style.display = "none";
        computerDisplay.style.display = "none";

        if (player === computer) {
            playerDisplay.textContent = "Tie!";
            playerDisplay.style.display = "block";
        } else if (
            (player === "rock" && computer === "scissors") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper")
        ) {
            playerDisplay.textContent = `You win!`;
            playerDisplay.style.display = "block";
        } else {
            computerDisplay.textContent = `Computer wins!`;
            computerDisplay.style.display = "block";
        }
    });
});
