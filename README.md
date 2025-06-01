
# NeuroDM - Mass DM Bot (Educational Use Only)

> A multi-token Discord bot for educational testing, showcasing automated DM systems using Node.js and Discord.js.

[![Node.js Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

NeuroDM is a modular and easy-to-use mass DM bot that sends automated direct messages using multiple Discord tokens. This project is **strictly for educational purposes**, such as testing spam filters or learning how async message queues work. It is **not intended** for malicious use.

---

⚠️ **Disclaimer:** This tool is for **educational and ethical testing only**. The author is **not responsible** for any misuse, abuse, or violations of Discord’s Terms of Service.
**Don't be a skibidi criminal.**

---

## 🚀 Installation

> Requires **Node.js v18+**

### Linux/macOS

```sh
git clone https://github.com/neo696969/NeuroDM.git
cd NeuroDM
cd src
npm install
```

### Windows

```sh
git clone https://github.com/neo696969/NeuroDM.git
cd NeuroDM
cd src
npm install
```

Then edit `config.json` to set:

* `tokens`: An array of your Discord bot tokens
* `prefix`: The command prefix
* `message`: The message to be spammed

---

## 💥 Usage Example

Run the bot:

```sh
node index.js
```

Once active, send this command from a Discord channel where your bot is present:

```sh
<prefix>dm <userID>
```

The bot will begin **spamming that user’s DMs infinitely** until you shut down the application (`CTRL + C`).

> Change the spam message in `config.json`. Add more tokens to scale faster.

*For more advanced examples and tips, check the [Wiki][wiki].*

---

## 🧑‍💻 Development Setup

```sh
# Install all dependencies
npm install

# Run the bot
node index.js
```

Optional: Add logging, rate limit handlers, or even proxy rotation if you're into the nerdy stuff.

---

## 📦 Release History

* 1.0.0

  * First public open-source release
  * Added infinite DM loop
  * Multi-token support
* 0.9.0

  * Beta release with 10-message cap

## 🤝 Contributing

1. Fork it ([https://github.com/neo696969/NeuroDM/fork](https://github.com/neo696969/NeuroDM/fork))
2. Create your feature branch (`git checkout -b feature/cool-feature`)
3. Commit your changes (`git commit -am 'Add a cool feature'`)
4. Push to the branch (`git push origin feature/cool-feature`)
5. Create a new Pull Request

