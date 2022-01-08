const { Message, Client, MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "ping",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.channel.send(`${client.ws.ping} ws ping`);
    },
};
