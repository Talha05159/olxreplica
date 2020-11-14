import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './freshrecom.css'

class Freshrecom extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      brand : "Honda",
      car : "Vezel"  ,
      color : "White",
      year : "2019",
      price : "RS 36,00000",
      src : "https://apollo-singapore.akamaized.net/v1/files/b46fr4kj2pwt1-PK/image;s=300x600;q=60"

    }
    this.state2 = {
      price : "RS 6,000",
      item : "Corner table set ",
      src : "data:image/jpeg;base64,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"
    }
    this.state3 = {
      price : "RS 15,00000",
      brand : "Honda",
      car : "Fit"  ,
      color : "Black Color",
      src : "https://apollo-singapore.akamaized.net/v1/files/wob34hyairbu3-PK/image;s=300x600;q=60"
    }
    this.state4 = {
      price : "RS 10,000",
      item : "Dining table set" ,
      src : "https://apollo-singapore.akamaized.net/v1/files/bqgy7vl6pu5c2-PK/image;s=300x600;q=60"
    }
this.state5 = {
  price : "RS 23,0000",
  src : "https://apollo-singapore.akamaized.net/v1/files/iscojq9b04fj-PK/image;s=300x600;q=60",
  item : "Designer Lehnga"
}

this.state6 = {
price : "RS 2,500",
src : "https://apollo-singapore.akamaized.net/v1/files/zvbm7ju5w4av1-PK/image;s=300x600;q=60"  ,
item : "Nadara Battery"
} 

this.state7 = {
  price : "7,600",
  mobile : "Moto turbo 2",
  ram  : "3 GB 32 GB",
  src :  "https://apollo-singapore.akamaized.net/v1/files/277a4tymbdtz-PK/image;s=300x600;q=60"
}

this.state8 = {
  price : "RS 13,500,000",
  item : "3 Bedroom flat ",
  src : "https://apollo-singapore.akamaized.net/v1/files/wm8kxvhndjjx-PK/image;s=300x600;q=60" 
}

this.state9 = {
  price : "RS 37,000",
  item : "55 Inch LED TV",
  src : "https://apollo-singapore.akamaized.net/v1/files/pbkfyt5wvvko-PK/image;s=300x600;q=60"
}

this.state10 = {
  price : "RS 300,000",
  item  : "RO Plant ",
  src : "https://apollo-singapore.akamaized.net/v1/files/ym9qe44qsy203-PK/image;s=300x600;q=60"
}

this.state11 = {
  price : "RS 49,999",
  item  : "Apple watch SE",
  src :  "https://apollo-singapore.akamaized.net/v1/files/ct0ru4h4ual23-PK/image;s=300x600;q=60"
}  

this.state12 = {
  price : "RS 65,000",
  item  : "Alloy rims 17 Inch",
  src : "https://apollo-singapore.akamaized.net/v1/files/jzouops9kslm2-PK/image;s=300x600;q=60" 
}

this.state13 = {
  src :"https://tpc.googlesyndication.com/simgad/3462751606020555992?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qkJPsaYVYPKtvQQ_hvO4cjnJur3fw"
}
  }
  
    render(){
      
        return(
            <div>
              <h5>Fresh recommendations</h5> 
        

              <div className="card" style={{width: '18rem'}}>
        <img src={this.state.src} className="card-img-top" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state.price}</p>
        <h6>{this.state.brand} {this.state.car} {this.state.color} {this.state.year}</h6>
        </div>
      </div>

      <div className="card" style={{width: '18rem'}}>
        <img src={this.state2.src} className="card-img-top" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state2.price}</p>
        <h6>{this.state2.item}</h6>
        </div>
      </div>

      <div className="card" style={{width: '18rem'}}>
        <img src={this.state3.src} className="card-img-top" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state3.price}</p>
        <h6>{this.state3.brand} {this.state3.car} {this.state3.color}</h6>
        </div>
      </div> 

      <div className="card" style={{width: '18rem'}}>
        <img src={this.state4.src} className="card-img-top4" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state4.price}</p>
        <h6>{this.state4.item}</h6>
        </div>
      </div> 

      <div className="card" style={{width: '18rem'}}>
        <img src={this.state5.src} className="card-img-top4" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state5.price}</p>
        <h6> {this.state5.item}</h6>
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
        <img src={this.state6.src} className="card-img-top4" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state6.price}</p>
        <h6>{this.state6.item}</h6>
        </div>
      </div>  

      <div className="card" style={{width: '18rem'}}>
        <img src={this.state7.src} className="card-img-top4" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state7.price}</p>
        <h6>{this.state7.mobile} {this.state7.ram}</h6>
        </div>
      </div>  
 
      <div className="card" style={{width: '18rem'}}>
        <img src={this.state8.src} className="card-img-top" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state8.price}</p>
        <h6>{this.state8.item}</h6>
        </div>
      </div>

      <div className="card" style={{width: '18rem'}}>
        <img src={this.state9.src} className="card-img-top-tv" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state9.price}</p>
        <h6>{this.state9.item}</h6>
        </div>
      </div> 

      <div className="card" style={{width: '18rem'}}>
        <img src={this.state10.src} className="card-img-top-ro" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state10.price}</p>
        <h6>{this.state10.item}</h6>
        </div>
      </div> 

      <div className="card" style={{width: '18rem'}}>
        <img src={this.state11.src} className="card-img-top-tv" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state11.price}</p>
        <h6>{this.state11.item}</h6>
        </div>
      </div> 

      <div className="card" style={{width: '18rem'}}>
        <img src={this.state12.src} className="card-img-top" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state12.price}</p>
        <h6>{this.state12.item}</h6>
        </div>
      </div> 

     
         <center>
           <button className="loadmore">Load More</button>
         </center>
  
   <br />

  <center>
    <img src={this.state13.src} />
    </center>  

            </div>
        )
    }
}

export default Freshrecom;