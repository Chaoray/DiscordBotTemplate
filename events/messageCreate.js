const { Events, } = require('discord.js');
const commandPrefix = process.env.PREFIX;

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.id === message.client.user.id) return;

        const content = message.content;
        if (content.startsWith(commandPrefix)) {
            const firstSpace = content.indexOf(' ');
            const commandName = content.slice(commandPrefix.length, firstSpace > 0 ? firstSpace : content.length);
            const commandList = message.client.messageCommands;

            const command = commandList.get(commandName);
            if (command) {
                if (command.execute) {
                    let commandParams = '';
                    if (firstSpace > 0) {
                        commandParams = content.slice(firstSpace, content.length).trim();
                    }

                    try {
                        await command.execute(message, commandParams);
                    } catch (err) {
                        console.error(err);
                        message.reply('Error');
                    }
                }
            }
        }
    },
};
