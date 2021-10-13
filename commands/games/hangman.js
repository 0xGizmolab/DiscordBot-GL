const { Message, Client } = require("discord.js");


module.exports = {
    name: "hangman",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {

        const { HangMan } = require('djs-games')
        const game = new HangMan({
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