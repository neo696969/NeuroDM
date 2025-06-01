
# NeuroDM - Mass DM Bot (Educational Use Only)

> A multi-token mass DM bot using Discord.js, made for testing and educational purposes.

[![Node.js Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

NeuroDM is a Node.js-powered mass direct messaging bot designed for Discord. It utilizes multiple tokens to send messages concurrently. This tool is for **educational and ethical testing only** (e.g. testing filters, learning async code, or just messing around **offline**).

![](header.png)

---

⚠️ **Disclaimer:**
This tool is provided **strictly for educational purposes**. The creator does **not condone** or support any form of abuse, spam, or terms of service violations on Discord.
**Don’t be a skibidi menace. Use responsibly.**

---

## 🛠️ Installation

> Requires Node.js v18+

### 1. Download the source code

```sh
git clone https://github.com/yourname/NeuroDM.git
```

### 2. Run the installer

```sh
install.bat
```

This will automatically navigate to the `src` folder and install all dependencies with `npm install`.

---

## 🚀 Running the Bot

After installing, simply run:

```sh
start.bat
```

It’ll launch the bot with a cool ASCII logo and run `index.js`.

---

## ⚙️ Config Setup

Edit `config.json` inside the `src` folder with:

```json
{
  "tokens": ["TOKEN1", "TOKEN2"],
  "prefix": "$",
  "message": "yo this is a DM from NeuroDM"
}
```

Use the prefix to trigger commands like:

```sh
$dm <userID>
```

It’ll start DM spamming that user using your list of tokens.
(Press `CTRL + C` to stop the madness.)

---

## 🧑‍💻 Development Setup

For nerds who want to customize or expand it:

```sh
cd src
npm install
node index.js
```

You can add logging, delay controls, rate-limit handling, or even token rotation. Go wild (ethically).

---

## 📦 Release History

* 1.0.0

  * Initial open-source release
  * DM spamming with multi-token support
  * Batch installation and startup via `.bat` files


## 🤝 Contributing

1. Fork this repo ([https://github.com/yourname/NeuroDM/fork](https://github.com/yourname/NeuroDM/fork))
2. Create your feature branch (`git checkout -b feature/something`)
3. Commit your changes (`git commit -am 'Add something'`)
4. Push to the branch (`git push origin feature/something`)
5. Create a Pull Request

---

<!-- Badges -->

[npm-image]: https://img.shields.io/node/v/discord.js.svg?style=flat-square
[npm-url]: https://nodejs.org/
[npm-downloads]: https://img.shields.io/npm/dm/discord.js.svg?style=flat-square
