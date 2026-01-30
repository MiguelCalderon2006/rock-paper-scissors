// ============================================
// YOUR CODE HERE (arrays, functions, logic)
// ============================================

const choice = ["rock", "paper", "scissors"]

const getComputerChoice = () => { return choice[Math.floor(Math.random() * 3)] }

const getWinner = (player, computer) => {



    switch (computer) {
        case player: return "tie"

        case "rock": if (player === "paper")
            return "player";
        else return "computer";
        case "paper":
            if (player === "scissors")
                return "player";
            else return "computer";
        case "scissors":
            if (player === "rock")
                return "player";
            else return "computer"
    }
}






// ============================================
// DOM WIRING (I handle this - connects your code to the UI)
// ============================================
const matchupDisplay = document.getElementById("matchup");
const playerDisplay = document.getElementById("player");
const computerDisplay = document.getElementById("computer");

document.querySelectorAll(".rps-item").forEach(item => {
    item.addEventListener("click", () => {
        const playerChoice = item.id;
        const computerChoice = getComputerChoice();
        const result = getWinner(playerChoice, computerChoice);

        // Show matchup
        matchupDisplay.textContent = `${playerChoice} vs ${computerChoice}`;
        matchupDisplay.classList.remove("pop");
        void matchupDisplay.offsetWidth; // force reflow
        matchupDisplay.classList.add("pop");

        playerDisplay.style.display = "none";
        computerDisplay.style.display = "none";

        if (result === "tie") {
            playerDisplay.textContent = "Tie!";
            playerDisplay.style.color = "orange";
            playerDisplay.style.display = "block";
            playerDisplay.classList.remove("pop");
            void playerDisplay.offsetWidth;
            playerDisplay.classList.add("pop");
        } else if (result === "player") {
            playerDisplay.textContent = "You win!";
            playerDisplay.style.color = "green";
            playerDisplay.style.display = "block";
            playerDisplay.classList.remove("pop");
            void playerDisplay.offsetWidth;
            playerDisplay.classList.add("pop");
        } else {
            computerDisplay.textContent = "Computer wins!";
            computerDisplay.style.color = "red";
            computerDisplay.style.display = "block";
            computerDisplay.classList.remove("pop");
            void computerDisplay.offsetWidth;
            computerDisplay.classList.add("pop");
        }
    });
});
