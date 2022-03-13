const React=require('react')
const Default=require('./Default')

class Show extends React.Component{
    render(){
        const gossip=this.props.gossip
        return(
            <Default>
           
           <nav className='nav p-3 mb-2 bg-secondary '>
                    <a className="nav-link text-white new-color" href='/gossip'>Home</a>
                    <a className='nav-link text-white new-color' href='/gossip/new'>New Post</a>
                    <a className='nav-link text-white new-color' href='#'>Neigborhood Watch</a>
                    <a className='nav-link text-white new-color' href='/contact'>Contact Us</a>
                    </nav>


                    
            <div className='container' >
                <div className="row justify-content-center" >
                <h1>{gossip.title}</h1>
                <div >
                <p>{gossip.post}</p>
                
                <a href={`/gossip/${ gossip._id}/edit`}>
                    <button>Edit</button></a>
                <form action={`/gossip/${gossip._id}?_method=Delete`} method='POST'>
                    <input type="submit" value='Delete'/>
                

                </form>
                </div>

                    <div className='.img-fluid'>
                   <img src={gossip.image}/>
                    </div>
                    </div>


            </div>
            </Default>
        )
    }
}

module.exports=Show;



