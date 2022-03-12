const React=require('react')
const Default = require('./Default')

class Contact extends React.Component{
    render(){
        return(
          <Default>
              <nav className='nav'>
                    <a className="nav-link" href='/gossip'>Home</a>
                    <a className='nav-link' href='/gossip/new'>New Post</a>
                    <a className='nav-link' href='#'>Neigborhood Watch</a>
                    <a className='nav-link' href='/contact'>Contact Us</a>
                    </nav>
              <a class="footer" href= "mailto:valadez425@gmail.com?" target="_top">valadez425@gmail.com</a>
                <footer>
                  <h6>Contact Us</h6>
                  <p>Orlando Valadez</p>
                 <p>P Sherman 42 Wallaby Way Sydney</p> 
                 <p>281-330-8004</p>
                  </footer>
          </Default>  
        )
    }
}

module.exports=Contact;