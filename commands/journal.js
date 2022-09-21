const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");
const fs = require("fs");
const { parse } = require("csv-parse");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("journal")
    .setDescription("Replies with pong"),
  async execute(interaction, options) {
    num = Math.floor(Math.random() * options.length);

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(options[num])
      .setDescription("answer this journal prompt");

    const messageId = interaction.reply({ embeds: [embed] });
  },
};
