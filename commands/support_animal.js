const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("support_animal")
    .setDescription("see an image of an adorable support animal"),
  async execute(interaction, options) {
    num = Math.floor(Math.random() * options.length);

    const embed = new EmbedBuilder()
      .setColor("#FFFFFF")
      .setTitle("You got this!")
      .setImage(options[num][0])
    const messageId = interaction.reply({ embeds: [embed] });
  },
};
