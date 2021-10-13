const { Message, Client } = require("discord.js");


module.exports = {
    name: "Hangman",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {
        const { Hangman } = require('djs-games')
        const game = new Hangman({
            message: message,
            theme: 'coding', // 'sport', 'coding', 'nature', 'popular game', 'phone brand', 'color', 'camping', 'music instrument'
            hangManHat: '🎓',
            hangManHead: '🙉',
            hangManShirt: '👚 ',
            hangManPants: '👖 ',
            hangManBoots: '👟👟',
        })
        game.start()

    }
}