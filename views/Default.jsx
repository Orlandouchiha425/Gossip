const { render }= require('express/lib/response')
const React=require('react');
class Default extends React.Component{
    render(){
        return(
            <html>
                <head>

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="/css/app.css"/> 
                <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'/>
                <title>{this.props.title}</title>
                </head>
                <body>

                <nav className='nav p-3 mb-2 bg-secondary '>
                    <a className="nav-link text-white new-color" href='/gossip'>Home</a>
                    <a className='nav-link text-white new-color' href='/gossip/new'>New Post</a>
                    <a className='nav-link text-white new-color' href='#'>Neigborhood Watch</a>
                    <a className='nav-link text-white new-color' href='/gossip/contact'>Contact Us</a>
                    <a href="/user/login"><button>Login</button></a>
  <a href="/user/logout"><button>Logout</button></a>
  <a href="/user/signup"><button>Signup</button></a>
                    <div>
  

</div>
                    </nav>
                    {this.props.children}
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

                </body>

            </html>
        )
    }
}

module.exports=Default