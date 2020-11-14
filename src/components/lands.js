import React from 'react';
import  Appname from '../app/header';
import Category from '../app/category';
import Image from '../components/img'



class Lands extends React.Component {
    
    render(){
        return(
            <div>
         <Appname />
         <Category />
         <Image />

            </div>
        )
    }
}

export default Lands;


