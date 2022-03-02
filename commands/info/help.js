const fs = require("fs")
const { MessageEmbed } = require("discord.js")
const path = require("path")

module.exports = {
  name: "help",
  aliases: ["h"],
  run: async(client, message, args) => {
    let embed = new MessageEmbed()
    .setTitle("Help - Command")
    .setColor("727288")
    
    let dirs = []
    
    fs.readdirSync(path.join(__dirname, `../../commands`)).forEach(dir => {
      let files = fs.readdirSync(path.join(__dirname, `../../commands/${dir}/`)).filter(f => f.endsWith(".js"))
      
      
      
      dirs.push({
        dir: dir,
        files: files.map(f => {
          let file = require(`../../commands/${dir}/${f}`)
          
          return `${file.name}`
        })
      })
    })
    
    dirs.map(d => {
      embed.addField(`> ${d.dir}`, d.files.join(" , "))
    })
    
    message.reply({embeds: [embed]})
  }
}