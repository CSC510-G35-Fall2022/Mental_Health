const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("exercise")
    .setDescription("Gets one ergonomic exercise to relax"),
  async execute(interaction, options) {
    console.log(options)
    //num = Math.floor(Math.random() * options.length);

    const embed = new EmbedBuilder()
      .setColor("#FFFFFF")
      .setTitle(options[0][0])
      .setDescription(options[0][1])
      .setImage(options[0][2])
    const messageId = interaction.reply({ embeds: [embed] });
  },
};