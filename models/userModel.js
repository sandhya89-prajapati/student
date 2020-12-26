const mongooes = require("mongoose")
const userSchema = mongooes.Schema({
    name:{
        type:String,
        maxlength:50,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true
    },
    phn:{
        type:Number,
        unique:true
    },
    dob:{
        type:Date,
    },
    bio:{
        type:String,
    },
    Adult:{
        type:Boolean,
    }
})
const User = mongooes.model('user',userSchema)