const { SlashCommandBuilder } = require("discord.js");
const { generatePrompt } = require("../../utils/generatePrompt");
const { generate } = require("../../services/ai");
const { addToDb } = require("../../utils/addTodb");

module.exports = {
    data:
        new SlashCommandBuilder()
        .setName('summarize50')
        .setDescription('Summerizes 50 messages of the discord channel'),

    async execute(interaction){
        await interaction.deferReply();

        const messages = await interaction.channel.messages.fetch({limit : 100 });
        const userMessages = messages.filter(msg => !msg.author.bot).first(50);
        
        const prompt = generatePrompt(userMessages);
        const response = await generate(prompt);

        await interaction.editReply(response);
        await addToDb(`${interaction.guild.name}` , `${interaction.channelId}` , response)

    }
}