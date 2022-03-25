const React=require('react')
const Default=require('./Default')
class Edit extends React.Component{
    render(){

        return(
            <Default>
               
            <form action={`/gossip/${this.props.gossip._id}?_method=PUT`} method="POST">
                Title: <input type="text" name="title" defaultValue={this.props.gossip.name}/><br/>
                Post: <textarea type='text' name="post" defaultValue={this.props.gossip.post}/><br/>
                Url Image:<input type="text" name="image" defaultValue={this.props.gossip.image}/><br/>
                <input type='submit' value='submit changes'/>
                </form>
                </Default>
        )
    }
}

module.exports=Edit;