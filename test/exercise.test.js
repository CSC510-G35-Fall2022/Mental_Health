const exercise = require("../commands/exercise.js");
const {
  Discord,
  ChatInputCommandInteraction,
  Interaction,
} = require("discord.js");

it("test exercise command", async () => {
  expect(exercise).toBeTruthy();

  // expect(journal.execute()).toHaveBeenCalledTimes(0);
  // const stringCommand = "/help";
  // const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  // await journal.execute(Interaction, ["list"]);
});

it("test exercise command name", async () => {
  expect(exercise.data.name).toEqual("exercise");
  // expect(journal.execute()).toHaveBeenCalledTimes(0);
});

it("test exericse command description", async () => {
  expect(exercise.data.description).toEqual(
    "Gets one ergonomic exercise to relax"
  );
  // expect(journal.execute()).toHaveBeenCalledTimes(0);
});
