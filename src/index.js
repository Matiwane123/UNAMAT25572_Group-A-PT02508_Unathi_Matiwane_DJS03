// src/index.js

import { podcasts, genres, seasons } from "./data.js";

// Example podcast data (replace with API fetch if needed)
const podcasts = [
  {
    id: 1,
    title: "Tech Talks Daily",
    description: "Daily insights into the world of technology.",
    image: "https://via.placeholder.com/300x150?text=Tech+Talks",
    genres: ["Technology", "Innovation"],
    updated: "Updated June 2026",
    seasons: [
      { number: 1, episodes: 10 },
      { number: 2, episodes: 12 },
    ],
  },
  {
    id: 2,
    title: "History Uncovered",
    description: "Exploring untold stories from history.",
    image: "https://via.placeholder.com/300x150?text=History",
    genres: ["History", "Education"],
    updated: "Updated May 2026",
    seasons: [
      { number: 1, episodes: 8 },
      { number: 2, episodes: 9 },
    ],
  },
];

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
  podcast.genres.forEach((genre) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = genre;
    modalGenres.appendChild(tag);
  });

  // Updated text
  modalUpdated.textContent = podcast.updated;

  // Seasons
  seasonList.innerHTML = "";
  podcast.seasons.forEach((season) => {
    const li = document.createElement("li");
    li.textContent = `Season ${season.number} - ${season.episodes} episodes`;
    seasonList.appendChild(li);
  });

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
