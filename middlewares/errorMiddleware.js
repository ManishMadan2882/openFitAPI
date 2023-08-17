const errorMiddleware = (err,req,res,next)=>{
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success:false,
        error:message
    })
}

module.exports = errorMiddleware;