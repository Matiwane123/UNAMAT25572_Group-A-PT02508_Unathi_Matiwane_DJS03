/**
 * Date Formatter - Utility function for date formatting.
 *
 * @principle SRP - Single Responsibility Principle: This module only formats dates and does not handle any unrelated logic.
 */
export const DateUtils = {
  /**
   * Formats a date string into a human-readable format.
   * @param {string} dateStr - ISO date string.
   * @returns {string} Formatted date string.
   */
  format(dateStr) {
    const date = new Date(dateStr);
    return `Updated ${date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}`;
  },
};

import { genres } from "../data.js";

export function getGenreNames(ids) {
  return ids.map((id) => {
    const g = genres.find((genre) => genre.id === id);
    return g ? g.title : "Unknown";
  });
}
