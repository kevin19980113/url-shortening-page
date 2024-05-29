import fetch from "node-fetch";

export const handler = async function (event) {
  const { url } = JSON.parse(event.body);

  const response = await fetch("https://cleanuri.com/api/v1/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return {
      statusCode: response.status,
      body: errorText,
    };
  }

  const result = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
