const mongoose=require('./connection');


const {Schema,model}=mongoose;
const gossipsSchema= new Schema({
    title:String,
    image:String,
    post:String,
    username:String,
    

})

 const Gossip=model('Gossip', gossipsSchema);
 module.exports=Gossip;