const { CommandInteraction, Client } = require('discord.js');

module.exports = {
    name: 'test',
    description: 'Test command',

    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {string[]} args
     */
    run: async (client, interaction, args) => {
        interaction.editReply({ content: 'Test command ran!' });

    }

}