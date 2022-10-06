const fs = require("fs");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");
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
      fields.push({name: `/${command.data.name}\n`, value: `${command.data.description}`});
    }
    console.log(fields);
    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(
        "Names of Commands: Just add a / before every command.\nFor Example: /help"
      )
      .addFields(fields);



        
    return interaction.reply({
      embeds: [embed],
    });
  },
};
