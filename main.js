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
const guildId = "1011989055736660061";
const fs = require("fs");
const { parse } = require("csv-parse");
const Discord = require("discord.js");
journalPrompts = [];

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

// Creating a collection for commands in client
client.commands = new Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
  client.commands.set(command.data.name, command);
}

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  if (interaction.commandName === "journal") {
    console.log("journal");
  }
  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  try {
    await command.execute(interaction, journalPrompts);
  } catch (error) {
    if (error) console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});

// referenced: https://sebhastian.com/read-csv-javascript/
//parses the CSV file of journal prompts
function parseJournal() {
  fs.createReadStream("./journalPrompts.csv")
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", function (row) {
      prompt = row.toString();
      journalPrompts.push(row[0]);
    })
    .on("error", function (error) {
      console.log(error.message);
    })
    .on("end", function () {});
}
client.login(process.env.TOKEN);
