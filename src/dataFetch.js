const API_BASE_URL =
  process.env.NODE_ENV === "production" ? "https://cleanuri.com" : "/api";

export async function getShortenUrl(url) {
  const response = await fetch(`${API_BASE_URL}/v1/shorten`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: url,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }

  const result = await response.json();

  if (result["error"]) {
    throw new Error(result["error"]);
  }

  return result["result_url"];
}
