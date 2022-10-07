const resources = require("../commands/resources.js");
const {
  Discord,
  ChatInputCommandInteraction,
  Interaction,
} = require("discord.js");

it("test resources command", async () => {
  expect(resources).toBeTruthy();

  // expect(journal.execute()).toHaveBeenCalledTimes(0);
  // const stringCommand = "/help";
  // const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  // await journal.execute(Interaction, ["list"]);
})

it("test resources command name", async () => {
  expect(resources.data.name).toEqual("resources");
  // expect(journal.execute()).toHaveBeenCalledTimes(0);
})

it("test exericse command description", async () => {
  expect(resources.data.description).toEqual("Provides Mental Health resources and contacts");
  // expect(journal.execute()).toHaveBeenCalledTimes(0);
})
