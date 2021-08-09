const { CommandInteraction, Client } = require('discord.js');

module.exports = {
    name: 'dagpitoken',
    description: 'How to get dagpi token for djs-games',

    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {string[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: 'Checkout this guide to know how to get dagpi token:\nhttps://dagpi.docs.apiary.io/#introduction/tokens'});

    }

}