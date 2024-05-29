const apiKey = "XhiXtUJ0igWmmp0mNGzdDXz0VpSKM8CHmURudbhsZ9fFSTjo3hKUEkkDQQTH";

export async function getShortenUrl(url) {
  const response = await fetch(`https://api.tinyurl.com/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      url: url,
    }),
  });

  const result = await response.json();

  if (result["errors"].length !== 0) {
    console.log(result["errors"]);
    throw new Error(result["errors"]);
  }

  return result.data["tiny_url"];
}

//API TOKEN : XhiXtUJ0igWmmp0mNGzdDXz0VpSKM8CHmURudbhsZ9fFSTjo3hKUEkkDQQTH
