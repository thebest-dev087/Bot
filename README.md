# 🛡️ HEXGUARD — Bot WhatsApp v2.0

> Dono: **THEBEST** (`+258 84 888 1576`) • Bot: `+27 67 012 7384`
> 300+ comandos • Aliases PT/EN • IA • VIP/Premium • Antiban Admin • Welcome com imagem

---

## 📲 Instalação no Termux

```bash
pkg update && pkg upgrade -y
pkg install nodejs git ffmpeg termux-api -y   # termux-api = notificações do pairing code

unzip hexguard-bot.zip
cd hexguard-bot
npm install

# Edita config.js (já vem com o teu número, mas confirma)
nano config.js

# (Opcional mas recomendado) chave da IA
export LOVABLE_API_KEY="cole_aqui"
echo 'export LOVABLE_API_KEY="cole_aqui"' >> ~/.bashrc

node index.js
```

### 🔑 Pairing code
Aparece no terminal **e** notificação no telemóvel (se instalaste `termux-api` + app **Termux:API**).
WhatsApp → **Aparelhos conectados → Conectar com nº telefone → digita o código**.

---

## 🤖 Como obter uma API de IA

O bot usa por padrão o **Lovable AI Gateway** (Gemini grátis com créditos).
Outras opções 100% funcionais:

| Provider | Onde obter | Variável |
|---|---|---|
| **Lovable AI** (recomendado, grátis) | https://lovable.dev → Settings → API Keys | `LOVABLE_API_KEY` |
| **Google Gemini** (grátis até limite) | https://aistudio.google.com/apikey | `GEMINI_API_KEY` |
| **OpenAI GPT** (pago) | https://platform.openai.com/api-keys | `OPENAI_API_KEY` |
| **Groq** (rápido, grátis) | https://console.groq.com/keys | `GROQ_API_KEY` |
| **OpenRouter** (vários modelos) | https://openrouter.ai/keys | `OPENROUTER_API_KEY` |

Define com `export NOME="chave"` e reinicia. O ficheiro `bot/lib/ai.js` já está preparado para Lovable; para usar outra, edita esse ficheiro e troca o endpoint.

---

## 📜 Menus (14)
`.menu` `.menucompleto` `.menuia` `.menugp` `.menujogos` `.menuacoes` `.menubrincadeiras` `.menuanti` `.menuutil` `.menueco` `.menuadm` `.menudono` `.menuvip` `.menupremium` `.menudownload` `.menurank`

## 🆕 Comandos especiais
- `.prefix` — mostra prefixo atual
- `.totalcomandos` — conta tudo
- `.ping` — RAM, uptime, CPU, msgs, grupos…
- `.jdv @user` / `.jdvbot` / `.jdvjogar 1-9` — Jogo da Velha com tabuleiro
- `.limpar` — limpeza visual (mensagem longa vazia)
- `.resetdb` / `.limpezahd` — DONO zera DB
- `.addcomando <nome> <resposta>` / `.delcomando <nome>` — comandos custom
- `.setvip` / `.unvip` / `.setpremium` / `.unpremium` — DONO atribui (ou a si mesmo se sem @)
- `.broadcast` `.join <link>` `.sairgrupo` `.listgrupos` — DONO

## 🛡️ Antis e Antiban Admin
Todos os antis: `antilink antifoto antivideo antisticker antistatus antipv antifake antipalavrao antispam welcome goodbye` → `.antilink on/off`.
**Antiban Admin** ativo por padrão: só o **DONO** pode banir admins. Outros admins recebem aviso 🛡️.

## 🌍 Aliases bilingues
Cada comando aceita várias formas. Ex.:
- `ban` = `banir` = `kick` = `expulsar` = `remove`
- `silenciar` = `mute` = `fechar` = `close` = `gpf` = `fechargrupo`
- `apagar` = `delete` = `del` = `d`
- `ia` = `ai` = `gpt` = `chat` = `gemini`

## 💎 VIP / Premium
- Comprar: `.comprarvip` / `.comprarpremium`
- DONO: `.setvip @user 30` / `.setpremium @user 30` (sem @ = aplica a si próprio)
- Comandos VIP: `.ia2 .megaia .ttsvip .stickervip .fastdaily .vipboost`
- Comandos PREMIUM: `.unlimitia .prioridade .premiumstats .megapack`

## 💰 Economia & Loja
`.saldo .perfil .top .topxp .daily .trabalhar .crime .roubar @ .loja .comprar <i> .items .usar <i> .pay @ <v> .trocar`
Tokens: `ban-token kick-token mute-token promote-token xp-boost saldo-boost shield`

## ⬇️ Download
`.play .playvid .ytmp3 .ytmp4 .tiktok .ig .fb .img .lyrics`
> Downloads usam APIs públicas. Se uma falhar, o bot devolve link alternativo. Para garantir 100%, mete a tua própria chave em `lib/handler.js` no `case "play"`.

---

## 🐛 Problemas comuns
| Erro | Solução |
|---|---|
| Pairing não aparece | Confirma `ownerNumber` em `config.js` (com código país, sem `+`) |
| Sem notificação | `pkg install termux-api` + app **Termux:API** |
| Bot diz "não sou admin" no `.ban` | O **bot** precisa ser admin do grupo, não só tu |
| Desconecta sempre | `rm -rf session/ && node index.js` |
| IA falha | `echo $LOVABLE_API_KEY` deve dar a chave |

🛡️ **HEXGUARD** by **THEBEST**
