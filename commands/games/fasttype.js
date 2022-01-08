const { Message, Client } = require("discord.js");

module.exports = {
    name: "fasttype",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async (client, message, args) => {
        const { FastTyper } = require('djs-games')
        const game = new FastTyper({
          message: message,
          })
          
          game.start()

    }
}