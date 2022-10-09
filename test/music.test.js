const music = require("../commands/music.js");
const {
  Discord,
  ChatInputCommandInteraction,
  Interaction,
} = require("discord.js");

it("test music command", async () => {
  expect(music).toBeTruthy();

  // expect(music.execute()).toHaveBeenCalledTimes(0);

  // const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  // await music.execute(Interaction, ["list"]);
});

it("test music command name", async () => {
  expect(music.data.name).toEqual("music");
  // expect(music.execute()).toHaveBeenCalledTimes(0);
});

it("test exericse command description", async () => {
  expect(music.data.description).toEqual(
    "Provides soothing music and calmimg meditation"
  );
  // expect(music.execute()).toHaveBeenCalledTimes(0);
});
