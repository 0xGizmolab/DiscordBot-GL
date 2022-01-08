const client = require('../index');
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")

client.on('interactionCreate', async (interaction) => {
    if (interaction.isCommand()) {
        await interaction.deferReply({ephemeral: false}).catch(() => {});

        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd) 
        return interaction.followUp({ content: 'An Error Has Occured!' });

        const args = [];
        interaction.options.data.map((x) => {
           if(x.value) args.push(x.value);
           if(x.name) args.push(x.name);
        });

        cmd.run(client, interaction, args);

    }
    
    if(interaction.isButton()) {
      if(interaction.customId === "desk") {
        interaction.reply({content: "\\🌟 | Enter the Client name.", ephemeral: true })
        let filter = m => m.author.id === interaction.user.id
        
        await interaction.channel.awaitMessages({filter, max: 1, time: 30000, errors: ["time"]}).then(async c => {
          
          let channel = await interaction.guild.channels.create("•│" + c.first().content, {
            type: "GUILD_TEXT",
            parent: "922972771636617217",
            permissionOverwrites: [
              {
                id: interaction.guild.id,
                deny: "VIEW_CHANNEL"
              }
            ]
          })
          
          await c.first().delete()
          
          let embed = new MessageEmbed()
          .setTitle(`\\🌟 | Im Check Box!`)
          .setColor("ffffff")
          .setFooter(`©${new Date().getFullYear()} - GizmoLab.`)
          .setThumbnail(interaction.guild.iconURL())
          
          let button1 = new MessageButton()
          .setLabel("Add User")
          .setStyle("PRIMARY")
          .setCustomId("adduser")
          
          let button2 = new MessageButton()
          .setLabel("Delete")
          .setStyle("DANGER")
          .setCustomId("ch-delete")
          
          let row = new MessageActionRow().addComponents(button1, button2)
          
          let msg = await channel.send({embeds: [embed], components: [row]})
          
          await msg.pin()
          
          interaction.followUp({content: "Head to <#" + channel + ">", ephemeral: true })
        }).catch(() => null)
      }
      
      if(interaction.customId === "ch-delete") {
        if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply({content: "Only admin can use this button.", ephemeral: true})
        
        interaction.reply(`Are You Sure ? \nType *yes* to delete.`)
        
        let filter = m => m.author.id === interaction.user.id
        
        await interaction.channel.awaitMessages({filter, max: 1, time: 30000, errors: ["time"]}).then(async c => {
          if(c.first().content === "yes") {
            await interaction.channel.delete()
          }
        }).catch(() => null)
      }
      
      if(interaction.customId === "adduser") {
        if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply({content: "Only admin can use this button.", ephemeral: true})
        
        interaction.reply(`Enter the id of user.`)
        
        let filter = m => m.author.id === interaction.user.id
        
        await interaction.channel.awaitMessages({filter, max: 1, time: 30000, errors: ["time"]}).then(async c => {
          
         if(!interaction.guild.members.cache.get(c.first().content)) return interaction.reply({content: "InValid Id , i cant find the member from this id.", ephemeral: true })
         
         interaction.channel.permissionOverwrites.edit(c.first().content, {
           SEND_MESSAGES: true,
           ATTACH_FILES: true,
           VIEW_CHANNEL: true,
           READ_MESSAGE_HISTORY: true
         })
         
         interaction.followUp(`Added user : <@${interaction.guild.members.cache.get(c.first().content).user.id}>`)
        }).catch(() => null)
      }
    }
}); 