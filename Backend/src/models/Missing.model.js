import mongoose  from "mongoose";

import { Schema } from "mongoose";


const missingSchema = new Schema({
    name:{
        type: String ,
        required: true ,
        

    },
    age:{
        type: String ,
        required: true ,
        
        

    },
    gender:{
        type: String,
        
        enum:["male","female","others"]
    },
    phoneNumber:{
        type: String ,
        required: true ,
        

    },
    address:{
        type: String,
        required: true ,
        trim: true ,
    },
    avatar:{
        type: String,
        required: true
        
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User"

    }
    
    
    
    
},{
    timestamps: true
})

export const Missing=mongoose.model("Missing",missingSchema)