const fs = require("fs");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

  /**
   * Slash command for help command
   *
   * @exports commands/help
   */

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Provides Names and Description of commands"),
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
    console.log(fields);
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
