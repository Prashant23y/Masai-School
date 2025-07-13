const API_URL = "https://api.tvmaze.com/shows";
const ITEMS_PER_PAGE = 6;

let allMovies = [];
let filteredMovies = [];
let currentPage = parseInt(localStorage.getItem("currentPage")) || 1;
let currentGenre = localStorage.getItem("genre") || "";
let currentSort = localStorage.getItem("sort") || "";

const movieGrid = document.getElementById("movieGrid");
const pageNum = document.getElementById("pageNum");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const sortMovies = document.getElementById("sortMovies");
const genreFilter = document.getElementById("genreFilter");

window.addEventListener("DOMContentLoaded", async () => {
    allMovies = await fetchMovies();
    populateGenres(allMovies);
    applyFilterAndSort();
    renderMovies();
    updateButtons();
});

async function fetchMovies() {
    const res = await fetch(API_URL);
    return res.json();
}

function renderMovies() {
    movieGrid.innerHTML = "";
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const current = filteredMovies.slice(start, end);

    current.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";

        card.innerHTML = `
      <img src="${movie.image?.medium || ''}" alt="${movie.name}" />
      <h3>${movie.name}</h3>
      <p>Genre: ${movie.genres.join(", ") || "N/A"}</p>
      <p>Rating: ${movie.rating.average || "N/A"}</p>
      <button onclick="saveWatchLater(${movie.id})">Watch Later</button>
    `;
        movieGrid.appendChild(card);
    });

    pageNum.textContent = `Page ${currentPage}`;
    localStorage.setItem("currentPage", currentPage);
}

function updateButtons() {
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage * ITEMS_PER_PAGE >= filteredMovies.length;
}

prevBtn.onclick = () => {
    if (currentPage > 1) {
        currentPage--;
        renderMovies();
        updateButtons();
    }
};

nextBtn.onclick = () => {
    if (currentPage * ITEMS_PER_PAGE < filteredMovies.length) {
        currentPage++;
        renderMovies();
        updateButtons();
    }
};

function populateGenres(movies) {
    const genreSet = new Set();
    movies.forEach(m => m.genres.forEach(g => genreSet.add(g)));

    [...genreSet].sort().forEach(genre => {
        const option = document.createElement("option");
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });

    if (currentGenre) genreFilter.value = currentGenre;
}

genreFilter.onchange = () => {
    currentGenre = genreFilter.value;
    localStorage.setItem("genre", currentGenre);
    currentPage = 1;
    applyFilterAndSort();
    renderMovies();
    updateButtons();
};

sortMovies.onchange = () => {
    currentSort = sortMovies.value;
    localStorage.setItem("sort", currentSort);
    currentPage = 1;
    applyFilterAndSort();
    renderMovies();
    updateButtons();
};

function applyFilterAndSort() {
    filteredMovies = [...allMovies];

    if (currentGenre) {
        filteredMovies = filteredMovies.filter(m => m.genres.includes(currentGenre));
    }

    if (currentSort === "rating") {
        filteredMovies.sort((a, b) => (b.rating.average || 0) - (a.rating.average || 0));
    } else if (currentSort === "title") {
        filteredMovies.sort((a, b) => a.name.localeCompare(b.name));
    }
}

function saveWatchLater(id) {
    let saved = JSON.parse(localStorage.getItem("watchLater")) || [];
    if (!saved.includes(id)) {
        saved.push(id);
        localStorage.setItem("watchLater", JSON.stringify(saved));
        alert("Added to Watch Later!");
    } else {
        alert("Already in Watch Later");
    }
}
