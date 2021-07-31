const { Message, Client } = require("discord.js");

module.exports = {
    name: "ttt",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {
        const djsGames = require('djs-games')
        const TicTacToe = new djsGames.TicTacToe()
        TicTacToe.startGame(message)

    }
}