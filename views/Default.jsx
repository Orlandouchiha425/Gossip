const { render }= require('express/lib/response')
const React=require('react');
class Default extends React.Component{
    render(){
        return(
            <html>
                <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"/>
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