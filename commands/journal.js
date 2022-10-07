const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

/**
 * Slash command for journal
 *
 * @exports journal
 */
module.exports = {
  /**
   * Slash command for journal command
   *
   * @property {object} data - A slash command object
   * @property {string} data.name - Name of the slash command
   * @property {string} data.description - Description of the slash command
   */
  data: new SlashCommandBuilder()
    .setName("journal")
    .setDescription("Gives a journal prompt that can benefit mental health"),
  /**
   * Executes the journal command
   * 
   * @async
   * @function execute
   * @param {object} interaction - Current discord interaction
   * @param {Array<string>} options - List of journal entires
   */
  async execute(interaction, options) {
    num = Math.floor(Math.random() * options.length);
    console.log('interaction\n', interaction);
    /**
     * Embedded object
     *
     * @member {object} embed
     * @property {object} embed - Embed object
     * @property {object} embed.color - Color of the embed
     * @property {string} embed.title - Title of the embed
     * @property {color} embed.thumbnail - Thumbnail of the embed
     * @property {string} embed.description - Description of the embed
     */
    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(options[num][0])
      .setThumbnail("https://cdn-icons-png.flaticon.com/512/3352/3352475.png")
      .setDescription("answer this journal prompt");
    const messageId = interaction.reply({ embeds: [embed] });
  },
};
