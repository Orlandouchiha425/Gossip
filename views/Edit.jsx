const React=require('react')

class Edit extends React.Component{
    render(){
        return(
            <form action={`/gossip/${this.props.gossip._id}?_method=PUT`} method="POST">
                Title: <input type="text" name="title" defaultValue={this.props.gossip.name}/><br/>
                Post: <textarea type='text' name="post" defaultValue={this.props.gossip.post}/><br/>
                Image:<input type="file" id="myFile" name="image" defaultValue={this.props.gossip.image}/><br/>
                <input type='submit' value='submit changes'/>
                </form>
        )
    }
}

module.exports=Edit;