const { Events, } = require('discord.js');

module.exports = {
    name: Events.GuildCreate,
    async execute(guild) {
        guild.commands.set(guild.client.slashCommands.map((command) => command.data));
    },
};
