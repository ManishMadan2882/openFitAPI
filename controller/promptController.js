require('dotenv').config()
const {Configuration,OpenAIApi} = require('openai');
const catchAsyncError = require('../middlewares/catchAsyncError');
const ErrorHandler = require('../utils/errorHandler');


const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
)

exports.generatePrompt = catchAsyncError(async (req,res,next)=>{
    const {query} = req.body;
    
    if(!query){
      return next(new ErrorHandler("Query is required",400));
    }
    
    const output = await openAi.createChatCompletion({
        model : "gpt-3.5-turbo",
        messages : [{role:"user",content:query}]
    })

    res.status(200).json({
        output:output.data.choices[0].message.content
    })
});

