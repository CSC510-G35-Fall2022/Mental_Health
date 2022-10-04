//do not delete needed for env
require("dotenv").config();

const {
  Client,
  Collection,
  Intents,
  GatewayIntentBits,
} = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { EmbedBuilder } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { REST, Routes } = require("discord.js");
const clientId = process.env.CLIENT_ID;
const fs = require("fs");
const { parse } = require("csv-parse");
const Discord = require("discord.js");
const guilds = ["1011989055736660061"];
journalPrompts = [];
supportAnimals = [];

//do not edit until you see an edit from here message again
//register slash commands
const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

// Creating a collection for commands in client
client.commands = new Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

const eventFiles = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"));

//referenced https://dev.to/kunal/how-to-make-a-slash-commands-bot-with-discord-js-v13-3l6k
for (const file of eventFiles) {
  const eventName = file.split(".")[0];
  const event = require(`./events/${file}`);
  client.on(eventName, (...args) => event.execute(...args, null));
}

client.commands = new Collection();
const commands = [];

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
  client.commands.set(command.data.name, command);
}

// do not remove this
guilds.forEach(async (guildID) => {
  try {
    console.log("Started refreshing application (/) commands.");
    console.log(guildID);
    console.log(clientId);
    await rest.put(Routes.applicationCommands(clientId, guildID), {
      body: commands,
    });
    console.log(commands);
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error("from this");
    console.error(error);
  }
});

//edit from here
// run bot
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  parseCSV("./data/journalPrompts.csv", journalPrompts);
  parseCSV("./data/supportanimals.csv", supportAnimals);
});

client.on("message", (msg) => {
  if (msg.author.bot) return;
  if (msg.content === "/journal") {
    msg.reply;
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  console.log((interaction.commandName))

  const command = client.commands.get(interaction.commandName);

  if ((interaction.commandName === "support_animal")) {
    try {
      await command.execute(interaction, supportAnimals);
    } catch (error) {
      if (error) console.error(error);
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }

  if ((interaction.commandName === "journal")) {
    try {
      await command.execute(interaction, journalPrompts);
    } catch (error) {
      if (error) console.error(error);
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }

  if ((interaction.commandName === "ping")) {
    try {
      await command.execute(interaction);
    } catch (error) {
      if (error) console.error(error);
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }
  if ((interaction.commandName === "help")) {
    try {
      await command.execute(interaction);
    } catch (error) {
      if (error) console.error(error);
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }
});

// referenced: https://sebhastian.com/read-csv-javascript/
//parses the CSV file of journal prompts
function parseCSV(csvfile, list) {
  fs.createReadStream(csvfile)
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", function (row) {
      prompt = row.toString();
      list.push(row[0]);
    })
    .on("error", function (error) {
      console.log(error.message);
    })
    .on("end", function () {});
}

client.login(process.env.TOKEN);
