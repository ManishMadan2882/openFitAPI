const express = require("express");
const PromptRouter = require('./route/prompter.js');
const app = express();

const port = process.env.PORT || 5500;

app.use(express.json())

app.use('/api/v1',PromptRouter);

app.listen(port,()=>{
    console.log("Server is up and running at "+port );
})
