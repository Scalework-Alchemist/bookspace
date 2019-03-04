const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// middleware
app.use(express.json());
app.use(("/api/modelList"), require('./backend/routes/modelList'))

app.use((err, req, res, next) => {
    res.send({message: err.message})
})



app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "client","build","index.html"))
})
app.listen(process.env.PORT, () => {
    console.log('server is live on port ' + process.env.PORT);
})
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser:true}, () => {
    console.log('connected to mongoDB' + process.env.MONGODB_URI);
})


