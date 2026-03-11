const API_BASE_URL = "https://history.muffinlabs.com/date";

const historicCard = document.getElementById('historic-card');

function loadHistoricEvents() {
    const url = buildUrl("");
    let data = fetchHistoricEvents(url);
}

function fetchHistoricEvents(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                historicCard.innerText = "Daten konnten nicht geladen werden.";
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            historicCard.innerText = JSON.stringify(data);
        })
        .catch(error => {
            historicCard.innerText = "Daten konnten nicht geladen werden.";
            console.error('Error:', error);
        });
}

function buildUrl(date) {
    if (!isValidDate(date)) {
        return `${API_BASE_URL}/1/1`;
    }
    let month = date.getMonth();
    let day = date.getDate();
    return `${API_BASE_URL}/${month}/${day}`;
}

function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
}

function parseData() {

}

loadHistoricEvents();