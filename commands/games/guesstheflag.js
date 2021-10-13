const { Message, Client } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    name: "guesstheflag",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {
        const { GTF } = require('djs-games')
        const game = new GTF({
            message: message,
            token: config.dagpi, // *Required!! Get Your Api Token at https://dagpi.xyz/dashboard
            stopCommand: 'stop', // *Required!!
            winFooter: 'You Win!', // Set The Footer of the win message
            winColor: 'GREEN', // The embed color of the win message
            loseFooter: 'You Lose!', // Set The Footer of the lose message
            loseColor: 'RED', // The embed color of the lose message
            questionFooter: 'Guess the Flag!', // Set The Footer of the question message
            questionColor: 'BLUE', // The embed color of the question message
            winMessage: 'You Win!', // Set The Win Message
            loseMessage: 'You Lose!', // Set The Lose Message
            maxAttempts: 5, //
            wrongGuess: 'Wrong Guess!', // Set The Wrong Guess Message
        })
        game.start()

    }
}