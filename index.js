require("dotenv").config();
const { GatewayIntentBits } = require("discord.js");

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

const BOT_PREFIX = "!";
const MOD_ME_COMMAND = "mod-me";

const forbiddenMessages = ["gay", "corno", "bixa", "boiola", "puto", "viado"];

client.on("ready", () => {
  console.log("BOT PIXY MODDER ESTÁ ONLINE !!!");
});

client.on("messageDelete", (msg) => {
  msg.channel.send("Stop deleting messages");
});

client.on("message", (msg) => {
  if (msg.content == "I love Pixy") {
    msg.react("❤️");
    msg.reply("Também te amo, meu marreko !");
  }
  if (msg.content == "love") {
    msg.react("❤️");
    msg.reply("Também te amo, meu marreko !");
  }

  if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    modUser(msg.member);
  }
});

function modUser(member) {
  member.roles.add("969808582457569391");
  msg.reply("Você alterou seu cargo, não faça nenhuma besteira !");
}

client.login(process.env.BOT_TOKEN);
