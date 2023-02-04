const { Events, } = require('discord.js');

module.exports = {
    once: true,
    name: Events.ClientReady,
    async execute(client) {
        console.info('[CLIENT] ready');
    },
};
