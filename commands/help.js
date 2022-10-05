const fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Provides Names and Description of commands'),
        async execute(interaction) {
            let str;
            str=``
            const commandFiles=fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`./${file}`);
                str += `Name: ${command.data.name},\n Description: ${command.data.description} \n\n`;
            }
            const embed = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle("Names of Commands")
            .setDescription(str);
            return interaction.reply({
                embeds: [embed]
            });
    },
};