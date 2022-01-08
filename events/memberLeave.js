const { CommandInteraction, Client, MessageEmbed } = require('discord.js');
const client = require("../index");
client.on('guildMemberRemove', async(member) => { // this event gets triggered when a new member leaves the server!
    // Firstly we need to define a channel
    // either using .get or .find, in this case im going to use .get()
    const Channel = member.guild.channels.cache.get('839715738259816448') //insert channel id that you want to send to
    //making embed
    const embed = new MessageEmbed()
        .setColor('RED')
        .setTitle('A member left the server :(')
        .setDescription(`**${member.displayName}** has left ${member.guild.name}!`)
    // sends a message to the channel
    Channel.send({embeds: [embed]})
})