const { Message, Client } = require("discord.js");

module.exports = {
    name: "fasttype",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {
        const djsGames = require('djs-games')
        const FastTyper = new djsGames.FastTyper()
        FastTyper.startGame(message)


    }
}