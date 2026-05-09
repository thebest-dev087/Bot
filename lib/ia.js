const axios = require("axios");

async function askAI(prompt, system = "Você é um assistente útil e divertido. Responde em português.") {
  const key = process.env.LOVABLE_API_KEY;
  if (key) {
    try {
      const r = await axios.post(
        "https://ai.gateway.lovable.dev/v1/chat/completions",
        {
          model: "google/gemini-2.5-flash",
          messages: [{ role: "system", content: system }, { role: "user", content: prompt }],
        },
        { headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" }, timeout: 30000 }
      );
      return r.data?.choices?.[0]?.message?.content || "🤖 Sem resposta.";
    } catch (e) {
      return "🤖 Erro na IA: " + (e.response?.data?.error?.message || e.message);
    }
  }
  return "🤖 IA não configurada. Define `LOVABLE_API_KEY` no Termux:\n\n`export LOVABLE_API_KEY=\"sua_chave\"`";
}

module.exports = { askAI };
