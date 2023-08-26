const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRouter = require('./Routes/task');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const atlasConnectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.blm4ehx.mongodb.net/to-do-app`;


mongoose.connect(atlasConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});


app.use('/tasks', taskRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
