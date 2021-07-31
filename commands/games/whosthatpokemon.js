const { Message, Client } = require("discord.js");

module.exports = {
    name: "wtp",
      /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        const { Pokemon } = require('djs-games')
    const game = new Pokemon({
    message: message,
    token: "dagpi-token-here", // Get Your Api Token at https://dagpi.xyz/dashboard
    })
    game.start()

    }
}   