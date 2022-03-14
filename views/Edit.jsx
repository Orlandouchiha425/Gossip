const React=require('react')
const Default=require('./Default')
class Edit extends React.Component{
    render(){

        return(
            <Default>
                <nav className='nav p-3 mb-2 bg-secondary '>
                    <a className="nav-link text-white new-color" href='/'>Home</a>
                    <a className='nav-link text-white new-color' href='/new'>New Post</a>
                    <a className='nav-link text-white new-color' href='#'>Neigborhood Watch</a>
                    <a className='nav-link text-white new-color' href='/contact'>Contact Us</a>
                    </nav>
           
            <form action={`/${this.props.gossip._id}?_method=PUT`} method="POST">
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