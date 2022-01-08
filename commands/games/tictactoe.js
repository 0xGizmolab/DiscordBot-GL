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
        const opponent = message.mentions.users.first();
        if (!opponent) return message.channel.send(`Please mention who you want to challenge at tictactoe.`);
        const { TicTacToe } = require('djs-games')
        const game = new TicTacToe({
            message: message,
            opponent: opponent,
            xEmoji: '❌', // The Emote for X
            oEmoji: '0️⃣', // The Emote for O
            xColor: 'PRIMARY',
            oColor: 'PRIMARY', // The Color for O
            embedDescription: 'Tic Tac Toe', // The Description of the embed
        })
        game.start()

    }
}