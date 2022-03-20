const res = require('express/lib/response');
const React =require('react')
// const express=require('express')


const Default=require('./Default')
class Index extends React.Component{
    render(){
        const gossip=this.props.gossip;
        return(
            <Default>
                

                <nav className='nav p-3 mb-2 bg-secondary '>
                    <a className="nav-link text-white new-color" href='/gossip'>Home</a>
                    <a className='nav-link text-white new-color' href='/new'>New Post</a>
                    <a className='nav-link text-white new-color' href='#'>Neigborhood Watch</a>
                    <a className='nav-link text-white new-color' href='/contact'>Contact Us</a>
                    <div>
  

</div>
                    </nav>
           

            
              <div className='container'>
                <div className="row justify-content-center">
             
                

 

                <div>
                <h1>Welcome Home </h1>
                <a href="/user/signup"><button>Signup</button></a>
  <a href="/user/login"><button>Login</button></a>
  <a href="/user/logout"><button>Logout</button></a>
                </div>

                <div className='container-sm' >
                <ul className='no-bullets '>
                <img src="https://i.imgur.com/iqIIuXr.png" className="col-md-6 float-md-end mb-3 ms-md-3" alt="Snitch"/>

                {
                    gossip.map((gossips)=>{ 
                        return(
                          

                        <li className="p-3 mb-2 bg-transparent text-dark  w-50 p-3 border border-5 rounded-star "  key={`${gossips._id}`}>
                            {<button className='like_btn '>
                                <span id='icon'><i className="fa-solid fa-thumbs-up">
                                    </i></span>
                        <span id='count' >0</span>likes</button>}
                        <a href={`/gossip/${gossips._id}` }><h4 >{gossips.title}</h4></a>
                        <div className='short'>
                        <p >{gossips.post}</p>
                        </div>
                      
                        </li>
                        
                        )
                       
                    })
                }
                 </ul>
                 </div>

    
              
              </div>
            </div>
            
            </Default>
        )
    }
}











module.exports=Index;

