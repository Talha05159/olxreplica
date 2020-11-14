import React from 'react'
import { ReactReduxContext } from 'react-redux';
import { Link }  from 'react-router-dom';
import './footer.css';
import { AiFillFacebook} from "react-icons/ai";
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai'
  

class Footer extends React.Component {
    render(){
        return(
            <div className="footer">
  <table>
<tbody><tr>
    <th className="headings">Popular Categories</th>
    <th   className="headings">Trending Searches</th>
    <th   className="headings">About Us</th>
    <th   className="headings1">OLX</th>
    <th></th>
    
    
  </tr>
  <tr>
    <td><Link className="link" to="/cars" >Cars</Link></td>
    <td><Link className="link" to="/houses">Flats</Link></td>
    <td><Link className="link" to="/">About OLX group</Link></td>
    <td><Link className="link" to="/">Help</Link></td>

    <h4 className="followus">Follow Us</h4>
   <AiFillFacebook className="facebook"/><span> <AiFillTwitterCircle className="twitter"  /></span>
  
   <AiFillYoutube  className="youtube"/><span>  <AiFillInstagram  className="instagram"/></span>
  

  
  </tr>
  <tr>
    <td><Link className="link"  to="/mobilephones" >Mobile Phones</Link></td>
    <td><Link className="link" to="/lands">Lands</Link></td>
    <td><Link className="link" to="/">OLX Blog</Link></td>
    <td><Link className="link" to="/">SiteMap</Link></td>


   
    
  </tr>

  <tr>
    <td><Link className="link"  to="/tablets" >Tablets</Link></td>
    <td><Link className="link" to="/motorcylces">Bikes</Link></td>
    <td><Link className="link" to="/">Contact Us</Link></td>
    <td><Link className="link" to="/">Legal & Privacy Information</Link></td>
    <td><h6><img src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp" className="img" /></h6></td>
    <td><h6><img src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp" className="img" /></h6></td>
   
  </tr>
 
</tbody></table>

<div className="other" >
<p className="text">Other Countries</p>
<p className="text1">India -</p>
<p className="text1"  >South Africa -</p> 
<p className="text1" >Indonesia</p> 



</div>


   
                
            </div>
        )
    }
}

export default Footer;


