//do not delete needed for env
require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const { REST, Routes } = require("discord.js");
const clientId = "1017062749538361474";
const guildId = "1011989055736660061";

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
];

//register slash commands
const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(clientId), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

// run bot
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }

  if (interaction.commandName === "help") {
    await interaction.reply("not yet");
  }
});

client.login(process.env.TOKEN);
