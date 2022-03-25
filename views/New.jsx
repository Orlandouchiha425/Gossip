const React =require('react')
const multer=require('multer')
// const upload=multer()


const Default=require('./Default')
class New extends React.Component{
    render(){
        return(
            <Default title="Create a new Post">
                
              
            <div>
                  
            </div>
            <div>
                <h2>
                    Create a New Gossip
                </h2>
              
                
                <form action="/gossip" method='POST' >
                    Title: <input name="title" type="text"/><br/>
                    Post: <textarea name='post' type='text'/><br/>
                    Image Url: <input name='image' type='text'/><br/>
                    <input type='submit' value='Submit'/>
                    
                </form>
                
               

                
       
            </div>
           </Default>
        )
    }
}

module.exports=New;


