const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // mongoose library allows for mongodb atlas interaction

require('dotenv').config();

/////////////////////
//  Start Server   //
/////////////////////

const app = express();
const port = process.env.PORT || 5000; // Define port number for server

app.use(cors());
app.use(express.json()); // Parson JSON


/////////////////////////////
//  Connection to Mongodb  //
/////////////////////////////

const uri = process.env.ATLAS_URI;
// Mongodb atlas options defined in this connection line
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
// When connection is open
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

////////////////////////////
//  Getting the endoints  //
////////////////////////////

const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

app.use('/posts', postsRouter);
app.use('/users', usersRouter);

////////////////////////////
//  After Server Started  //
////////////////////////////

// Listens on port and starts server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});