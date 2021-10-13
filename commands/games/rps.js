const { Message, Client } = require("discord.js");

module.exports = {
    name: "rps",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {
        const { RockPaperScissors } = require('djs-games')
        const game = new RockPaperScissors({
            message: message,
        })
        game.start()

    }
}