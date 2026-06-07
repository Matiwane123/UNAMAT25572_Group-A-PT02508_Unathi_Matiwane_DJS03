// src/components/PodcastPreview.jsx
import React from "react";

export default function PodcastPreview({
  cover,
  title,
  description,
  genres,
  updatedAt,
}) {
  return (
    <div className="podcast-preview">
      <img src={cover} alt={`${title} cover`} className="cover" />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="genres">
        {genres.map((g) => (
          <span key={g} className="genre">
            {g}
          </span>
        ))}
      </div>
      <small>Last updated: {updatedAt}</small>
    </div>
  );
}
