
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
        playerDisplay.classList.remove("result-tie", "result-win", "result-lose");
        computerDisplay.classList.remove("result-tie", "result-win", "result-lose");

        if (result === "tie") {
            playerDisplay.textContent = "Tie!";
            playerDisplay.classList.add("result-tie");
            playerDisplay.style.display = "block";
            playerDisplay.classList.remove("pop");
            void playerDisplay.offsetWidth;
            playerDisplay.classList.add("pop");
        } else if (result === "player") {
            playerDisplay.textContent = "You win!";
            playerDisplay.classList.add("result-win");
            playerDisplay.style.display = "block";
            playerDisplay.classList.remove("pop");
            void playerDisplay.offsetWidth;
            playerDisplay.classList.add("pop");
        } else {
            computerDisplay.textContent = "You Lose!";
            computerDisplay.classList.add("result-lose");
            computerDisplay.style.display = "block";
            computerDisplay.classList.remove("pop");
            void computerDisplay.offsetWidth;
            computerDisplay.classList.add("pop");
        }
    });
});
