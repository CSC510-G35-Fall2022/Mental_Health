const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");
const fs = require("fs");
const { parse } = require("csv-parse");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("diet_recommendation")
    .setDescription("gives a diet tip"),
  async execute(interaction, options) {
    num = Math.floor(Math.random() * options.length);
    console.log(options);
    const embed = new EmbedBuilder()
      .setColor(0x2596be)
      // .setTitle(options[num])
      .setDescription("test");

    const messageId = interaction.reply({ embeds: [embed] });
  },
};
