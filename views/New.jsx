const React =require('react')
class New extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    This is the new Page
                </h1>
                <nav>
                    <a href='/gossip'>Back to home screen</a>
                </nav>
            </div>
        )
    }
}

module.exports=New;