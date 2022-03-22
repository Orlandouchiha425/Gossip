///Import Dependencies

const mongoose=require('./connection')


///DEFINE Model


const { Schema, model }= mongoose;



//make Schema

const userSchema = new Schema({
    username:{type:String, required:true, unique: true},
    password:{type:String, required: true},
    email:{type:String, required: true}
})

////make model
const User =model('User',userSchema);

module.exports=User;