/**
 * NeuroDM - Bot Version
 * @author Neo
 */

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { Client, GatewayIntentBits, Partials } from "discord.js";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawConfig = await fs.readFile(path.join(__dirname, "config.json"), "utf-8");
const config = JSON.parse(rawConfig);
const { tokens, prefix, message } = config;

const { cyan, red, greenBright, yellow } = chalk;



console.clear();
console.log(yellow(`

 ███▄    █ ▓█████  █    ██  ██▀███   ▒█████  ▓█████▄  ███▄ ▄███▓
 ██ ▀█   █ ▓█   ▀  ██  ▓██▒▓██ ▒ ██▒▒██▒  ██▒▒██▀ ██▌▓██▒▀█▀ ██▒
▓██  ▀█ ██▒▒███   ▓██  ▒██░▓██ ░▄█ ▒▒██░  ██▒░██   █▌▓██    ▓██░
▓██▒  ▐▌██▒▒▓█  ▄ ▓▓█  ░██░▒██▀▀█▄  ▒██   ██░░▓█▄   ▌▒██    ▒██ 
▒██░   ▓██░░▒████▒▒▒█████▓ ░██▓ ▒██▒░ ████▓▒░░▒████▓ ▒██▒   ░██▒
░ ▒░   ▒ ▒ ░░ ▒░ ░░▒▓▒ ▒ ▒ ░ ▒▓ ░▒▓░░ ▒░▒░▒░  ▒▒▓  ▒ ░ ▒░   ░  ░
░ ░░   ░ ▒░ ░ ░  ░░░▒░ ░ ░   ░▒ ░ ▒░  ░ ▒ ▒░  ░ ▒  ▒ ░  ░      ░
   ░   ░ ░    ░    ░░░ ░ ░   ░░   ░ ░ ░ ░ ▒   ░ ░  ░ ░      ░   
         ░    ░  ░   ░        ░         ░ ░     ░           ░   
                                              ░                 

                      NeuroDM - Neo Edition
          Use command: ${prefix}dm <userID> to spam DMs

`));

tokens.forEach((token, index) => {
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.DirectMessages,
    ],
    partials: [Partials.Channel], // needed to receive DMs
  });

  client.on("ready", () => {
    console.log(greenBright(`--> Token ${index + 1} logged in as ${client.user.tag}`));
  });

  client.on("messageCreate", async (msg) => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift()?.toLowerCase();

    if (cmd === "dm") {
    const userID = args[0];
    if (!userID) return msg.reply("--> you need to provide a user ID.");

    try {
    const user = await client.users.fetch(userID);
    await msg.reply(`--> starting mass DM spam on **${user.tag}**`);

    while (true) {
      user.send(message)
        .then(() => {
          console.log(cyan(`[${client.user.tag}] sent DM to ${user.tag}`));
        })
        .catch((err) => {
          console.log(red(`[${client.user.tag}] failed to DM ${userID}: ${err.message}`));
        });
      await new Promise((res) => setTimeout(res, 500)); // 500 milisecond so ur acc wont get banned
    }
  } catch (err) {
    await msg.reply("--> could not fetch the user. Make sure the ID is valid.");
    console.log(red(`--> error fetching user ${userID}: ${err.message}`));
  }
}

  });

  client.login(token).catch(() => {
    console.log(red(`--> token ${index + 1} failed to login.`));
  });
});
