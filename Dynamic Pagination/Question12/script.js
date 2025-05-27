const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');

let start = 0;
const limit = 10;
let isLoading = false;

// Function to fetch photos
async function fetchPhotos() {
  isLoading = true;
  loader.style.display = 'block';

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const photos = await response.json();
    renderPhotos(photos);
    start += limit;
  } catch (error) {
    console.error('Error fetching photos:', error);
  } finally {
    loader.style.display = 'none';
    isLoading = false;
  }
}

// Function to render photos
function renderPhotos(photos) {
  photos.forEach(photo => {
    const photoDiv = document.createElement('div');
    photoDiv.classList.add('photo');
    photoDiv.innerHTML = `
      <img src="${photo.thumbnailUrl}" alt="${photo.title}" />
      <p>${photo.title}</p>
    `;
    gallery.appendChild(photoDiv);
  });
}

// Function to handle scroll event
function handleScroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !isLoading) {
    fetchPhotos();
  }
}

// Initial fetch
fetchPhotos();

// Event listener for scroll
window.addEventListener('scroll', handleScroll);