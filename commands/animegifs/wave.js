const { Message, Client } = require("discord.js");

module.exports = {
    name: "wave",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const { Anime } = require('djs-anime')
        const gif = new Anime({
        message: message,
        embedFooter: "Made With djs-anime", //The Footer of the embed
        embedTitle: "Anime Gifs", //The title of the embed
        embedColor: "RANDOM", //The color of the embed! (Use Hex codes or use the color name)
        })
        gif.wave()
    },
};
