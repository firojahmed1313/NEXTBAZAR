import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true , "plz add a name"]
    },
    email:{
        type:String,
        unique:true,
        require:[true , "plz add a email"]
    },
    password:{
        type:String,
        require:[true , "plz add a strong password"]
    },
    role:{
        type:String,
        require:true,
        default:"user",
        enum:["user","admin","root"]
    },
    createAt: {
        type: Date,
        default: Date.now,
    }

});

export default mongoose.model.User || mongoose.model("User",userSchema);