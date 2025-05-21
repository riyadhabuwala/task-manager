const mongoose = require('mongoose')

const TaskSchema = new mongoose. Schema ({ 
    name: {
        type: String,
        required:[true, 'must provide name'],
        trim: true,
        maxLength:[20, 'name can not be more than 20 characters.'],
    }, 
    completed: {
        type:Boolean,
        default:false,
    },
})
//in model arg ->name of model & schema
//instance of model is called document
module.exports = mongoose.model('Task', TaskSchema)