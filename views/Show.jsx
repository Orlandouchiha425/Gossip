const React=require('react')
const Default=require('./Default')

class Show extends React.Component{
    render(){
        const gossip=this.props.gossip
        return(
            <Default>
           
           


                    
            <div className='container p-3 mb-2 bg-transparent text-dark  w-50 p-3 border border-5 rounded-star' >
                <div className="row justify-content-center " >
                <h1>{gossip.title}</h1>
                <div >
                <p>{gossip.post}</p>
                
                <a href={`/gossip/${ gossip._id}/edit`}>
                    <button>Edit</button></a>
                <form action={`/${gossip._id}?_method=Delete`} method='POST'>
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



