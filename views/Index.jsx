const res = require('express/lib/response');
const React =require('react')
const express=require('express')

const like=require('../controllers/functions')

const Default=require('./Default')
class Index extends React.Component{
    render(){
        const gossip=this.props.gossip;
        return(
            <Default>
                

                <nav className='nav p-3 mb-2 bg-secondary '>
                    <a className="nav-link text-white new-color" href='/gossip'>Home</a>
                    <a className='nav-link text-white new-color' href='/gossip/new'>New Post</a>
                    <a className='nav-link text-white new-color' href='#'>Neigborhood Watch</a>
                    <a className='nav-link text-white new-color' href='/contact'>Contact Us</a>
                    </nav>

            
              <div className='container'>
                <div className="row justify-content-center">
             
                

 

                <div>
                <h1>Welcome Home </h1>
                
                </div>

                <div className='container-sm' >
                <ul className='no-bullets clearfix '>
                <img src="https://i.imgur.com/iqIIuXr.png" class="col-md-6 float-md-end mb-3 ms-md-3" alt="Snitch"/>

                {
                    gossip.map((gossips)=>{ 
                        return(
                          

                        <li className="p-3 mb-2 bg-transparent text-dark"  key={`${gossips._id}`}>
                            {<button className='like_btn '>
                                <span id='icon'><i className="fa-solid fa-thumbs-up">
                                    </i></span>
                        <span id='count' >0</span>likes</button>}
                        <a href={`/gossip/${gossips._id}` }><h4 >{gossips.title}</h4>  </a>
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

