const ping = require("../commands/ping.js");
const {
  Discord,
  ChatInputCommandInteraction,
  Interaction,
} = require("discord.js");

it("test ping command", async () => {
  console.log(ping);
  expect(ping).toBeTruthy();

  // expect(ping.execute()).toHaveBeenCalledTimes(0);
  const stringCommand = "/ping";
  // const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  // await ping.execute(Interaction, ["list"]);
});

it("test ping command name", async () => {
  expect(ping.data.name).toEqual("ping");
  // expect(ping.execute()).toHaveBeenCalledTimes(0);
});

it("test ping command description", async () => {
  expect(ping.data.description).toEqual("Replies with pong");
  // expect(ping.execute()).toHaveBeenCalledTimes(0);
});
