import React from 'react';
import  Appname from '../app/header';
import Category from '../app/category';
import Image from '../components/img';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from  '../configure/firebase';
import './componnet.css';
import {connect} from 'react-redux';
import Middle from '../app/middle';
import Footer from '../app/footer';
import { Link } from 'react-router-dom';


class Tablets extends React.Component {

    constructor(props) {
        super(props);
     let obj2 = [ this.state1 =   { 
      src : "https://apollo-singapore.akamaized.net/v1/files/zwemqzd6ccje3-PK/image;s=300x600;q=60",
      price  : "RS 19,000 ",
      brand : "Asus zenpad z10",
      spec : "3/32 gb"
    },
    this.state2 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/x9245ig6j66-PK/image;s=300x600;q=60",
        price  : "RS 24,000",
        brand : "Samsung Tab A",
        spec : "32 gb"
    },
    this.state3 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/koxvtrq9dpaq3-PK/image;s=300x600;q=60",
        price  : "RS 10,000",
        brand : "Luxuary Tablet",
        spec : "Good condition"
    },
    this.state4 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/atmzqjs7t54r1-PK/image;s=300x600;q=60",
        price  : "9.500",
        brand : "Blackberry playbook",
        spec : "64 gb"
    },
    this.state5 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/kf3wvlljks3l1-PK/image;s=300x600;q=60  ",
        price  : "RS 24,000",
        brand : "Ipad",
        spec : "Air 1"
    },
    this.state6 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/1rlpzdvzp3iz2-PK/image;s=300x600;q=60  ",
        price  : "RS 20,000",
        brand : "Lenovo M10",
        spec : "32 gb"
    },
    this.state7 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/nndt0rxfy3r8-PK/image;s=300x600;q=60  ",
        price  : "RS 25,000",
        brand : "Ipad",
        spec : "16 gb"
    },
    this.state8 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/izsr4sarvw1q2-PK/image;s=300x600;q=60  ",
        price  : "RS 120,000",
        brand : "Microsoft Surface 7 Pro",
        spec : "10 generation"
    },
    this.state9 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/bekdfpg7aqdp-PK/image;s=300x600;q=60"  ,
        price  : "RS 25,000",
        brand : "Apple Ipad",
        spec : "Pro  2nd generation"
    },
    this.state10 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/zmddlam8ls3l1-PK/image;s=300x600;q=60"  ,
        price  : "RS 10,000",
        brand : "T108 Tablet",
        spec : "Black Color"
    },
    this.state11 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/e1gfcrekrm35-PK/image;s=300x600;q=60"  ,
        price  : "RS 7,000",
        brand : "Samsung Galaxy ",
        spec : "Tab 3"
    },



    
]  
    
        
    firebase.database().ref('/').child("tablets").set(obj2)
        
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

export default connect(mapStateToProps, mapDispatchToProps )(Tablets);


