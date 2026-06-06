export async function fetchPodcasts() {
  const res = await fetch("https://podcast-api.netlify.app/");
  if (!res.ok) throw new Error("Failed to fetch podcasts");
  return res.json();
}
