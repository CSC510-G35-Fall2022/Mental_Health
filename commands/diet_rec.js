const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("diet_recommendation")
    .setDescription("gives a diet tip"),
  async execute(interaction, options) {
    num = Math.floor(Math.random() * options.length);
    console.log(options);
    const embed = new EmbedBuilder()
      .setColor(0x2596be)
      .setTitle(options[num][0])
      .setDescription(options[num][1] + "\nRead more at: " + options[num][2]);
    const messageId = interaction.reply({ embeds: [embed] });
  },
};
