const { Message, Client } = require("discord.js");
const config = require("../../config.json");

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
            token: config.dagpi, // Get Your Api Token at https://dagpi.xyz/dashboard
            winMessage: 'You Win!',
            loseMessage: 'You Lose!',
            wrongGuess: 'Wrong Guess!',
            stopCommand: 'stop',
            maxAttempts: 10,
        })
        game.start()
    }
}