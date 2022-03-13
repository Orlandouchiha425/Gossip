const mongoose=require('mongoose')
const gossipsSchema=new mongoose.Schema({
    title:String,
    image:String,
    post:String,
    username:String,
    

})

 const Gossip=mongoose.model('Gossip', gossipsSchema);
 module.exports=Gossip;