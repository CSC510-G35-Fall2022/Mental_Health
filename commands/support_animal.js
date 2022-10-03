const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");
const fs = require("fs");
const { parse } = require("csv-parse");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("support_animal")
    .setDescription("see an image of an adorable support animal"),
  async execute(interaction, options) {
    num = Math.floor(Math.random() * options.length);

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("test")
      .setDescription("you got this!")
      .setImage(options[num])
    const messageId = interaction.reply({ embeds: [embed] });
  },
};
