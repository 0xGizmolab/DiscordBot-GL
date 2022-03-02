const {
  writeFile,
  readFile
} = require("fs/promises")
const {
  MessageEmbed,
  MessageButton,
  MessageActionRow
} = require("discord.js")

module.exports = {
  name: "rr-create",
  run: async (client, message, args) => {
    let data = []

    let file = await readFile("./data.json", {
      encoding: "utf8"
    })

    data = JSON.parse(file)

    let category = args[0]
    let channel = message.mentions.channels.first()
    if (!channel) return message.reply("Mention a channel!")
    if (!category) return message.reply("Mention a category!")

    data = data.find(c => c.category === category)

    if (!data) return message.reply("That category doesn't exists!")

    let embed = new MessageEmbed()
      .setAuthor({
        name: data.category, URL: "https://gizmolab.xyz"
      })
      .setThumbnail(message.guild.iconURL())
      .setColor("#2f3136")
      .setDescription("> Click buttons to get your role!")
      .setURL('https://gizmolab.xyz')


    let buttons = []
    let rows = []

    for (const role of data.roles) {
      const button = new MessageButton()
        .setCustomId("br:" + role.role)
        .setLabel(role.name)
        .setEmoji(role.emoji ? role.emoji : null)
        .setStyle("PRIMARY")

      buttons.push(button)
    }

    for (let i = 0; i < Math.ceil(data.roles.length / 5); i++) {
      rows.push(new MessageActionRow());
    }
    rows.forEach((row, i) => {
      row.addComponents(buttons.slice(0 + (i * 5), 5 + (i * 5)));
    });

    channel.send({ embeds: [embed], components: rows })

    message.reply("You can now add roles in " + category)
  }
}