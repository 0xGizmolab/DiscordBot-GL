const { Message, Client } = require("discord.js");

module.exports = {
    name: "gtn",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {

        const djsGames = require('djs-games')
        const guessTheNumber = new djsGames.GuessTheNumber()
        guessTheNumber.startGame(message)
    }
}