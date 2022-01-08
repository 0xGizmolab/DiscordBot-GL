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

        const { GuessTheNumber } = require('djs-games')
        const game = new GuessTheNumber({
            message: message,
            wrongGuess: 'Wrong Guess!',
            correctGuess: 'Correct Guess!',
        })
        game.start()
    }
}