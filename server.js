const express = require("express");
const PromptRouter = require('./route/prompter.js');
const mLRouter  = require("./route/mLRoute.js");
const errorMiddleware = require("./middlewares/errorMiddleware.js");
const app = express();

const port = process.env.PORT || 5500;

app.use(express.json())

app.use('/api/v1',PromptRouter);
app.use('/api/v1',mLRouter);

app.get("/",(req,res,next)=>{
    res.status(200).json({
        success:true,
        message:"Working"
    })
})

app.use(errorMiddleware);
app.listen(port,()=>{
    console.log("Server is up and running at "+port );
})
