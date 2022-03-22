const React=require('react')
const Default = require('./Default')
const axios = require('axios').default;
const express=require('express')



// const geocode=()=>{
//     let location= '2108 Plaza Dr Indianapolis In 46260';
//     axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
//     params:{
//         address:location,
//         key:"AIzaSyCnyQv5YlsVeXp71Ci2n3l1Z_dYPbjj1qg"
//     }
// }).then((response)=>{
//     //log full response
// console.log(response)
// //formatted address
// let formattedAddress= console.log(response.data.results[0].formatted_address)
// let formattedAddressOutput=`<ul class="list-group">
// <li className="list-group-item">${formattedAddress}</li>
// </ul>`

// ///output to app
// document.getElementById('formatted-address').innerHTML=formattedAddressOutput
// }).catch((error)=>{
//     console.log(error)
// })

// }



class Contact extends React.Component{
    render(){
      const gossip=this.props.gossip;
      return(
          <Default>
        <div id='formatted-address'></div>
        <nav className='nav p-3 mb-2 bg-secondary '>
                    <a className="nav-link text-white new-color" href='/gossip'>Home</a>
                    <a className='nav-link text-white new-color' href='/gossip/new'>New Post</a>
                    <a className='nav-link text-white new-color' href='#'>Neigborhood Watch</a>
                    <a className='nav-link text-white new-color' href='/gossip/contact'>Contact Us</a>
                   
                    </nav>
              <a className="footer" href= "mailto:valadez425@gmail.com?" target="_top">valadez425@gmail.com</a>
                <footer>
                  <h3>Contact Us</h3>
                  <p>Orlando Valadez</p>
                 <p>P Sherman 42 Wallaby Way Sydney</p> 
                 <p>281-330-8004</p>
                 
                 
               
                  </footer>
          </Default>  
        )
    }
}

module.exports=Contact;



