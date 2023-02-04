const { Events, } = require('discord.js');

module.exports = {
    name: Events.GuildDelete,
    async execute(guild) {
        guild.commands.set([]);
    },
};
