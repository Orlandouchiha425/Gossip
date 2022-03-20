require('dotenv').config();
const mongoose=require('mongoose')

//DATBASE CONNECTION

const DATABASE_URL=process.env.DATABASE_URL
const CONFIG={
    useNewUrlParser:true,
    useUnifiedTopology:true
};

//stablish connection
mongoose.connect(DATABASE_URL,CONFIG)
mongoose.connection
.on('open',()=>console.log('we are in the building'))
    .on('close',()=>console.log('Mongo has left the Building'))
    .on('error',()=>console.log(error));

    module.exports=mongoose