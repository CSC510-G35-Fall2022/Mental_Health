//do not delete needed for env
require("dotenv").config();

const {
  Client,
  Collection,
  GatewayIntentBits,
  REST,
  Routes,
} = require("discord.js");
/**
 * Current client
 * @type {Client}
 */
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const clientId = process.env.CLIENT_ID;
const fs = require("fs");
const { parse } = require("csv-parse");
const guilds = ["1011989055736660061"];

/**
 * List of Journal Prompts
 * @type {Array<string>}
 */
journalPrompts = [];
/**
 * List of Support Animal links
 * @type {Array<string>}
 */
supportAnimals = [];
/**
 * List of Diet Recommendations
 * @type {Array<string>}
 */
dietRecs = [];
exercise = [];

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
  const event = require(`../events/${file}`);
  client.on(eventName, (...args) => event.execute(...args, null));
}

client.commands = new Collection();
/**
 * List of commands
 * @type {Array}
 */
const commands = [];

for (const file of commandFiles) {
  const command = require(`../commands/${file}`);
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
    // console.log(commands);
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error("from this");
    console.error("error", error);
  }
});

//edit from here
// run bot
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  parseCSV("./data/journalPrompts.csv", journalPrompts, "|||");
  parseCSV("./data/supportanimals.csv", supportAnimals, ",");
  parseCSV("./data/diet_recs.csv", dietRecs, "|");
  parseCSV("./data/exercise.csv", exercise, "|");
});

client.on("message", (msg) => {
  if (msg.author.bot) return;
  if (msg.content === "/journal") {
    msg.reply;
  }
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) {
    const command = client.commands.get(interaction.commandName);
    //console.log(command);
    if (interaction.commandName === "support_animal") {
      try {
        await command.execute(interaction, supportAnimals);
      } catch (error) {
        if (error) console.error(error);
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      }
    } else if (interaction.commandName === "diet_recommendation") {
      try {
        await command.execute(interaction, dietRecs);
      } catch (error) {
        if (error) console.error(error);
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      }
    } else if (interaction.commandName === "journal") {
      try {
        await command.execute(interaction, journalPrompts);
      } catch (error) {
        if (error) console.error(error);
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      }
    } else if (interaction.commandName === "ping") {
      try {
        await command.execute(interaction);
      } catch (error) {
        if (error) console.error(error);
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      }
    } else if (interaction.commandName === "music") {
      try {
        await command.execute(interaction);
      } catch (error) {
        if (error) console.error(error);
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      }
    } else if (interaction.commandName === "help") {
      try {
        await command.execute(interaction);
      } catch (error) {
        if (error) console.error(error);
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      }
    } else if (interaction.commandName == "puzzle") {
      try {
        await command.execute(interaction);
      } catch (error) {
        if (error) console.error(error);
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      }
    } else if (interaction.commandName === "exercise") {
      try {
        await command.execute(interaction, exercise);
      } catch (error) {
        if (error) console.error(error);
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      }
    } else if (interaction.commandName === "resources") {
      try {
        await command.execute(interaction);
      } catch (error) {
        if (error) console.error(error);
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      }
    } else return;
  } else if (interaction.isMessageComponent()) {
    const command = client.commands.get(
      interaction.message.interaction.commandName
    );
    //console.log(command);
    //console.log(interaction);
    if (interaction.message.interaction.commandName == "puzzle") {
      try {
        await command.updateBoard(interaction);
      } catch (error) {
        if (error) console.error(error);
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      }
    }
  } else return;
});

// referenced: https://sebhastian.com/read-csv-javascript/
//parses the CSV file of journal prompts
function parseCSV(csvfile, list, delim) {
  fs.createReadStream(csvfile)
    .pipe(parse({ delimiter: delim, from_line: 1 }))
    .on("data", function (row) {
      prompt = row.toString();
      list.push(row);
    })
    .on("error", function (error) {
      console.log("error", error.message);
    })
    .on("end", function () {});
}

client.login(process.env.TOKEN);
