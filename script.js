
let teamCount = 0;
const MAX_TEAM = 6;

const teamCounterEl = document.getElementById('team-counter');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.pokemon-card');


document.querySelectorAll('.add-team-btn').forEach(button => {
    button.addEventListener('click', () => {
        if (teamCount < MAX_TEAM) {
            teamCount++;
            teamCounterEl.textContent = teamCount;


            button.textContent = 'Ajouté !';
            button.classList.remove('bg-gray-900', 'hover:bg-gray-800');
            button.classList.add('bg-green-600', 'cursor-not-allowed');
            button.disabled = true;
        } else {
            alert("Votre équipe est complète (6 créatures max) !");
        }
    });
});


filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const selectedType = btn.getAttribute('data-type');


        filterBtns.forEach(b => {
            b.classList.remove('bg-red-600', 'text-white');
            b.classList.add('bg-gray-200', 'text-gray-700');
        });
        btn.classList.remove('bg-gray-200', 'text-gray-700');
        btn.classList.add('bg-red-600', 'text-white');


        cards.forEach(card => {
            const cardType = card.getAttribute('data-type');
            if (selectedType === 'tous' || cardType === selectedType) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});


searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    cards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        if (name.includes(query)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
});