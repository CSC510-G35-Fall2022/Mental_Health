const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Replies with Holp'),
    async execute(interaction) {
        interaction.reply({ content: 'Holp' })
    }
};