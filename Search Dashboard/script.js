// Generate names

const names = [];
const initialNames = ['Ram', 'Shyam', 'Mohit', 'Daksh', 'Prashant', 'Nishant', 'Raunak', 'Alok'];
for(let i = 1; i <= 25; i++){
    for(let name of initialNames){
        names.push(`${name} ${i}`);
    }
}

const searchInp = document.getElementById("searchInp");
const loadtext = document.getElementById("loadtext");
const strokeCount = document.getElementById("strokeCount");
const searchCount = document.getElementById("searchCount");
const results = document.getElementById("results");
const noData = document.getElementById("noData");
const topBtn = document.getElementById("topBtn");

let keystrokes = 0;
let searchTriggers = 0;
let debounceTimer = null;

// Debounce Function

function debounce(func, delay){
    return function(...args){
        loadtext.classList.remove('hidden');
        debounceTimer = setTimeout(() => {
            loadtext.classList.add('hidden');
            func(...args);
        },delay);
    };
}

// Throttle function

function throttle(func, limit){
    let lastCall = 0;
    return function (...args){
        const now = Date.now();
        if(now - lastCall >= limit){
            lastCall = now;
            func(...args);
        }
    }
}

// Highlight matches
function highlight(text, keyword){
    const regex = new RegExp(`(${keyword})`, "gi");
    return text.replace(regex, `<span class="highlight">$1</span>`);
}

// Main search handler

function handleSearch(query){
  searchTriggers++;
  searchCount.textContent = searchTriggers;

  results.innerHTML = "";
  if(!query){
    noData.classList.add("hidden");
    return;
  }

  const filtered = names.filter(name =>
    name.toLowerCase().includes(query.toLowerCase())
  );

    if(filtered.length === 0){
        noData.classList.remove("hidden");
    }else{
        noData.classList.add("hidden");
        filtered.forEach(name => {
            const li = document.createElement("li");
            li.innerHTML = highlight(name, query);
            results.appendChild(li);
        });
    }
}

// Input event

searchInp.addEventListener("input", (e) => {
  keystrokes++;
  strokeCount.textContent = keystrokes;
  debouncedSearch(e.target.value);
});

// search debounce
const debouncedSearch = debounce(handleSearch, 1000);

// Scroll event to show/hide top button
window.addEventListener( "scroll", throttle( () => {
    if(window.scrollY > 200) {
      topBtn.classList.remove("hidden");
    }else {
      topBtn.classList.add("hidden");
    }
  }, 500)
);

// Back to Top Button
topBtn.textContent = "↑ Top";
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});