const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");
const fs = require("fs");
const { parse } = require("csv-parse");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("journal")
    .setDescription("Replies with a journal prompt"),
  async execute(interaction, options) {
    num = Math.floor(Math.random() * options.length);

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(options[num])
      .setThumbnail("https://cdn-icons-png.flaticon.com/512/3352/3352475.png")
      .setDescription("answer this journal prompt");

    const messageId = interaction.reply({ embeds: [embed] });
  },
};
