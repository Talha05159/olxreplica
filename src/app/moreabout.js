import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './moreabout.css'

class Moreabout extends React.Component {
  constructor(props){
    super(props);
    this.state14 = {
      price : "RS 80,000",
      item : "75 Inches samsung TV",
      src : "https://apollo-singapore.akamaized.net/v1/files/hxf0pjl0c6g91-PK/image;s=300x600;q=60"
    }

    this.state15 = {
      price : "RS 23,000",
      item : "Samsnung 43 inch TV",
      src : "https://apollo-singapore.akamaized.net/v1/files/t3d4a041hfmr2-PK/image;s=300x600;q=60"
    }

    this.state16 = {
      price : "RS 98,000", 
      item : "Advertising smart LED",
      src : "https://apollo-singapore.akamaized.net/v1/files/jji5yq7scc16-PK/image;s=300x600;q=60" 
    }

    this.state17 = {
      price : "RS 14,700",
      item : "Wamma  32 simple LED TV",
      src : "https://apollo-singapore.akamaized.net/v1/files/56k2grls2rbk1-PK/image;s=300x600;q=60"
    }

  }
    render(){
        return(
            <div className="moreabout">
                <h4 className="mainheading">More About TV, Audio, Video</h4>
                <br />
                <div className="card1" style={{width: '18rem'}}>
        <img src={this.state14.src} className="card-img-top" alt="..." />
        <div className="card-body">
        <p className="card-text">{this.state14.price}</p>
        <h6 className="itemspec">{this.state14.item}</h6>
        </div>
      </div>
    

            

    <div className="card1" style={{width: '18rem'}}>
<img src={this.state15.src} className="card-img-top" alt="..." />
<div className="card-body">
        <p className="card-text">{this.state15.price}</p>
        <h6 className="itemspec">{this.state15.item}</h6>
</div>
</div>

 

<div className="card1" style={{width: '18rem'}}>
<img src={this.state16.src} className="card-img-top" alt="..." />
<div className="card-body">
        <p className="card-text">{this.state16.price}</p>
        <h6 className="itemspec">{this.state16.item}</h6>
</div>
</div>



<div className="card1" style={{width: '18rem'}}>
<img src={this.state17.src} className="card-img-top4" alt="..." />
<div className="card-body">
        <p className="card-text">{this.state17.price}</p>
        <h6 className="itemspec">{this.state17.item}</h6>
</div>
</div>

    </div>
        )  
        }
    }


export default Moreabout;
 