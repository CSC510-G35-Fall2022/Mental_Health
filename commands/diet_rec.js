const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

/**
 * Slash command for diet recommendations
 *
 * @exports diet_recommendation
 */
module.exports = {
  /**
   * Slash command for diet recommendations
   *
   * @type {object}
   * @property {object} data - A slash command object
   * @property {string} data.name - Name of the slash command
   * @property {string} data.description - Description of the slash command
   */
  data: new SlashCommandBuilder()
    .setName("diet_recommendation")
    .setDescription("Gives a diet tip"),

  /**
   * Executes the diet slash command
   *
   * @async
   * @function execute
   * @param {object} interaction - Current discord interaction
   * @param {Array<string>} options - List of diet recommendation tips
   */
  async execute(interaction, options) {
    num = Math.floor(Math.random() * options.length);
    /**
     * Embedded object
     *
     * @member {object} embed
     * @property {object} embed - Embed object
     * @property {color} embed.color - Color of the embed
     * @property {string} embed.title - Title of the embed
     * @property {string} embed.description - Description of the embed
     */
    const embed = new EmbedBuilder()
      .setColor(0x2596be)
      .setTitle(options[num][0])
      .setDescription(options[num][1] + "\nRead more at: " + options[num][2]);
    const messageId = interaction.reply({ embeds: [embed] });
  },
};
