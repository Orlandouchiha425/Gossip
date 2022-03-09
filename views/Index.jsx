const React =require('react')
class Index extends React.Component{
    render(){
        const gossip=this.props.gossip;
        return(
            <div>
                <h1>This is my Index page</h1>
            </div>
        )
    }
}

module.exports=Index;