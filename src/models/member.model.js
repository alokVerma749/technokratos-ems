import mongoose from "mongoose";
const memberSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    course:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        required:true,
    },
    year:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    assign:{
        type:[false, "No Event"],
    },

    memberString:{
        type:String,
    }
});

const Member = mongoose.models.Member || mongoose.model('Member', memberSchema);

export default Member