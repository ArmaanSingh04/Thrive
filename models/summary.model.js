const mongoose = require("mongoose");

const summarySchema = new mongoose.Schema({
    servername: String,
    channelId: String,
    summary: String
})

const Summary = mongoose.model("Summary" , summarySchema);

module.exports = Summary;