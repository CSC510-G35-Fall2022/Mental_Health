const fs = require("fs");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

/**
 * Slash command for help command
 *
 * @exports help
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
    .setName("help")
    .setDescription("Provides Names and Description of commands"),
  /**
   * Executes the help command
   *
   * @async
   * @function execute
   * @param {object} interaction - Current discord interaction
   */
  async execute(interaction) {
    let str;
    str = ``;
    const commandFiles = fs
      .readdirSync("./commands")
      .filter((file) => file.endsWith(".js"));
    var fields = [];

    for (const file of commandFiles) {
      const command = require(`./${file}`);
      fields.push({
        name: `/${command.data.name}\n`,
        value: `${command.data.description}`,
      });
    }
    /**
     * Embedded object
     *
     * @member {object} embed
     * @property {object} embed - Embed object
     * @property {object} embed.color - Color of the embed
     * @property {string} embed.title - Title of the embed
     * @property {color} embed.fields - Image to display in the embed
     */
    const embed = new EmbedBuilder()
      .setColor(0x746abd)
      .setTitle(
        "List of slash commands and what each one does. Just type exactly what you see including the / \nFor Example: /help"
      )
      .addFields(fields);
    return interaction.reply({
      embeds: [embed],
    });
  },
};
