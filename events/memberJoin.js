const { CommandInteraction, Client, MessageEmbed } = require('discord.js');
const client = require("../index");

client.on('guildMemberAdd', async(member) => { // this event gets triggered when a new member joins the server!
    // Firstly we need to define a channel
    // either using .get or .find, in this case im going to use .get()
    const Channel = member.guild.channels.cache.get('834390097633345538') //insert channel id that you want to send to
    //making embed
    const embed = new MessageEmbed()
        .setColor('40E0D0')
        .setTitle(`Welcome ${member.displayName}!!`)
        .setDescription(`Hey ${member.displayName} welcome to ${member.guild.name}! We Hope You Enjoy Your Stay!\n
        ☉ Learn more <#852832956056862730>
        ☉ Get yourself some roles from <#857269017722224650>
        ☉ Use the designated help channels for any kind of issues you can start with <#834390097633345544>!
        ☉ Finally Explore the server or start a convo in <#834390097633345543>
        `)
        .setThumbnail(member.user.displayAvatarURL( {dynamic:true} ))
        .setImage(`https://cdn.discordapp.com/attachments/834390098304565323/873986012974551100/Yellow_Magenta_Black_White_Neon_Scifi_YouTube_Intro.gif`)
        .setURL(`https://gizmolab.xyz`)
    // sends a message to the channel
    Channel.send({ embeds: [embed]})
})