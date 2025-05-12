const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: 
        new SlashCommandBuilder()
            .setName('ping')
            .setDescription('Replies with pong !'),
    async execute(interaction) {
        await interaction.deferReply();

        const reply = await interaction.fetchReply();
        const ping = reply.createdTimestamp - interaction.createdTimestamp;

        await interaction.editReply(`Client ping is ${ping}ms`)
    }
}