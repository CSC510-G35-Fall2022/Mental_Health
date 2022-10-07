const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("exercise")
    .setDescription("Gets one ergonomic exercise to relax"),
  async execute(interaction, options) {
    console.log(options)
    num = Math.floor(Math.random() * options.length);

    const embed = new EmbedBuilder()
      .setColor("#FFFFFF")
      .setTitle(options[num][0])
      .setDescription(options[num][1])
      .setImage(options[num][2])
    const messageId = interaction.reply({ embeds: [embed] });
  },
};