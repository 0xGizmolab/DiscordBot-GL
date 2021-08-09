const { CommandInteraction, Client } = require('discord.js');

module.exports = {
    name: 'example',
    description: 'example code for our packages',
    options: [
        {
            type: 'SUB_COMMAND',
            name: 'games',
            description: 'how to use djs-games',
        },
        {
            type: 'SUB_COMMAND',
            name: 'anime',
            description: 'how to use djs-anime',
        },
        {
            type: 'SUB_COMMAND',
            name: 'utils',
            description: 'how to use djs-utils',
        },
    ],

    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {string[]} args
     */
    run: async (client, interaction, args) => {
        const [subcommand] = args;


        if (subcommand === 'anime')
            return interaction.followUp({ content: '➤ Example code for djs-anime:\n☉Slash Commands:https://github.com/GizmolabAI/DiscordBot-GL/tree/main/SlashCommands/anime \n☉Normal Commands:https://github.com/GizmolabAI/DiscordBot-GL/tree/main/commands/animegifs' });
        if (subcommand === 'games')    
            return interaction.followUp({ content: '➤ Example code for djs-games:\n☉Normal Commands:https://github.com/GizmolabAI/DiscordBot-GL/tree/main/commands/games' });
        if (subcommand === 'utils')
            return interaction.followUp({ content: '➤ Example code for djs-utils:\n☉Slash Commands:https://github.com/GizmolabAI/DiscordBot-GL/tree/main/SlashCommands/utils \n☉Normal Commands:https://github.com/GizmolabAI/DiscordBot-GL/tree/main/commands/utils' });

    }

}