import React from 'react';
import './middle.css'

class Middle extends React.Component {
    render(){
        return (
            <div className="middle">
                <img src="https://statics.olx.com.pk/external/base/img/phone-app.webp" />
                <h2 className="tryolxx">TRY THE OLX APP <span>  <h6 className="buysell">Buy, sell and find just about anything using the app on your mobile.</h6>  </span> </h2>
            
               
              <h5 className="appimage" > <img  src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp" /></h5>
            <h5 className="appimage" >   <img  src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp" /> </h5>
                </div>
        )    
    }
}

export default Middle ;

