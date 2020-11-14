import React from 'react';
import  Appname from '../app/header';
import Category from '../app/category';
import Image from '../components/img';
import firebase from  '../configure/firebase';
import './componnet.css';
import {connect} from 'react-redux';
import Middle from '../app/middle';
import Footer from '../app/footer';
import { Link } from 'react-router-dom';



class TV extends React.Component {
    
    constructor(props) {
        super(props);
     let obj2 = [ this.state1 =   { 
      src : "https://apollo-singapore.akamaized.net/v1/files/0z6rzqjfqpfs3-PK/image;s=300x600;q=60",
      price  : "RS 25,000 ",
      brand : "Samsung LED",
      spec : "42 Inch"
    },
    this.state2 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/njmh0iwodmpo2-PK/image;s=300x600;q=60",
        price  : "RS 24,000",
        brand : "Simple LED TV",
        spec : "42 Inch"
    },
    this.state3 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/08mv7n7v5xt13-PK/image;s=300x600;q=60",
        price  : "RS 16,800",
        brand : "Wamma ",
        spec : "32 Inch"
    },
    this.state4 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/7chd48pzzr0t2-PK/image;s=300x600;q=60",
        price  : "49.500",
        brand : "LG New LED",
        spec : "56 Inch"
    },
    this.state5 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/px8ygbubonk5-PK/image;s=300x600;q=60" ,
        price  : "RS 16,000",
        brand : "Wiofer",
        spec : "for sale"
    },
    this.state6 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/nomo27yrfzhg2-PK/image;s=300x600;q=60 ",
        price  : "RS 20,000",
        brand : "LED TV",
        spec : "42 Inch"
    },
    this.state7 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/u05qunfjsgs81-PK/image;s=300x600;q=60 ",
        price  : "RS 20,000",
        brand : "Samsung LED",
        spec : "32 Inch "
    },
    this.state8 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/cb991w3mjq8i3-PK/image;s=300x600;q=60 ",
        price  : "RS 12,000",
        brand : "Sony",
        spec : "Sound System"
    },
    this.state9 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/rwf09788oigv3-PK/image;s=300x600;q=60"  ,
        price  : "RS 25,000",
        brand : "Smart LED TV",
        spec : "42 Inch"
    },
    this.state10 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/rivl58h7zi9q1-PK/image;s=300x600;q=60"  ,
        price  : "RS 10,000",
        brand : "Panasonic",
        spec : "Original Speaker"
    },
    this.state11 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/8mvit4xyccg9-PK/image;s=300x600;q=60"  ,
        price  : "RS 17,000",
        brand : "Sony LED ",
        spec : "32 Inch"
    },


    
]  
firebase.database().ref('/').child("tv/audio").set(obj2)
}

    render(){
        return(
            <div>
         <Appname />
         <Category />
         <Link to="/" style={{color:"black"}} >Home</Link>
         <Image />




         <div className="card" style={{width: '18rem'}}>
        <img src={this.state1.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state1.price}</p>
        <h6>{this.state1.brand} {this.state1.spec}</h6>
        </div>
      </div>
     
     
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state2.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state2.price}</p>
        <h6>{this.state2.brand} {this.state2.spec}</h6>
        </div>
      </div>
      
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state3.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state3.price}</p>
        <h6>{this.state3.brand} {this.state3.spec}</h6>
        </div>
      </div>

        
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state4.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state4.price}</p>
        <h6>{this.state4.brand} {this.state4.spec}</h6>
        </div>
      </div>

      <div className="card" style={{width: '18rem'}}>
        <img src={this.state5.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state5.price}</p>
        <h6>{this.state5.brand} {this.state5.spec}</h6>
        </div>
      </div>

       
      <div className="card-ad" style={{width: '18rem'}}>
      <h5 className="wanttosell">Want to see your staff here ?</h5>
      <br />
      <h6 className="makesomecash">Make some extra cash by selling things in your community.Go on, its quick and easy.</h6>
      <br />
      <br />
      <br />
      <br />
        <div className="card-body">
        <p className="card-text"></p>
      <center><button className="startselling">Start Selling</button></center>
        </div>
      </div>
  

  
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state6.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state6.price}</p>
        <h6>{this.state6.brand} {this.state6.spec}</h6>
        </div>
      </div>

      
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state7.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state7.price}</p>
        <h6>{this.state7.brand} {this.state7.spec}</h6>
        </div>
      </div>

      
 
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state8.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state8.price}</p>
        <h6>{this.state8.brand} {this.state8.spec}</h6>
        </div>
      </div>


      <div className="card" style={{width: '18rem'}}>
        <img src={this.state9.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state9.price}</p>
        <h6>{this.state9.brand} {this.state9.spec}</h6>
        </div>
      </div>


      <div className="card" style={{width: '18rem'}}>
        <img src={this.state10.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state10.price}</p>
        <h6>{this.state10.brand} {this.state10.spec}</h6>
        </div>
      </div>

      
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state11.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state11.price}</p>
        <h6>{this.state11.brand} {this.state11.spec}</h6>
        </div>
      </div>


      <Middle />
      <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) =>  ({
    data : state.data
})

const mapDispatchToProps = (dispatch) => ({
//set_data : () => dispatch (set_data())
})

export default connect(mapStateToProps, mapDispatchToProps )(TV);
