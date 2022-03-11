const React =require('react')
class Index extends React.Component{
    render(){
        const gossip=this.props.gossip;
        return(
            <div>
                <h1>This is my Index page</h1>
                <ul>
                {
                    gossip.map((gossips)=>{ 
                        return(
                        <li key={`${gossips._id}`}>
                        <a href={`/gossip/${gossips._id}`}>{gossips.title} </a>
                        </li>
                        )
                       
                    })
                }
                 </ul>
            </div>
        )
    }
}

module.exports=Index;