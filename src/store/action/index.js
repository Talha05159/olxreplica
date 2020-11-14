import { AccordionActions } from '@material-ui/core';
import cars from '../../components/cars';
import firebase from '../../configure/firebase';





const set_data = () => {
   return (dispatch) => {
dispatch({type : "SETDATA",payload : {name : "talha"}})
   }
  }

  const auth  = () => {
    return (dispatch) => { 
  dispatch ({type  : "FACEBOOKLOGIN",payload : "talha"})
    var provider = new firebase.auth.FacebookAuthProvider();
   firebase.auth.signInWithPopup(provider).then(function(result) {
  
      var token = result.credential.accessToken;
      
      var user = result.user;
      console.log(user)
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
        
  }  
  }        
  





export {
    set_data,auth
}