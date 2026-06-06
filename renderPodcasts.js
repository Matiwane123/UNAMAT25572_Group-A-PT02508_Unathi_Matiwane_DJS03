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
