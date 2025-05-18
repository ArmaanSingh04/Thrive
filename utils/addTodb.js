const Summary = require('../models/summary.model')

const addToDb = async (servername , channelId , summary) => {
    await Summary.create({
        servername,
        channelId,
        summary
    })
}

module.exports = {
    addToDb
}