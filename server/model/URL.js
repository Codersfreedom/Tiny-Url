import mongoose from "mongoose";

const URLSchema = new mongoose.Schema({
    slug:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    }
})

const Url = mongoose.model('Url',URLSchema);
export default Url;