const { Message, Client } = require("discord.js");

module.exports = {
    name: "randomquote",
      /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        const { Quote } = require('djs-anime')
        const quote = new Quote({
            message: message,
            embedTitle: "Anime Quotes", //The title of the embed
            embedColor: "RANDOM", //The color of the embed! (Use Hex codes or use the color name)
        })
        quote.random()

    }
}