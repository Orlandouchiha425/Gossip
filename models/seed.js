const mongoose=require('./connection')
const Gossip=require('./gossip')

///////Seed Code

///Save the connection to a variable
const db=mongoose.connection
 
// make sure code is not run till connected
db.on('open',()=>{

    // write seed code Below

    //// run any date base queries in this function
    const startPost=[
        {title:"Orlando is so short",post:"Orlando is so short and chubby that he is 1 pizza away from getting rolled by willy wonka and  squeeze the grape out of him"},
        {title:"noisy neighbor" ,post:"Is 3 am and the neighbor in the apartment 209 is very noisey, i cant sleep. someone call the policy and report noise complaint",image:"https://i.imgur.com/AYxFxuO.png" },
        {title:"General Assembly", post: "has anyone else heard that even if general assembly is very expensive you can learn alot more than you can yourself? highly recommended", image:"https://i.imgur.com/GdayqQt.png"},
        {title:"Cat stuck",post:"i found a cat stuck in a tree, i climbed the tree and now im stuck too, send help NOW! oh and food",image:"https://i.imgur.com/GSbPcGY.jpg"},
        {title:"still stuck",post:" so you all gonna act like you havent seen my post? its been 3 days, the cat is trying to chew my leg"},
        {title:"4 days now",post:'Wait, I wasnt wearing my glasses, is not a cat. i been stuck with a racoon, i tried to rescue a racoon. i had to jump down.'},
        {title:"test", post:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus"}
    ]
    Gossip.deleteMany({})
    .then((deletedGossip)=>{
        // add starter gossip
        Gossip.create(startPost)
        .then((newGossip)=>{
            //log the new gossip to confirm their creation
            console.log(newGossip);
            db.close()
        })
        .catch((error)=>{
            console.log(error);
            db.close();
        })
    })
    .catch((error)=>{
        console.log(error);
        db.close();
    })
})


//     ///DELETE ALL POSTS
//     Gossip.deleteMany({}).then((data)=>{
//         Gossip.create(startPost).then((data)=>{
//             res.json(data);
//         })
//     }).catch((err)=>{
//         res.status(400).send(err)
//     })
// })