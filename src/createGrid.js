import { podcasts } from "./data.js";
import { createPodcastCard } from "./components/podcastCard.js";
import { openModal } from "./components/createModal.js";

export function renderGrid() {
  const grid = document.getElementById("podcastGrid");
  grid.innerHTML = "";
  podcasts.forEach((podcast) => {
    const card = createPodcastCard(podcast, openModal);
    grid.appendChild(card);
  });
}
