const { render }= require('express/lib/response')
const React=require('react');
class Default extends React.Component{
    render(){
        return(
            <html>
                <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
                <link rel="stylesheet" href="/css/app.css"/> 

                <title>{this.props.title}</title>
                </head>
                <body>
                    {this.props.children}
                </body>

            </html>
        )
    }
}

module.exports=Default