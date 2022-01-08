const { Message, Client } = require("discord.js");
const config = require("../../config.json");

module.exports = {
  name: "guessthelogo",
  /**
 *
 * @param {Client} client
 * @param {Message} message
 * @param {String[]} args
 */

  run: async (client, message, args) => {
    const { GTL } = require('djs-games')
    const game = new GTL({
      message: message,
      token: config.dagpi, // *Required!! Get Your Api Token at https://dagpi.xyz/dashboard
      stopCommand: 'stop', // *Required!!
      winFooter: 'You Win!', // Set The Footer of the win message
      winColor: 'GREEN', // The embed color of the win message
      loseFooter: 'You Lose!', // Set The Footer of the lose message
      loseColor: 'RED', // The embed color of the lose message
      questionFooter: 'Guess the Logo!', // Set The Footer of the question message
      questionColor: 'BLUE', // The embed color of the question message
      maxAttempts: 5, //
    })
    game.start()


  }
}