const React =require('react')
class New extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    This is the new Page
                </h1>
                <nav>
                    <a href='/gossip'>Back to home screen</a>
                </nav>

                <form action="/gossip" method='POST' >
                    Title: <input name="title" type="text"/><br/>
                    Post: <textarea name='post' type='text'/><br/>
                    Image: <input type="file" id="myFile" name="image"/><br/>
                    
                    <input type='submit' value='Submit'/> 
                </form>
                

                
       
            </div>
        )
    }
}

module.exports=New;


