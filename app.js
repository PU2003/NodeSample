const express = require('express')                                   // returning the function which is then storing in the express

const app = express()                                                // invoking the function of express in order to make an instance of express like 'app'
const dotenv = require('dotenv');
const mongoose = require("mongoose")
const router = require('./routes/UserRoutes')


dotenv.config();

const mongoUri = process.env.MONGO_URI;
const PORT = process.env.PORT ;
app.use(express.json());

const connectDB = async () => {
    
    await mongoose.connect(mongoUri)
    .then(() => {

        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);

        });

        console.log("connected to MongoDb")
    })
    
}

connectDB(); 

app.use('/worko',router);


module.exports = app;
