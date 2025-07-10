const detailContainer = document.getElementById("characterDetail");
const urlParams = new URLSearchParams(window.location.search);
const charId = urlParams.get("id");

fetch(`https://rickandmortyapi.com/api/character/${charId}`)
  .then(res => res.json())
  .then(char => {
    detailContainer.innerHTML = `
      <h2>${char.name}</h2>
      <img src="${char.image}" alt="${char.name}" />
      <p>Status: ${char.status}</p>
      <p>Species: ${char.species}</p>
      <p>Type: ${char.type || "Unknown"}</p>
      <p>Gender: ${char.gender}</p>
      <p>Origin: ${char.origin.name}</p>
      <p>Location: ${char.location.name}</p>
      <p>Episode Count: ${char.episode.length}</p>
    `;
  });
