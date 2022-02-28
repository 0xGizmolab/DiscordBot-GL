const client = require("../index")

client.on("interactionCreate", async i => {
  if(i.isButton()) {
    if(i.customId.split(":")[0] === "br") {
      await i.member.fetch()
      
      let role = i.guild.roles.cache.get(i.customId.split(":")[1])
      if(!role) return;
      
      if(i.member.roles.cache.get(role.id)) {
        i.member.roles.remove(role)
        i.reply({content: `Removed ${role.name} from you!`, ephemeral: true})
      } else {
        i.member.roles.add(role)
        i.reply({content: `Added ${role.name} to you!!`, ephemeral: true})
      }
    }
  }
})