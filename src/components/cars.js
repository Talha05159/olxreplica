import React from 'react';
import  Appname from '../app/header';
import Category from '../app/category';
import Image from '../components/img';
import {connect} from 'react-redux';
import {set_data} from '../../src/store/action';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from '../configure/firebase';
import Middle from '../app/middle';
import Footer from '../app/footer';
import './componnet.css';
import { Link } from 'react-router-dom';

 
 

class Cars extends React.Component {
    constructor(props) {
        super(props);
     let obj = [ this.state1 =   { 
      src : "https://apollo-singapore.akamaized.net/v1/files/o8qegveq5znp2-PK/image;s=300x600;q=60",
      price  : "RS 3,700,000",
      brand : "Honda",
      model : "Civic",
      year : "2020",
      km : "5,600 km"

    },
    this.state2 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/ui4gko1jl5hc2-PK/image;s=300x600;q=60",
        price  : "3,275,000",
        brand : "Toyata",
        model : "Corolla",
        year : "2018",
        km : "20,000 km"
    },
    this.state3 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/sl4cj9bko1sl1-PK/image;s=300x600;q=60",
        price  : "RS 1,850,000",
        brand : "Toyata",
        model : "Pruis",
        year : "2009",
        km : "145,000 km"
    },
    this.state4 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/0o3og9sa7kz4-PK/image;s=300x600;q=60",
        price  : "RS 910,000",
        brand : "Suzuki",
        model : "Mehran",
        year : "2018",
        km : "360,009"
    },
    this.state5 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/3qljqdnso7911-PK/image;s=300x600;q=60",
        price  : "RS 360,000",
        brand : "Suzuki",
        model : "Mehran",
        year : "2002",
        km : "7 km"
    },
    this.state6 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/o21juk9aqytn1-PK/image;s=300x600;q=60",
        price  : "RS 1,750,000",
        brand : "Honda",
        model : "City",
        year : "2011",
        km : "114,000 km"
    },
    this.state7 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/m2hjubkee67l-PK/image;s=300x600;q=60",
        price  : "RS 350,000",
        brand : "Suzuki",
        model : "Hi-roof",
        year : "1997",
        km : "10,000 km"
    },
    this.state8 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/xtgd741tb6g42-PK/image;s=300x600;q=60",
        price  : "RS 36,900,000",
        brand : "Toyota",
        model : "Land Crusier ZX",
        year : "2016",
        km : "21,000 km"
    },
    this.state9 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/e7ymmd2j9oh81-PK/image;s=300x600;q=60",
      price  : "RS 1,420,000",
      brand : "Suzuki",
      model : "Wagnor VXR",
      year : "2016",
      km : "98,000 km"
    },
    this.state10 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/5q8jiddvyjm71-PK/image;s=300x600;q=60",
        price  : "RS 750,000",
        brand : "Suzuki",
        model : "Baleno",
        year : "2000",
        km : "258,673  km"
    },
    this.state11 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/gukc7tzvdbdg3-PK/image;s=300x600;q=60",
        price  : "RS 3,20,000",
        brand : "Toyota",
        model : "Yaris",
        year : "2020",
        km : "6,000 km"
    },






    
]  
    
        
    firebase.database().ref('/').child("cars").set(obj)
        
    }
    


    render(){
      
        
   
    
        return(
            
            <div>
                <Appname />
                <Category />
                <Link to="/" style={{color:"black"}} >Home</Link>
                <Image />
        
             
        <div className="card" style={{width: '18rem'}}>
        <img src={this.state1.src} className="card-img-top" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state1.price}-{this.state1.km}</p>
        <h6>{this.state1.brand} {this.state1.model} {this.state1.year}</h6>
        </div>
      </div>
     
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state2.src} className="card-img-top" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state2.price}-{this.state2.km}</p>
        <h6>{this.state2.brand} {this.state2.model} {this.state2.year}</h6>
        </div>
      </div>
     
   
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state3.src} className="card-img-top" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state3.price}-{this.state3.km}</p>
        <h6>{this.state3.brand} {this.state3.model} {this.state3.year}</h6>
        </div>
      </div>

      <div className="card" style={{width: '18rem'}}>
        <img src={this.state4.src} className="card-img-top" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state4.price}-{this.state4.km}</p>
        <h6>{this.state4.brand} {this.state4.model} {this.state4.year}</h6>
        </div>
      </div>
     
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state5.src} className="card-img-top" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state5.price}-{this.state5.km}</p>
        <h6>{this.state5.brand} {this.state5.model} {this.state5.year}</h6>
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
        <img src={this.state6.src} className="card-img-top" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state6.price}-{this.state6.km}</p>
        <h6>{this.state6.brand} {this.state6.model} {this.state6.year}</h6>
        </div>
      </div>
     
   
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state7.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state7.price}-{this.state7.km}</p>
        <h6>{this.state7.brand} {this.state7.model} {this.state7.year}</h6>
        </div>
      </div>
     

      <div className="card" style={{width: '18rem'}}>
        <img src={this.state8.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state8.price}-{this.state8.km}</p>
        <h6>{this.state8.brand} {this.state8.model} {this.state8.year}</h6>
        </div>
      </div>

      
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state9.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state9.price}-{this.state9.km}</p>
        <h6>{this.state9.brand} {this.state9.model} {this.state9.year}</h6>
        </div>
      </div>
     
     
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state10.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state10.price}-{this.state10.km}</p>
        <h6>{this.state10.brand} {this.state10.model} {this.state10.year}</h6>
        </div>
      </div>
     
       
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state11.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state11.price}-{this.state11.km}</p>
        <h6>{this.state11.brand} {this.state11.model} {this.state11.year}</h6>
        </div>
      </div>
     

   

     
   
      <Middle />
      <Footer />
   



            </div>

             

        )
    }
   
}
const mapStateToProps  = (state) => ({
    data : state.data
})

const mapDispatchToProps = (dispatch) => ({
 //   set_data : () => dispatch (set_data()),
 //   firebase_data : () => dispatch(firebase_data()),

} 
)


   export default 
       connect(mapStateToProps,mapDispatchToProps)(Cars);
   
   