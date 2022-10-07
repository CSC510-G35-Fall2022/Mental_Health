const puzzle = require("../commands/puzzle.js");
const {
  Discord,
  ChatInputCommandInteraction,
  Interaction,
} = require("discord.js");

it("test puzzle command", async () => {
  console.log(puzzle);
  expect(puzzle).toBeTruthy();

  // expect(journal.execute()).toHaveBeenCalledTimes(0);
  const stringCommand = "/puzzle";
  // const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  // await journal.execute(Interaction, ["list"]);
});

it("test puzzle command name", async () => {
  expect(puzzle.data.name).toEqual("puzzle");
  // expect(journal.execute()).toHaveBeenCalledTimes(0);
});

it("test puzzle command description", async () => {
  expect(puzzle.data.description).toEqual("Play a 3x3 Lights out game");
  // expect(journal.execute()).toHaveBeenCalledTimes(0);
});
