# NeuroDM - Mass DM Bot (Just for Learning, Don’t Be Weird)

> Basically, it’s a Discord mass DM bot built with Discord.js, lets you hit up folks using a bunch of tokens at once. For *testing* and *learning* only, alright? No funny business.

[![Node.js Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

NeuroDM runs on Node.js and can blast out DMs to Discord users using several tokens at the same time. Again, this is for people wanting to mess with async code, poke at Discord’s filters, or just tinker offline. Don’t use it to spam. Seriously.

![](header.png)

---

⚠️ **Heads up:**  
This bot’s just for educational shenanigans. No spamming, no breaking Discord’s rules, no “skibidi” nonsense, okay? Whatever you do, it’s on you—not me.

---

## 🛠️ How To Get It Running

> Make sure you’ve got Node.js v18 or up. Anything older? Eh, good luck.

### 1. Grab the code

```sh
git clone https://github.com/yourname/NeuroDM.git
```

### 2. Install the stuff

```sh
install.bat
```

Just double-click or run that. It’ll hop into the `src` folder and grab all the dependencies with good ol’ `npm install`.

---

## 🚀 Fire Up the Bot

After it’s installed, just do:

```sh
start.bat
```

You’ll see a snazzy ASCII logo pop up, then boom, `index.js` is running. Magic.

---

## ⚙️ Tweak Your Config

Open up `config.json` in the `src` folder. Looks like this:

```json
{
  "tokens": ["TOKEN1", "TOKEN2"],
  "prefix": "$",
  "message": "yo this is a DM from NeuroDM"
}
```

Use the prefix to run stuff like:

```sh
$dm <userID>
```

That’ll start DM’ing the poor soul you picked, using all your tokens.  
Need to escape? Hit `CTRL + C`. Don’t say I didn’t warn you.

---

## 🧑‍💻 For the Tinkerers

If you’re the type who likes to break/fix things:

```sh
cd src
npm install
node index.js
```

Go nuts. Add logging, throw in delays, juggle tokens, handle rate limits—whatever. Just keep it legal.

---

## 📦 Changelog

* 1.0.0
  * First open source drop
  * Multi-token DM spamming
  * One-click install/start with `.bat` scripts

## 🤝 Wanna Contribute?

1. Fork it ([https://github.com/yourname/NeuroDM/fork](https://github.com/yourname/NeuroDM/fork))
2. Make a feature branch (`git checkout -b feature/cool-stuff`)
3. Do your thing (`git commit -am 'Made it better'`)
4. Push it up (`git push origin feature/cool-stuff`)
5. Open a Pull Request and flex your skills

---
[npm-image]: https://img.shields.io/node/v/discord.js.svg?style=flat-square
[npm-url]: https://nodejs.org/
[npm-downloads]: https://img.shields.io/npm/dm/discord.js.svg?style=flat-square
