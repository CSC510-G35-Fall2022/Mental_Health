const help = require("../commands/help.js");
const {
  Discord,
  ChatInputCommandInteraction,
  Interaction,
} = require("discord.js");

it("test journal command", async () => {
  console.log(help);
  expect(help).toBeTruthy();

  // expect(journal.execute()).toHaveBeenCalledTimes(0);
  const stringCommand = "/help";
  // const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  // await journal.execute(Interaction, ["list"]);
});

it("test help command name", async () => {
  expect(help.data.name).toEqual("help");
  // expect(journal.execute()).toHaveBeenCalledTimes(0);
});

it("test help command description", async () => {
  expect(help.data.description).toEqual(
    "Provides Names and Description of commands"
  );
  // expect(journal.execute()).toHaveBeenCalledTimes(0);
});
