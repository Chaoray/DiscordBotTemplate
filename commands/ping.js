module.exports = {
    name: 'ping',
    description: 'Get Latency in ms',
    async execute(message, params) {
        await message.reply(`Pong! ${new Date().getTime() - message.createdTimestamp}ms`);
    },
};
