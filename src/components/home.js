import React from 'react';
import Appname from '../app/header';
import Category from '../app/category';
import Banner from '../app/banner';
import Ad from '../app/adimage';
import Moreabout from '../app/moreabout';
import Freshrecom from '../app/freshrecom';
import {connect} from 'react-redux';
import Middle from '../app/middle';
import Footer from '../app/footer';
import {set_data} from '../store/action'


class Home extends React.Component{
render(){
    return(
        <div>
       <Appname /> 
      <Category  />
      <Banner />
      <Ad />
      <br />
      <Moreabout />
      <br />
      <Freshrecom />
       <br />
       <br />
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
 set_data : () => dispatch (set_data())
})

export default connect(mapStateToProps, mapDispatchToProps )(Home);