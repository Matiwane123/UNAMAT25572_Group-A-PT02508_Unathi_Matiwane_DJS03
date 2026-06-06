// src/data.js

export const podcasts = [
  {
    id: "10716",
    title: "Something Was Wrong",
    description:
      "Something Was Wrong is an Iris Award-winning true-crime docuseries about the discovery, trauma, and recovery from shocking life events and abusive relationships.",
    seasons: 14,
    image:
      "https://content.production.cdn.art19.com/images/cc/e5/0a/08/cce50a08-d77d-490e-8c68-17725541b0ca/9dcebd4019d57b9551799479fa226e2a79026be5e2743c7aef19eac53532a29d66954da6e8dbdda8219b059a59c0abe6dba6049892b10dfb2f25ed90d6fe8d9a.jpeg",
    genres: [1, 2],
    updated: "2022-11-03T07:00:00.000Z",
  },
  {
    id: "5675",
    title: "This Is Actually Happening",
    description:
      "Extraordinary true stories of life-changing events told by the people who lived them.",
    seasons: 12,
    image:
      "https://content.production.cdn.art19.com/images/5a/4f/d4/19/5a4fd419-11af-4270-b31c-2c7ed2f563a5/bc913bc926be23d04c9a4d29a829269a753be3d2612dad91f7e92ba4618fefc5c8802af29a1d32b3261eb03f83613e2535e3c574469b0cb510c32cd8d94cfaa1.png",
    genres: [2],
    updated: "2022-11-01T10:00:00.000Z",
  },
  {
    id: "5279",
    title: "American History Tellers",
    description:
      "The Cold War, Prohibition, the Gold Rush, the Space Race. Every part of your life can be traced to our history.",
    seasons: 51,
    image:
      "https://content.production.cdn.art19.com/images/a4/8f/53/79/a48f5379-a90e-4197-915c-c0645e0d9336/8d9e6ebc4d65a9575fa626318e426fcf8be7f98ea0c1b7b103de2b32def46ded57537627d80b36f55edf7c9a8ad639bd9816f68c79b56845203a0b5bc4a63a55.png",
    genres: [3],
    updated: "2022-11-02T07:01:00.000Z",
  },
  // …continue with the rest of your podcast objects
];

export const genres = [
  {
    id: 1,
    title: "Personal Growth",
    description: "Podcasts on self-improvement, mindfulness, and productivity.",
    shows: ["10716", "10276", "6756", "10660"],
  },
  {
    id: 2,
    title: "Investigative Journalism",
    description: "In-depth reporting and analysis of important stories.",
    shows: ["10716", "5675", "10539", "9177", "8860"],
  },
  {
    id: 3,
    title: "History",
    description: "Podcasts covering historical topics and eras.",
    shows: ["5279", "9177", "6807", "8514", "5629"],
  },
  // …rest of your genre objects
];

export const seasons = [
  {
    id: "10716",
    seasonDetails: [
      { title: "Season 1", episodes: 10 },
      { title: "Season 2", episodes: 8 },
      // …rest of the season details
    ],
  },
  {
    id: "5675",
    seasonDetails: [
      { title: "Season 1", episodes: 10 },
      { title: "Season 2", episodes: 10 },
      // …rest of the season details
    ],
  },
  // …rest of your season objects
];
