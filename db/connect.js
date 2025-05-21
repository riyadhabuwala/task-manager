const mongoose = require('mongoose')

//env variable
//const connectionString= 'mongodb+srv://riya:riya@expressnodeproject1.528pbv0.mongodb.net/?retryWrites=true&w=majority&appName=ExpressNodeProject1'
const connectionString='mongodb+srv://riya:riya@expressnodeproject1.528pbv0.mongodb.net/03-task-manager?retryWrites=true&w=majority&appName=ExpressNodeProject1'

const connectDB= (url)=>{
    return mongoose.connect(connectionString)
}

module.exports=connectDB
    