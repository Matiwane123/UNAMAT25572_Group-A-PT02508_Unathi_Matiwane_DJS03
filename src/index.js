// src/index.js

import { podcasts, genres, seasons } from "./data.js";

// DOM elements
const podcastGrid = document.getElementById("podcastGrid");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDesc = document.getElementById("modalDesc");
const modalGenres = document.getElementById("modalGenres");
const modalUpdated = document.getElementById("modalUpdated");
const seasonList = document.getElementById("seasonList");

// Render podcast cards
function renderPodcasts() {
  podcastGrid.innerHTML = "";
  podcasts.forEach((podcast) => {
    const card = document.createElement("div");
    card.className = "podcast-card";
    card.innerHTML = `
      <img src="${podcast.image}" alt="${podcast.title}" class="card-img"/>
      <h2 class="card-title">${podcast.title}</h2>
    `;
    card.addEventListener("click", () => openModal(podcast));
    podcastGrid.appendChild(card);
  });
}

// Open modal with podcast details
function openModal(podcast) {
  modalTitle.textContent = podcast.title;
  modalImage.src = podcast.image;
  modalImage.alt = podcast.title;
  modalDesc.textContent = podcast.description;

  // Genres
  modalGenres.innerHTML = "";
  podcast.genres.forEach((genreId) => {
    const genre = genres.find((g) => g.id === genreId);
    if (genre) {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = genre.title;
      modalGenres.appendChild(tag);
    }
  });

  // Updated text
  modalUpdated.textContent = new Date(podcast.updated).toDateString();

  // Seasons
  seasonList.innerHTML = "";
  const seasonData = seasons.find((s) => s.id === podcast.id);
  if (seasonData) {
    seasonData.seasonDetails.forEach((season) => {
      const li = document.createElement("li");
      li.textContent = `${season.title} - ${season.episodes} episodes`;
      seasonList.appendChild(li);
    });
  }

  modal.classList.remove("hidden");
}

// Close modal
function closeModal() {
  modal.classList.add("hidden");
}

// Event listeners
closeModalBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Initialize
renderPodcasts();
