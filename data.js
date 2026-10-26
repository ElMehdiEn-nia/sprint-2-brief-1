// =============================================================
// data.js — les créatures de VOTRE univers
// =============================================================
// TODO : remplissez ce tableau avec au moins 12 créatures
// (Pokémon, Digimon ou Yu-Gi-Oh!), en respectant ce format :
//
// {
//   id: "#001",                                   // "#" suivi de 3 chiffres
//   name: "Exemple",                              // texte
//   type: "Feu",                                  // une valeur d'une liste fixe
//   level: "Base",                                // texte
//   stats: { hp: 45, attack: 49, defence: 49 },   // 3 nombres de 0 à 999
//   image: "https://example.com/001.png",         // lien https vers une image
//   description: "Une courte description."        // 10 à 200 caractères
// }
//
// Pensez à citer la source de vos images dans le README.

const creatures = [{
    id: "#001",
    name: "Pikachu",
    type: "Electrique",
    level: "Base",
    stats: { hp: 45, attack: 49, defence: 49 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3iC9Xq112pQPRfORw6PmZ6IgsHwiwAIiIWR8bxmVHng&s=10",
    description: "Pikachu est une créature fictive de type Electrique issue de la franchise Nintendo,et la mascotte officielle se l'univers Pokemon."
},
{
    id: "#002",
    name: "flareon",
    type: "Feu",
    level: "Base",
    stats: { hp: 42, attack: 51, defence: 39 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQleOmjY8wyErEXhvuZ2HtydpxB7Y06kXtpK9ZOmLNYTA&s=10",
    description: "Flareon est un Pokemon de type Feu de la première génération,et l'une des évolutions possibles d'Evoli."
},

{
    id: "#003",
    name: "Mega Rayquaza ",
    type: "Dragon",
    level: "Base",
    stats: { hp: 67, attack: 52, defence: 50 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW9kFRnTSr_tvNxHd9teTsL1ErMDmLTutngrxxkESzjA&s=10",
    description: "Mega Rayquaza est un Mega-Pokemon légendaire de type Dragon et vol,issu de la Mega-Evolution de Rayquaza dans Pokemon Rubis Oméga et Saphir Alpha."
},
{
    id: "#004",
    name: "Greninja",
    type: "Eau",
    level: "Base",
    stats: { hp: 43, attack: 49, defence: 49 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9XTyREE8ovuKndCZrEgQdEQSekAbqM0NEQeUGlPbFQ&s=10",
    description: "Amphinobi ou bien Greninja est un Pokemon de type Eau et Ténèbles introduit dans la 6eme génération(région de Kalos)."
},
{
    id: "#005",
    name: "Mega Lucario",
    type: "Terre",
    level: "Base",
    stats: { hp: 53, attack: 50, defence: 46 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKT2cZrodIpQJrBDJL4_MaO0_J0t2wpBJq0ti5gTeHQ&s=10",
    description: "Mega Lucario est la forme méga-évoluée du Pokemon de type Combat et Acier Lucario."
},
{
    id: "#006",
    name: "Charizard",
    type: "Feu",
    level: "Base",
    stats: { hp: 45, attack: 57, defence: 41 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDKq9vsVMNNoRLf6ZtwHrsJKgC401k3lX5CiJYlU_oA&s=10",
    description: "Charizard est un Pokemon emblématique de la première génération."
},
{
    id: "#007",
    name: "Rapidash",
    type: "Feu",
    level: "Base",
    stats: { hp: 42, attack: 44, defence: 52 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSemRSNmDmcjwPllv919IATxiCkyJ0se1xuG3RvEa2Tbw&s=10",
    description: "Galopa ou Rapidash en anglais est un Pokemon de la première génération et l'évolution de Ponyta."
},
{
    id: "#008",
    name: "Omanyte",
    type: "Eau",
    level: "Base",
    stats: { hp: 38, attack: 39, defence: 58 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW7P6-gmIxOVVUZR3ojANu_FbKRx5NOZLEaE_FTZWerQ&s=10",
    description: "Omanyte est un Pokemon préhistorique de la 1ère génération de type Roche et Eau."
},
{
    id: "#009",
    name: "Muk",
    type: "La terre",
    level: "Base",
    stats: { hp: 55, attack: 50, defence: 35 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2EBMxyJkFhd-rv61erCe3cQ2pOmJRY8rKdko8UpkDw&s=10",
    description: "Muk est un Pokemon de type Poison de la première génération ."
},
{
    id: "#010",
    name: "Magmar",
    type: "Feu",
    level: "Base",
    stats: { hp: 49, attack: 53, defence: 50 },
    image: "https://attackofthefanboy.com/wp-content/uploads/2021/12/Magmar-December-2021-Spotlight-Hour-Pokemon-GO.jpg",
    description: "Magmar est un Pokemon de type Feu de la première génération ."
},
{
    id: "#011",
    name: "Eevee",
    type: "La terre",
    level: "Base",
    stats: { hp: 45, attack: 39, defence: 37 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZGe2S4-_aCJag1yZJBjl_xngQiGF9xZRVVZ4JTzeiw&s=10",
    description: "Est un Pokemon de type Normal de la première génération,célèbre pour sa capacité unique à évoluer en de multiples formes ."
},
{
    id: "#012",
    name: "Vaporeon",
    type: "Eau",
    level: "Base",
    stats: { hp: 49, attack: 42, defence: 40 },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeb2LFWS5B0S09GUBlx7uxP3mNcYAKDG11Qiz6auYgaw&s",
    description: "Vaporeon est un Pokemon de type Eau de la première génération,connu sous le nom de Pokemon Bubble Jet."
},


];        
