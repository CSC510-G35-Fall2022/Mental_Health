const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

  /**
   * Slash command for diet recommendations
   *
   * @module diet_recommendation
   */

module.exports = {

  /**
   * Slash command for diet recommendations
   *
   * @property {object} data - A slash command object
   * @property {string} data.diet_recommendation - Name of the slash command
   * @property {string} data.description - Description of the slash command
   */
  data: new SlashCommandBuilder()
    .setName("diet_recommendation")
    .setDescription("gives a diet tip"),

  /**
   * Executes the diet slash command
   * 
   * @param {object} interaction - Current discord interaction
   * @param {Array<string>} options - List of diet recommendation tips
   */
  async execute(interaction, options) {
    num = Math.floor(Math.random() * options.length);
    const embed = new EmbedBuilder()
      .setColor(0x2596be)
      .setTitle(options[num][0])
      .setDescription(options[num][1] + "\nRead more at: " + options[num][2]);
    const messageId = interaction.reply({ embeds: [embed] });
  },
};
