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
        const { Snake } = require('djs-games')
        const game = new Snake({
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