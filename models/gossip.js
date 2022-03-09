const mongoose=require('mongoose')
const gossipsSchema=new mongoose.Schema({
    name:String,

})

 const Gossip=mongoose.model('Gossip', gossipsSchema);
 module.exports=Gossip;