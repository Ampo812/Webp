// script.js
document.addEventListener('DOMContentLoaded', () => {
    const fetchDataButton = document.getElementById('fetchData');
    const showSummaryButton = document.getElementById('showSummary');
    const showLanguagesButton = document.getElementById('showLanguages');
    const showTopListButton = document.getElementById('showTopList');
    const usernameInput = document.getElementById('username');
    const resultsSection = document.getElementById('results');
    const errorSection = document.getElementById('error');
    const errorMessage = document.getElementById('errorMessage');

    let userData = null;

    fetchDataButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        if (!username) return;

        fetchUserData(username);
    });

    showSummaryButton.addEventListener('click', () => {
        displaySummary();
    });

    showLanguagesButton.addEventListener('click', () => {
        displayLanguages();
    });

    showTopListButton.addEventListener('click', () => {
        displayTopList();
    });

    function fetchUserData(username) {
        fetch(`https://www.codewars.com/api/v1/users/${username}`)
            .then(response => {
                if (response.status === 404) {
                    throw new Error('Felhasználó nem található');
                }
                return response.json();
            })
            .then(data => {
                userData = data;
                errorSection.style.display = 'none'; // Elrejtjük az esetleges hibákat
                displaySummary(); // Megjelenítjük az összesített adatokat
            })
            .catch(error => {
                userData = null; // Nincs adatunk a felhasználóról
                showError(error.message); // Hibát jelenítünk meg
            });
    }

    function displaySummary() {
        if (!userData) {
            return; // Ha nincs felhasználói adat, nem csinálunk semmit
        }
        const { honor, ranks } = userData;
        const overallScore = ranks.overall.score;
        resultsSection.innerHTML = `
            <h2>Összesített Adatok</h2>
            <p>Összes pont: ${honor}</p>
            <p>Összesített rang: ${ranks.overall.name} (${overallScore} pont)</p>
        `;
    }

    function displayLanguages() {
        if (!userData) {
            return; // Ha nincs felhasználói adat, nem csinálunk semmit
        }
        const { ranks } = userData;
        const languages = ranks.languages;
        let html = '<h2>Nyelvek szerint</h2><ul>';
        for (const [language, rank] of Object.entries(languages)) {
            html += `<li>${language}: ${rank.score} pont (${rank.name})</li>`;
        }
        html += '</ul>';
        resultsSection.innerHTML = html;
    }

    function displayTopList() {
        // Ha van egy API végpont a top listákhoz, itt lekérhetjük az adatokat
        // Itt egy példát mutatok be, a tényleges megvalósításhoz további adatforrást kellene használni
        resultsSection.innerHTML = `
            <h2>Toplista - funkció még nincs kész</h2>
            <p>Jelenleg nincs ilyen bocsi:(</p>
        `;
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorSection.style.display = 'block';
        resultsSection.innerHTML = ''; // Ürítjük az eredmények szekciót
    }
});
