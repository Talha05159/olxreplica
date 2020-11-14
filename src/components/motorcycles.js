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

class Motorcycles extends React.Component {
    constructor(props) {
        super(props);
     let obj = [ this.state1 =   { 
      src : "https://apollo-singapore.akamaized.net/v1/files/a2oofsx237hn3-PK/image;s=300x600;q=60",
      price  : "RS 420,000",
      model : "Heavy bike",
      cc : "220 cc"


    },
    this.state2 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/zsn8xrlzwub72-PK/image;s=300x600;q=60",
      price  : "RS 67,000",
      model : "Honda 125",
      cc : "2007 model"

    },
    this.state3 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/xjdehan5d6oh2-PK/image;s=300x600;q=60",
      price  : "RS 33,000",
      model : "Honda CD 70",
      cc : "2009"

    },
    this.state4 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/gt1ecxndkmcv2-PK/image;s=300x600;q=60",
      price  : "RS 23,000",
      model : "United Star",
      cc : "70 cc"

    },
    this.state5 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/pog5cn10z0o03-PK/image;s=300x600;q=60",
        price  : "RS 42,000",
        model : "Honda 70",
        cc : "2018"
  
    },
    this.state6 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/sacwz4w5rlpf-PK/image;s=300x600;q=60",
        price  : "RS 330,000",
        model : "Suzuki Bike",
        cc : "300 cc"
    },
    this.state7 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/xjdehan5d6oh2-PK/image;s=300x600;q=60",
        price  : "RS 32,000",
        model : "Honda 70",
        cc : "2014"
    },
    this.state8 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/ajvdp8muwakx2-PK/image;s=300x600;q=60",
        price  : "RS 17,000",
        model : "Honda 70",
        cc : "2005"
    },
    this.state9 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/20tk3y6t9f7j2-PK/image;s=300x600;q=60",
        price  : "RS 125,000",
        model : "Hi Speed infinity",
        cc : "150 cc"
    },
    this.state10 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/ckv94afoexj63-PK/image;s=300x600;q=60",
        price  : "RS 234,000",
        model : "Heavy Bike Ninja",
        cc : "250  cc"
    },
    this.state11 = {
        src : "https://apollo-singapore.akamaized.net/v1/files/hrg83q7eoz941-PK/image;s=300x600;q=60",
        price  : "RS 117,000",
        model : "Hi Speed infinity",
        cc : "150 cc"
    },






    
]  
    
        
    firebase.database().ref('/').child("motorcycles").set(obj)
        
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
        <h6>{this.state1.model}{this.state1.cc}</h6>
        </div>
      </div>
     
                      
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state2.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state2.price}</p>
        <h6>{this.state2.model}{this.state2.cc}</h6>
        </div>
      </div>
     
                      
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state3.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state3.price}</p>
        <h6>{this.state3.model}{this.state3.cc}</h6>
        </div>
      </div>

                       
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state4.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state4.price}</p>
        <h6>{this.state4.model}{this.state4.cc}</h6>
        </div>
      </div>
     
                      
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state5.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state5.price}</p>
        <h6>{this.state5.model}{this.state5.cc}</h6>
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
        <h6>{this.state6.model}{this.state6.cc}</h6>
        </div>
      </div>

                       
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state7.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state7.price}</p>
        <h6>{this.state7.model}{this.state7.cc}</h6>
        </div>
      </div>
     
                      
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state8.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state8.price}</p>
        <h6>{this.state8.model}{this.state8.cc}</h6>
        </div>
      </div>

                       
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state9.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state9.price}</p>
        <h6>{this.state9.model}{this.state9.cc}</h6>
        </div>
      </div>


                       
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state10.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state10.price}</p>
        <h6>{this.state10.model}{this.state10.cc}</h6>
        </div>
      </div>

                       
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state11.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state11.price}</p>
        <h6>{this.state11.model}{this.state11.cc}</h6>
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
       connect(mapStateToProps,mapDispatchToProps)(Motorcycles);
   
   
     

            


   
   
