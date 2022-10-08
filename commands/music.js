const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

/**
 * Slash command for resources command
 *
 * @exports resources
 */
module.exports = {
  /**
   * Slash command for help command
   *
   * @property {object} data - A slash command object
   * @property {string} data.name - Name of the slash command
   * @property {string} data.description - Description of the slash command
   */
  data: new SlashCommandBuilder()
    .setName("music")
    .setDescription("Provides soothing music and calmimg meditation"),
  /**
   * Executes the resources command
   *
   * @async
   * @function execute
   * @param {object} interaction - Current discord interaction
   */
  async execute(interaction) {
     /**
     * Embedded object
     *
     * @member {object} embed
     * @property {object} embed - Embed object
     * @property {object} embed.color - Color of the embed
     * @property {string} embed.title - Title of the embed
     * @property {color} embed.description - Description to be displayed in embed
     */
    var fields=[];
      fields.push({
        name: 'Soothing music \n',
        value: 'https://www.youtube.com/watch?v=McA5ZevQ8q4',
      });
      fields.push({
        name: 'Calming Medidation \n',
        value: 'https://www.youtube.com/watch?v=Xl_B45DpMLU',
      });

    const embed = new EmbedBuilder()
      .setColor(0x746abd)
      .setTitle("Music and Meditation links")
      .addFields(fields);
    return interaction.reply({
      embeds: [embed],
    });
  },
};