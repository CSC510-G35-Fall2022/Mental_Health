const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("journal")
    .setDescription("Gives a journal prompt that can benefit mental health"),

  async execute(interaction, options) {
    num = Math.floor(Math.random() * options.length)
  console.log('interaction\n', interaction)
    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(options[num][0])
      .setThumbnail("https://cdn-icons-png.flaticon.com/512/3352/3352475.png")
      .setDescription("answer this journal prompt")

    const messageId = interaction.reply({ embeds: [embed] })
  },
};
