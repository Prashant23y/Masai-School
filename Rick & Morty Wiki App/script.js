let currPage = 1;
const container = document.getElementById("characterBox");
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function loadCharacters(page) {
  fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(res => res.json())
    .then(data => {
      container.innerHTML = "";
      data.results.slice(0, 6).forEach(char => {
        container.innerHTML += `
          <div class="characterCard">
            <a href="detail.html?id=${char.id}">
              <img src="${char.image}" alt="${char.name}" />
              <h3>${char.name}</h3>
              <p>Species: ${char.species}</p>
              <p>Status: ${char.status}</p>
            </a>
          </div>
        `;
      });
      prevBtn.disabled = !data.info.prev;
      nextBtn.disabled = !data.info.next;
    });
}

prevBtn.addEventListener("click", () => {
  if (currPage > 1) {
    currPage--;
    loadCharacters(currPage);
  }
});

nextBtn.addEventListener("click", () => {
  currPage++;
  loadCharacters(currPage);
});

loadCharacters(currPage);