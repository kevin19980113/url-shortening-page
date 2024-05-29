export async function getShortenUrl(url) {
  const response = await fetch("/api/v1/shorten", {
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
