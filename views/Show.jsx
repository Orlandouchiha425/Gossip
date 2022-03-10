const React=require('react')

class Show extends React.Component{
    render(){
        const gossip=this.props.gossip
        return(
            <div>
                <h1>this is the Show Page for {gossip.title}</h1>
                <a href={`/gossip/${gossip.id}/edit`}>Edit this Post</a>
                <a href='/gossip'>Go back to main screen</a>
            </div>
        )
    }
}

module.exports=Show;