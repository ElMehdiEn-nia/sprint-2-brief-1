import { creatures } from "./data.js";
let teamCount = 0;
const MAX_TEAM = 6;

const teamCounterEl = document.getElementById('team-counter');
const searchInput = document.getElementById('search');
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
function Afficher(Array) {
    const section = document.getElementById("grid");
    Array.forEach((pokemon) => {
        section.innerHTML += `
        <article data-id="${pokemon.name}" class="pokemon-card flex flex-col gap-3 rounded-card bg-white p-3 pb-4">
          <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
            
            <span class="absolute left-3 top-2 font-mono text-sm text-muted">${pokemon.id}</span>
            <img class="col-span-1 " src="${pokemon.image}"/>
          </div>
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-display text-xl font-semibold">${pokemon.name}</h3>
            <span class="rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">${pokemon.type}</span>
          </div>
          <p class="text-sm text-black">${pokemon.level} · Total 470</p>
          <button type="button" class="btn-outline">Ajouter à l'équipe</button>
        </article>`;
    });
}
Afficher(creatures);