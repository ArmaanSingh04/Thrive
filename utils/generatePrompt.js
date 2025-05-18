const generatePrompt = (usermessages) => {
    let prompt = ``;
    usermessages.map((message) => {
        prompt += `${message.author.username} - ${message.content} \n`
    })

    return prompt;
}

module.exports = {
    generatePrompt
}