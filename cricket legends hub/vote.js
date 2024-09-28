const votes = {};
const voteButtons = document.querySelectorAll('.voteBtn');
const resultBtn = document.getElementById('resultBtn');
const resultPopup = document.getElementById('resultPopup');
const resultsDiv = document.getElementById('results');
const closeButton = document.querySelector('.close');

// Add event listeners to vote buttons
voteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const player = button.parentElement.getAttribute('data-player');
        votes[player] = (votes[player] || 0) + 1;
        alert(`${player} has been voted!`);
    });
});

// Show results
resultBtn.addEventListener('click', () => {
    if (Object.keys(votes).length === 0) {
        alert('Please select a player to vote for.');
        return;
    }

    resultsDiv.innerHTML = '';
    for (const player in votes) {
        resultsDiv.innerHTML += `<p>${player}: ${votes[player]} votes</p>`;
    }
    resultPopup.style.display = 'block';
});

// Close popup
closeButton.addEventListener('click', () => {
    resultPopup.style.display = 'none';
});

// Close popup on outside click
window.onclick = function(event) {
    if (event.target == resultPopup) {
        resultPopup.style.display = 'none';
    }
}
