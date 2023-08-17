require("dotenv").config();
 const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require ("../middlewares/catchAsyncError");
const MindsDB = require("mindsdb-js-sdk");


exports.sleepModel = catchAsyncError(async(req,res,next)=>{
    const {age,stress,qualityOfSleep , duration , gender}=req.body;
    await MindsDB.default.connect({
        user: process.env.DB_EMAIL,
        password: process.env.DB_PSWD
    })

    if(qualityOfSleep <5){
        const model = await MindsDB.default.Models.getModel(
            "sleep_disorder_model",
            "mindsdb"
        );
        
        const queryOptions = {
            where: [`age = "${age}"`],
            where: [`Stress_Level = "${stress}"`],
            where: [`Quality_of_Sleep = "${qualityOfSleep}"`],
            where: [`Sleep_Duration = "${duration}"`],
            where: [`Gender = "${gender}"`],
        };
        
        const prediction = await model.query(queryOptions);
        res.status(200).json({
            success:true,
            result:prediction.data.sleep_disorder
        })
    }
    else{
        const model = await MindsDB.default.Models.getModel(
            "sleep_model",
            "mindsdb"
        );
        
        const queryOptions = {
            where: [`age = "${age}"`],
            where: [`Stress_Level = "${stress}"`],
            where: [`Quality_of_Sleep = "${qualityOfSleep}"`],
            where: [`Sleep_Duration = "${duration}"`],
            where: [`Gender = "${gender}"`],
        };
        
        const prediction = await model.query(queryOptions);
        res.status(200).json({
            success:true,
            result:prediction.data.sleep_disorder
        })
    }

//     const query = `SELECT Sleep_Disorder, 
//     Sleep_Disorder_explain 
// FROM mindsdb.sleep_disorder_model
// WHERE age = ${age}
// AND Stress_Level=${stress}
// AND Quality_of_Sleep=${qualityOfSleep}
// AND Sleep_Duration=${duration}
// AND Gender=${gender};`;

// const queryResult = await MindsDB.default.SQL.runQuery(query)


});

exports.kidneyModel = catchAsyncError(async(req,res,next)=>{
    const {age,smoke,sex , alcohol , diabetic,sleepTime}=req.body;
    console.log(req.body)
    await MindsDB.default.connect({
            user: process.env.DB_EMAIL,
        password: process.env.DB_PSWD
    })



const model = await MindsDB.default.Models.getModel(
    "kidney_model",
    "mindsdb"
);

const queryOptions = {
    where: [`AgeCategory = "${age}"`],
    where: [`Smoking = "${smoke}"`],
    where: [`Sex = "${sex}"`],
    where: [`Diabetic = "${diabetic}"`],
    where: [`AlcoholDrinking = "${alcohol}"`],
    where: [`SleepTime = "${sleepTime}"`],
};

const prediction = await model.query(queryOptions);
res.status(200).json({
    success:true,
    result:prediction.data.kidneydisease
})
});

exports.heartModel = catchAsyncError(async(req,res,next)=>{
    const {age,smoke,sex , alcohol , diabetic,sleepTime}=req.body;
    await MindsDB.default.connect({
            user: process.env.DB_EMAIL,
        password: process.env.DB_PSWD
    })



const model = await MindsDB.default.Models.getModel(
    "heart_model",
    "mindsdb"
);

const queryOptions = {
    where: [`AgeCategory = "${age}"`],
    where: [`Smoking = "${smoke}"`],
    where: [`Sex = "${sex}"`],
    where: [`Diabetic = "${diabetic}"`],
    where: [`AlcoholDrinking = "${alcohol}"`],
    where: [`SleepTime = "${sleepTime}"`],
};

const prediction = await model.query(queryOptions);
res.status(200).json({
    success:true,
    result:prediction.data.heartdisease
})
});



