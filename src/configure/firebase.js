import  firebase from 'firebase/app'
import  'firebase/auth'
import  'firebase/database'


var firebaseConfig = {
    apiKey: "AIzaSyAiXyFZkkbchVn9GZl_t9wqFBsoYBXS2wM",
    authDomain: "replica-olx-website.firebaseapp.com",
    databaseURL: "https://replica-olx-website.firebaseio.com",
    projectId: "replica-olx-website",
    storageBucket: "replica-olx-website.appspot.com",
    messagingSenderId: "418744045183",
    appId: "1:418744045183:web:0de4a96e4a60ea972ab94a",
    measurementId: "G-Z1Z8SVM70Y"
  };

  // Initialize Firebase
  const fire =  (firebase.initializeApp(firebaseConfig));
  
  export default  fire;
  


  




