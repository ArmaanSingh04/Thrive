const mongoose = require("mongoose");

const connectToDatabase = async () => {
    await mongoose.connect(process.env.DATABASE_URL);
}

module.exports = connectToDatabase;