// const { Discord, Guild, GatewayIntentBits, Client,TextChannel, Message} = require("discord.js");

// // replace this with whatever the execute command is
// // e.g. const ping = require('./commands/ping').execute
// const ping = async (message, channel, args) => {
//     console.log("message", message)
//     console.log("message channel", message.channel)
//     console.log("channel", channel)
//     // console.log("9", channel.send("Pong"));
//     channel.lastMessage = channel.send('Pong');
  
// };

// // a counter so that all the ids are unique
// let count = 0;

// class Guild2 extends Guild {
//   constructor(client) {
//     super(client, {
//       // you don't need all of these but I just put them in to show you all the properties that Discord.js uses
//       id: count++,
//       name: "",
//       icon: null,
//       splash: null,
//       owner_id: "",
//       region: "",
//       afk_channel_id: null,
//       afk_timeout: 0,
//       verification_level: 0,
//       default_message_notifications: 0,
//       explicit_content_filter: 0,
//       roles: [],
//       emojis: [],
//       features: [],
//       mfa_level: 0,
//       application_id: null,
//       system_channel_flags: 0,
//       system_channel_id: null,
//       widget_enabled: false,
//       widget_channel_id: null,
//     });
//     this.client.guilds.cache.set(this.id, this);
//   }
// }

// class TextChannel2 extends TextChannel {
//   constructor(guild) {
//     super(guild, {
//       id: count++,
//       type: 0,
//     });
//     this.client.channels.cache.set(this.id, this);
//   }

//   // you can modify this for other things like attachments and embeds if you need
//   send(content) {
//     return this.client.actions.MessageCreate.handle({
//       id: count++,
//       type: 0,
//       channel_id: this.id,
//       content,
//       author: {
//         id: "bot id",
//         username: "bot username",
//         discriminator: "1234",
//         bot: true,
//       },
//       pinned: false,
//       tts: false,
//       nonce: "",
//       embeds: [],
//       attachments: [],
//       timestamp: Date.now(),
//       edited_timestamp: null,
//       mentions: [],
//       mention_roles: [],
//       mention_everyone: false,
//     });
//   }
// }

// // class Message2 extends Message {
// //   constructor(content, channel, author) {
// //     super(
// //       {
// //         client: channel.client,
// //         id: count++,
// //         type: 0,
// //         content,
// //         channel_id: 4,
// //         author,
// //         pinned: false,
// //         tts: false,
// //         nonce: "",
// //         embeds: [],
// //         attachments: [],
// //         timestamp: Date.now(),
// //         edited_timestamp: null,
// //         mentions: [],
// //         mention_roles: [],
// //         mention_everyone: false,
// //         channel: channel
// //       }
// //     );
    

// //   }
// // }


// class Message2 extends Message {
//     constructor(content, channel, author) {
//       super(channel.client, {
//         id: count++,
        
//         channel_id: channel.id,
//         author: author, 
//         content: content,
//         timestamp: Date.now(),
//         edited_timestamp: null,
//         mention_everyone: false,
//         mentions: [],
//         mention_roles: [],
//         tts: false,
//         attachments: [],
//         embeds: [],
//         nonce: '',
//         pinned: false,
//         type: 0,
     
//       })
//     }
//   }
  



// // the user that executes the commands
// const user = { id: count++, username: "username", discriminator: "1234" };

// describe("ping", () => {
//     const client = new Client({ intents: [GatewayIntentBits.Guilds] });
// const guild = new Guild2(client);
// const channel = new TextChannel2(guild);
// console.log("channel", channel);
// console.log('channel id', channel.id);
//   it("sends Pong", async () => {
//     console.log(new Message2("ping", channel, user));
//     await ping(new Message2("ping", channel, user), channel);
//     expect(channel.lastMessage.content).toBe("Pong");
//   });
// });
