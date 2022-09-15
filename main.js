//do not delete needed for env
require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { EmbedBuilder } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { REST, Routes } = require("discord.js");
const clientId = process.env.CLIENT_ID;
const guildId = "1011989055736660061";
const fs = require("fs");
const { parse } = require("csv-parse");
const Discord = require("discord.js");
journalPrompts = [];

// slash commands
const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "help",
    description: "help function for bot, lists commands",
  },
  {
    name: "date",
    description: "returns the date",
  },
  {
    name: "journal",
    description: "get a journal prompt",
  },
];

//register slash commands
const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(clientId), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
};

// run bot
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  parseJournal();
});

client.on("message", (msg) => {
  if (msg.author.bot) return;

  if (msg.content === "/journal") {
    msg.reply;
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
  interaction.reply("Pong!");
   
  }

  if (interaction.commandName === "help") {
    interaction.reply("not yet");
    console.log(new Date().getTime());
  }
  if (interaction.commandName === "date") {
    interaction.reply(new Date().getDate().toString());
  }
  if (interaction.commandName === "journal") {
    prompt = "prompt";
    num = Math.floor(Math.random() * journalPrompts.length);
    console.log(journalPrompts);
    console.log(journalPrompts[num]);

    const embed = new EmbedBuilder().setColor(0x0099FF).setTimestamp().setTitle(journalPrompts[num]).setDescription("answer this journal prompt");

    
    const messageId = interaction.reply({ embeds: [embed] });
   // interaction.reply(journalPrompts[num]);
  }
});

function parseJournal() {
  console.log("parsing journal");
  fs.createReadStream("./journalPrompts.csv")
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", function (row) {
      prompt = row.toString();
      journalPrompts.push(row[0]);
    })
    .on("error", function (error) {
      console.log(error.message);
    })
    .on("end", function () {
      console.log("finished");
    });
}

client.login(process.env.TOKEN);
