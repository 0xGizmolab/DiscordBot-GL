const { Message, Client } = require("discord.js");

module.exports = {
    name: "connect4",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {
        const { ConnectFour } = require('djs-games')
        const game = new ConnectFour({
            message: message,
            player1: '🔴',
            player2: '🟡',
        })
        game.start()


    }
}