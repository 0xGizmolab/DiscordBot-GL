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
                { name: 'About Us', value: `✦ We Build web3 Tools and Security Solutions for NFT Communities, From Discord Bots to Dapps, our team is up to the task of building the best tools for the best community.` },
                { name: 'Contact Us', value: `Need Something Done or have an Interesting Idea? Email us at [contact@gizmolab.xyz](mailto:contact@gizmolab.xyz) or start a conversation in <#834390097633345543>` },
                { name: 'Social Links', value: `<:website:869482589491187712> [Website](https://gizmolab.xyz) | <:twitter:869481256939843646> [Twitter](https://twitter.com/gizmolab_) | <:insta:869481256793034793> [Instagram](https://www.instagram.com/gizmolab_/)\n\n<:youtube:869481257208262656> [Youtube](https://www.youtube.com/channel/UC3QEBq5KtelNFJrTO6of72A) | <:facebook:869481257266991155> [Facebook](https://www.facebook.com/gizmolab.eth) | <:discord:869481257350869022> [Discord](https://discord.gg/jDP2FbvCdk)` },

            )
        interaction.followUp({ embeds: [info] });

    }

}