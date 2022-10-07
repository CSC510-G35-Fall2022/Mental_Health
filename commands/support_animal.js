const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

/**
 * Slash command for support animal pictures
 *
 * @exports support_animal
 */
module.exports = {
  /**
   * Slash command for support animal command
   *
   * @property {object} data - A slash command object
   * @property {string} data.name - Name of the slash command
   * @property {string} data.description - Description of the slash command
   */
  data: new SlashCommandBuilder()
    .setName("support_animal")
    .setDescription("See an image of an adorable support animal"),
  /**
   * Executes the support_animal command
   * 
   * @async
   * @function execute
   * @param {object} interaction - Current discord interaction
   * @param {Array<string>} options - List of animal picture links
   */
  async execute(interaction, options) {
    num = Math.floor(Math.random() * options.length);

    /**
     * Embedded object
     *
     * @member {object} embed
     * @property {object} embed - Embed object
     * @property {object} embed.color - Color of the embed
     * @property {string} embed.title - Title of the embed
     * @property {color} embed.image - Image to display in the embed
     */
    const embed = new EmbedBuilder()
      .setColor("#FFFFFF")
      .setTitle("You got this!")
      .setImage(options[num][0])
    const messageId = interaction.reply({ embeds: [embed] });
  },
};
