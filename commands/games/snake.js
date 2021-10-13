const { Message, Client } = require("discord.js");

module.exports = {
    name: "snake",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {
        const { SnakeGame } = require('djs-games')
        const game = new SnakeGame({
            message: message,
            buttons: true, // If you want to use buttons || False if you want to use reactions
            snake: '🟩',
            apple: '🍎',
            embedColor: 'RANDOM',
            leftButton: '◀',
            rightButton: '▶',
            upButton: '▲',
            downButton: '▼',
        })
        game.start()

    }
}