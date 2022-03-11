const React =require('react')
const multer=require('multer')
const upload=multer()


const Default=require('./Default')
class New extends React.Component{
    render(){
        return(
            <Default title="Create a new Post">
                <nav className='nav'>
                    <a className="nav-link" href='/gossip'>Home</a>
                    <a className='nav-link' href='/gossip/new'>New Post</a>
                    
                    </nav>
            <div>
                  
            </div>
            <div>
                <h1>
                    This is the new Page
                </h1>
              
                
                <form action="/gossip" method='POST' >
                    Title: <input name="title" type="text"/><br/>
                    Post: <textarea name='post' type='text'/><br/>
                    <form action='/gossip' encType='multipart/form-data'>
                        <input type='file' name='image'/>
                        <input type='submit' value='Submit'/>
        
                    </form>
                    
                </form>
                
               

                
       
            </div>
           </Default>
        )
    }
}

module.exports=New;


