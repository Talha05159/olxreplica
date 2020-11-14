import React from 'react';
import  Appname from '../app/header';
import Category from '../app/category'
import Image from '../components/img'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from  '../configure/firebase';
import './componnet.css';
import {connect} from 'react-redux';
import Middle from '../app/middle';
import Footer from '../app/footer';


class Mobilephones extends React.Component {

    constructor(props) {
        super(props);
     let obj = [ this.state1 =   { 
      src : "https://apollo-singapore.akamaized.net/v1/files/jnuy0b90p087-PK/image;s=300x600;q=60",
      price  : "RS 16,000",
      brand : "Iphone 6",
      spec : "16 gb"
    },
    this.state2 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/6igp6ryagp493-PK/image;s=300x600;q=60",
        price  : "RS 43,000",
        brand : "Samsung A51",
        spec : "32 gb"
    },
    this.state3 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/l6y05ueq5p721-PK/image;s=300x600;q=60",
        price  : "RS 18,500",
        brand : "Infinix",
        spec : "S5"
    },
    this.state4 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/dbn359z1ejy03-PK/image;s=300x600;q=60",
        price  : "RS 22,000",
        brand : "Oppo A7",
        spec : "4gb 64gb"
    },
    this.state5 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/jx8ahcwl7z3i2-PK/image;s=300x600;q=60  ",
        price  : "RS 52,000",
        brand : "Iphone 7",
        spec : "plus"
    },
    this.state6 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/tp57edvnwnmn1-PK/image;s=300x600;q=60  ",
        price  : "RS 20,000",
        brand : "Infinix S5",
        spec : "4/64 gb"
    },
    this.state7 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/if51zkvhv4x83-PK/image;s=300x600;q=60  ",
        price  : "RS 17,000",
        brand : "Samsung",
        spec : "A71"
    },
    this.state8 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/jyomwldjel4p2-PK/image;s=300x600;q=60  ",
        price  : "RS 22,000",
        brand : "Oppo",
        spec : "A5 2020"
    },
    this.state9 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/xrifpm93n063-PK/image;s=300x600;q=60"  ,
        price  : "RS 20,000",
        brand : "Huwaei",
        spec : "Y9 Prime"
    },
    this.state10 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/18kqvec152g12-PK/image;s=300x600;q=60"  ,
        price  : "RS 80,000",
        brand : "Samsung Note 10",
        spec : "Black Color"
    },
    this.state11 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/es7h5suy26ks3-PK/image;s=300x600;q=60"  ,
        price  : "RS 94,000",
        brand : "Iphone X",
        spec : "64 gb"
    },






    
]  
    
        
    firebase.database().ref('/').child("phones").set(obj)
        
    }

    render(){
        console.log(this.props)
    
        return(
            <div>
         <Appname />
         <Category />
         <Link to="/" style={{color:"black"}} >Home</Link>
         <Image />
      

      <div className="card" style={{width: '18rem'}}>
        <img src={this.state1.src} className="card-img-top" alt="..." />
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

export default connect(mapStateToProps, mapDispatchToProps )(Mobilephones);