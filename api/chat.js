export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: "Server is missing ANTHROPIC_API_KEY. Add it in your Vercel project's Environment Variables.",
    });
  }

  const { context } = req.body || {};
  if (!context || typeof context !== "string") {
    return res.status(400).json({ error: "Missing 'context' string in request body." });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-5",
        max_tokens: 1000,
        messages: [{ role: "user", content: context }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || "Anthropic API request failed." });
    }

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message || "Unexpected server error." });
  }
}
