require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/itemsdb';

async function startServer(){

    try{
        await mongoose.connect(MONGO_URI);

        //because await is used, this line will only be reached if the connection is successful
        console.log('Connected to MongoDB');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    }catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

startServer();
