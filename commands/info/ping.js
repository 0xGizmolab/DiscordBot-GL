const { Message, Client, MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "ping",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.channel.send(`${client.ws.ping} ws ping`);
        
        const embed = new MessageEmbed()  
        .setTitle("Client - Reception")
        .setDescription("> \\🌟 | Click the button to order!")
       .setThumbnail(message.guild.iconURL())
       .setColor("black")
       .setFooter({text: `©${new Date().getFullYear()} GizmoLab.`})
       
       const btn = new MessageButton()
       .setLabel("Order^")
       .setStyle("DANGER")
       .setCustomId("o-desk")
       
       let row = new MessageActionRow().addComponents(btn)
       
       message.channel.send({embeds: [embed], components: [row]})
    },
};
