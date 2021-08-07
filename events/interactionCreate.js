const client = require('../index');

client.on('interactionCreate', async (interaction) => {
    if (interaction.isCommand()) {
        await interaction.deferReply({ephemeral: false}).catch(() => {});

        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd) 
        return interaction.followUp({ content: 'An Error Has Occured!' });

        const args = [];
        interaction.options.data.map((x) => {
            args.push(x.value);
        });

        cmd.run(client, interaction, args);

    }
}); 