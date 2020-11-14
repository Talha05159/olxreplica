import React from 'react';
import './category.css';
import {  Link}  from 'react-router-dom';

class Category extends React.Component{
    
    
    render(){
        return (
            <div className="categories">
              <h4 className="itemnames">ALL CATEGORIES</h4> 
        
                
              <Link to="/mobilephones" className="linktext" >  Mobile Phones</Link>
              <Link to="/cars" className="linktext" >  Cars</Link>
              <Link to="/motorcycles" className="linktext" >  MotorCycles </Link>
              <Link to="/houses" className="linktext" >  Houses </Link>
              <Link to="/tv-video" className="linktext" >  TV-Video-Audio </Link>  
              <Link to="/tablets" className="linktext" > Tablets  </Link>
              <Link to="/lands" className="linktext" > Lands&Plots  </Link>

            </div>
        )
    }
}

export default Category;