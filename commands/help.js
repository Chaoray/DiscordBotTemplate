module.exports = {
    name: 'help',
    description: 'Show Help of this Bot',
    async execute(message, params) {
        params = params.split(' ');

        const commandList = message.client.messageCommands;

        const command = commandList.get(params[0]);
        if (command) {
            if (command.description) {
                await message.reply(command.description);
            }
        }

        if (params[0] === '') {
            await message.reply(`Usage: ${process.env.PREFIX}help [command]`);
        }
    },
};
