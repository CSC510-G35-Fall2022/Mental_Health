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
    .setName("resources")
    .setDescription("Provides Mental Health resources and contacts"),
  /**
   * Executes the resources command
   *
   * @async
   * @function execute
   * @param {object} interaction - Current discord interaction
   */
  async execute(interaction) {
    let str;
    str = ``;
    var fields = [];
    str =
      "National Suicide Prevention Hotline: Call 1-800-273-8255. \n\nCrisis Text Line: Text HOME to 741741 \n\nThe Substance Abuse and Mental Health Services Administration(SAMHSA) National Helpline: Call 1-800-662-HELP (4357).\n\n Get involved with Mental Health America: https://mhanational.org/about \n\n";
    /**
     * Embedded object
     *
     * @member {object} embed
     * @property {object} embed - Embed object
     * @property {object} embed.color - Color of the embed
     * @property {string} embed.title - Title of the embed
     * @property {color} embed.description - Description to be displayed in embed
     */
    const embed = new EmbedBuilder()
      .setColor(0x746abd)
      .setTitle("Resources that provide emotional, mental support")
      .setDescription(str);
    return interaction.reply({
      embeds: [embed],
    });
  },
};
