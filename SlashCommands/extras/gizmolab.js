const { CommandInteraction, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'gizmolab',
    description: 'Get info about gizmolab',

    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {string[]} args
     */
    run: async (client, interaction, args) => {

         
        let info = new MessageEmbed()
                    .setTitle(`GIZMOLAB`)
                    .setColor('#40E0D0')
                    .setThumbnail('https://cdn.discordapp.com/attachments/834390098304565323/869456304090021908/Original_size_Gizmolab_Logo_without_text.png')
				    .setURL('https://gizmolab.xyz')
                    .addFields(
                        {name: 'About Us', value: `✦ We are a small group of geeks who love to create new stuff everyday. From chatbot prototypes to web applications to games, our team is up for building anything. `},
                        {name: 'Contact Us', value: `Need Something Done or have an Interesting Idea? Email us at [contact@gizmolab.xyz](mailto:contact@gizmolab.xyz) or start a conversation in <#834390097633345543>`},
                        {name: 'Social Links', value: `<:website:869482589491187712> [Website](https://gizmolab.xyz) | <:twitter:869481256939843646> [Twitter](https://gizmolab.xyz/twitter) | <:insta:869481256793034793> [Instagram](https://gizmolab.xyz/instagram)\n\n<:youtube:869481257208262656> [Youtube](https://gizmolab.xyz/youtube) | <:facebook:869481257266991155> [Facebook](https://gizmolab.xyz/facebook) | <:discord:869481257350869022> [Discord](https://gizmolab.xyz/discord)`},
                        {name: 'Donations', value: `If you feel like it you can buy us a coffee here: <:bmc:869468996733370408> [Buy Me A Coffee](https://www.buymeacoffee.com/gizmolab)`},
                        
                    )
        interaction.followUp({ embeds: [info] });

    }

}