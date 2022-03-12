const React=require('react')
const Default=require('./Default')

class Show extends React.Component{
    render(){
        const gossip=this.props.gossip
        return(
            <Default>
            <nav className='nav'>
                    <a className="nav-link" href='/gossip'>Home</a>
                    <a className='nav-link' href='/gossip/new'>New Post</a>
                    <a className='nav-link' href='#'>Neigborhood Watch</a>
                    <a className='nav-link' href='/contact'>Contact Us</a>
                    </nav>
            <div className='container' >
                <div className="row justify-content-center" >
                <h1>{gossip.title}</h1>
                <div >
                <p>{gossip.post}</p>
                <a href={`/gossip/${ gossip._id}/Edit`}><button>Edit</button></a>
                <form action={`/gossip/${gossip._id}?_method=Delete`} method='POST'>
                    <input type="submit" value='Delete'/>
                

                </form>
                </div>

                    <div className='.img-fluid'>
                   {gossip.image}
                    </div>
                    </div>


            </div>
            </Default>
        )
    }
}

module.exports=Show;



