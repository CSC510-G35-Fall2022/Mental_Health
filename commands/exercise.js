const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

/**
 * Slash command for exercise recommendations
 *
 * @exports exercise
 */
module.exports = {
  /**
   * Slash command for exercise recommendations
   *
   * @type {object}
   * @property {object} data - A slash command object
   * @property {string} data.name - Name of the slash command
   * @property {string} data.description - Description of the slash command
   */
  data: new SlashCommandBuilder()
    .setName("exercise")
    .setDescription("Gets one ergonomic exercise to relax"),
  /**
   * Executes the exercise command
   *
   * @async
   * @function execute
   * @param {object} interaction - Current discord interaction
   * @param {Array<string>} options - List of exercise tips
   */
  async execute(interaction, options) {
    console.log(options);
    num = Math.floor(Math.random() * options.length);

    /**
     * Embedded object
     *
     * @member {object} embed
     * @property {object} embed - Embed object
     * @property {color} embed.color - Color of the embed
     * @property {string} embed.title - Title of the embed
     * @property {string} embed.description - Description of the embed
     * @property {string} embed.images - Description of the image
     */
    const embed = new EmbedBuilder()
      .setColor("#FFFFFF")
      .setTitle(options[num][0])
      .setDescription(options[num][1])
      .setImage(options[num][2]);
    interaction.reply({ embeds: [embed] });
  },
};
