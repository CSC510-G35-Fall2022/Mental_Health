const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");
const fs = require("fs");
const { parse } = require("csv-parse");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("exercise")
    .setDescription("Gets one ergonomic exercise to relax"),
  async execute(interaction, options) {
    //num = Math.floor(Math.random() * options.length);

    const embed = new EmbedBuilder()
      .setColor("#FFFFFF")
      .setTitle(options[0][0])
      .setImage(options[0][1]);
    const messageId = interaction.reply({ embeds: [embed] });
  },
};