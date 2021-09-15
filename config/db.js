const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongouri');

// DB Connection
const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Database Connected Successfully');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;