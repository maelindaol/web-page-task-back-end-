const express = require('express');
const cors = require('cors');
const { json, } = require('body-parser');
const morgan = require('morgan');
const TaskRouter = require('./src/controllers/task');

const PORT = process.env.PORT || 3030;
const app = express();

// MIDLEWARE FOR SETUP
app.use(cors());
app.use(json());
app.use(morgan('tiny'));

// API'S
app.use('/tasks', TaskRouter);

// FINAL MIDLEWARES
app.use(async (req, res) => {
    const { response, status=200, } = req;
    try{
        if(response instanceof Promise){
            return res.status(status).send(await response);
        }
        res.status(200).send(response);
    }catch(err){
        res.status(505).send("Internal Error");
        console.log(err.toString());
    }
});

app.listen(PORT, () => {
    console.log("Backend's running on " + PORT + " port");
});