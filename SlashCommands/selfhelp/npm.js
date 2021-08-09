const { CommandInteraction, Client } = require('discord.js');
const { REPL_MODE_SLOPPY } = require('repl');

module.exports = {
    name: 'npm',
    description: 'install our packages',
    options: [
        {
            type: 'SUB_COMMAND',
            name: 'djs-games',
            description: 'npm i djs-games@latest',
        },
        {
            type: 'SUB_COMMAND',
            name: 'djs-anime',
            description: 'npm i djs-anime@latest',
        },
        {
            type: 'SUB_COMMAND',
            name: 'djs-utils',
            description: 'npm i djs-utils@latest',
        },
    ],

    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {string[]} args
     */
    run: async (client, interaction, args) => {
        const [subcommand] = args;


        if (subcommand === 'djs-games')
            return interaction.followUp({ content: '➤ For discord.js v13 Install the latest version of djs-games [npm i djs-games](https://www.npmjs.com/package/djs-games)\n➤ For discord.js v12 use this: [npm i djs-games@old](https://www.npmjs.com/package/djs-games/v/1.6.5-old) ' });
        if (subcommand === 'djs-anime')
            return interaction.followUp({ content: '➤ For discord.js v13 Install the latest version of djs-anime [npm i djs-anime](https://www.npmjs.com/package/djs-anime)\n➤ For discord.js v12 use this: [npm i djs-anime@old](https://www.npmjs.com/package/djs-anime/v/1.1.3-old)' });
        if (subcommand === 'djs-utils')
            return interaction.followUp({ content: '➤ For discord.js v13 Install the latest version of djs-utils [npm i djs-utils](https://www.npmjs.com/package/djs-utils)\n➤ For discord.js v12 use this: [npm i djs-utils@old](https://www.npmjs.com/package/djs-utils/v/1.0.3-old)' });
    }

}