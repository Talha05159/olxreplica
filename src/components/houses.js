import React from 'react';
import  Appname from '../app/header';
import Category from '../app/category';
import Image from '../components/img';


 

class Houses extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log("hello world")
        return(
            <div>
                <Appname />
                <Category />
                <Image />
               
            </div>
        )
    }
}

export default Houses;