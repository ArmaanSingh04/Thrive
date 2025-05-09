require('dotenv').config();

const { Events, Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    ]
})

client.on(Events.MessageCreate , (message) => {
    console.log(`${message.author.username} --- ${message.content}`)
})

client.once(Events.ClientReady , (readyClient) => {
    console.log(`Ready Logged in as ${readyClient.user.tag}`)
})

client.login(process.env.BOT_TOKEN)