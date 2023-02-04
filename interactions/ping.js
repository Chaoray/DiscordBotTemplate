const { SlashCommandBuilder, } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Reply with Pong! ms'),
    async execute(interaction) {
        await interaction.reply(`Pong! ${new Date().getTime() - interaction.createdTimestamp}ms`);
    },
};
