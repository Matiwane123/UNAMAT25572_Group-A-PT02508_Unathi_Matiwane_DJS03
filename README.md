# DJS03: React Podcast Landing Page

## Overview

This project is a **React-based landing page** for a podcast discovery app. It fetches podcast data from an external API and dynamically renders a **responsive grid of podcast previews**. The app demonstrates skills in **data fetching, component structure, rendering logic, and layout styling**.

---

## Core Objectives

- Fetch podcast data from [Podcast API](https://agent-6a253a2c1415d00147c34a1--unamat25572-djs03.netlify.app/) on initial page load.
- Show a **loading indicator** while fetching data.
- Handle **errors** or **empty results** with clear user messages.
- Render a responsive **grid layout** of podcast previews using reusable React components.
- Each podcast card displays:
  - 🎧 Podcast **image**
  - 📌 Podcast **title**
  - 📂 Number of **seasons**
  - 🏷️ Associated **genre names**
  - ⏱️ Formatted **last updated** date (e.g., "2 days ago")
- Apply clean, consistent layout and styling across screen sizes using **CSS Grid** or **Flexbox**.
- Maintain high-quality, readable code with clear structure and **JSDoc comments**.

---

## Technical Requirements

- Use **React functional components**
- Use the **Fetch API**
- Use `useEffect()` to fetch data once on mount
- Use `useState()` to manage podcast data
- Use `.map()` to dynamically render PodcastPreviewCard components
- Format dates using `date-fns` or a custom formatter

---

## Project Structure

- \*podcast-app/
- ├── public/

  │ └── index.html

  ├── src/
  │ ├── components/

  │ │ ├── PodcastCard.jsx

  │ │ ├── Modal.jsx

  │ ├── pages/

  │ │ └── Home.jsx

  │ ├── data.js

  │ ├── App.jsx

  │ ├── main.jsx

  │ └── styles.css

  ├── package.json

  ├── vite.config.js

  └── README.md

  ***

## Responsiveness Requirements

- Must look good on:
  - Desktop (≥1200px)
  - Tablet (~768px)
  - Mobile (~375px)
- Use **CSS Grid** or **Flexbox**
- Media queries or frameworks like **Tailwind CSS** are allowed

---

## Deliverables

- **Functional React Application**
  - A working React app that fetches podcast data from an external API on initial load.
  - The app renders a grid of podcast previews using reusable components.

- **Loading, Error, and Empty States**
  - A clear loading indicator is displayed while fetching data.
  - Meaningful error or empty state messaging is shown if the fetch fails or returns no results.

- **Podcast Preview Card Component**
  - A reusable component that displays:
    - Podcast image
    - Podcast title
    - Number of seasons
    - Genre tags
    - Last updated date in a human-readable format (e.g., "3 days ago")

---
