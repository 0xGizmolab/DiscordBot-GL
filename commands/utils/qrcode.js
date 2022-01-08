const { Message, Client } = require("discord.js");

module.exports = {
    name: "qrcode",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const { Utils } = require('djs-utils')
        const util = new Utils({
        args: args[0],
        message: message,
        slashCommand: false,
        embedFooter: "Made With djs-utils", //The Footer of the embed
        embedTitle: "Generated A QR Code", //The title of the embed
        embedColor: "RANDOM", //The color of the embed! (Use Hex codes or use the color name)
        })
        util.qrcode()
    },
};
