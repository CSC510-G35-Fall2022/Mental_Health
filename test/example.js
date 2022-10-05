// const { SnowflakeUtil } = require("discord.js");

// // import {Snowflake} from 'discord.js'



// const {
//   Client,
//   Collection,
//   Intents,
//   Guild,
//   Role,
//   TextChannel,
//   GuildMember,
//   User,
//   Valid,
//   Discord, 
//   DiscordMessage, 
//   GatewayIntentBits,
// } = require("discord.js");
// describe("Bot", () => {
//   it("executes the help command", async () => {
//     const discordClient = new Client({ intents: [GatewayIntentBits.Guilds] });
//     // console.log(SnowflakeUtil);
//     //   let discordClient = new Discord.Client({ intents: [GatewayIntentBits.Guilds]});
//     let guild = new Guild(discordClient, {
//       id: SnowflakeUtil.generate(),
//     });
//     let user = new User(discordClient, {
//       id: SnowflakeUtil.generate(),
//     });
//     let member = new GuildMember(
//       discordClient,
//       { id: SnowflakeUtil.generate(), user: { id: user.id } },
//       guild
//     );
//     // let guildTest = new Guild();
//     // console.log(guildTest);
//     // console.log(new Guild(discordClient));
//     let role = new Role(discordClient, { id: SnowflakeUtil.generate() }, guild);
//     let message = new DiscordMessage(
//       discordClient,
//       {
//         content: "ab help",
//         author: { username: "BiggestBulb", discriminator: 1234 },
//         id: SnowflakeUtil.generate(),
//         // id: "test",
//       },
//       new TextChannel(new Guild(discordClient, {id: SnowflakeUtil.generate(),}), {
//         client: discordClient,
//         guild: new Guild(discordClient, {     id: SnowflakeUtil.generate(),}),
//         id: SnowflakeUtil.generate(),
//         //   id: "channel-id",
//       })
//     );

//     // Your testing code goes here, with your functions using the message passed in as if passed on-ready
//     const valid = Valid(message);

//     expect(valid).toBe(true);
//   });
// });
