const React =require('react')

const Default=require('./Default')
class Index extends React.Component{
    render(){
        const gossip=this.props.gossip;
        return(
            <Default>
                <nav className='nav'>
                    <a className="nav-link" href='/gossip'>Home</a>
                    <a className='nav-link' href='/gossip/new'>New Post</a>
                    
                    </nav>
            <div className='container'>
                <div className="row justify-content-center">
                
                <div>
                <h1>Welcome Home </h1>
                </div>

                <div >
                <ul className='no-bullets'>
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
              <address>P Sherman 42 Wallaby Way Sydney</address>
              </div>
            </div>
            </Default>
        )
    }
}

module.exports=Index;