const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");
const fs = require("fs");
const { parse } = require("csv-parse");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("journal")
    .setDescription("Replies with pong"),

  async execute(interaction, embed) {
    // let num = Math.floor(Math.random() * options.length);
  console.log('interaction\n', interaction);
    // const embed = new EmbedBuilder()
    //   .setColor(0x0099ff)
    //   .setTitle(options[num])
    //   .setThumbnail("https://cdn-icons-png.flaticon.com/512/3352/3352475.png")
    //   .setDescription("answer this journal prompt");

    const messageId = interaction.reply({ embeds: [embed] });
  },
};
