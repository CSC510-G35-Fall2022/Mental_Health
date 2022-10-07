const animal = require("../commands/support_animal.js");
const {
  Discord,
  ChatInputCommandInteraction,
  Interaction,
} = require("discord.js");

it("test support_animal command", async () => {
  console.log(animal);
  expect(animal).toBeTruthy();

  // expect(journal.execute()).toHaveBeenCalledTimes(0);
  // const stringCommand = "/help";
  // const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  // await journal.execute(Interaction, ["list"]);
})

it("test animal command name", async () => {
  expect(animal.data.name).toEqual("support_animal");
  // expect(journal.execute()).toHaveBeenCalledTimes(0);
})

it("test animal command description", async () => {
  expect(animal.data.description).toEqual("See an image of an adorable support animal");
  // expect(journal.execute()).toHaveBeenCalledTimes(0);
})
