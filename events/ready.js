const { Events, } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    async execute(client) {
        console.info('[CLIENT] ready');
    },
};
