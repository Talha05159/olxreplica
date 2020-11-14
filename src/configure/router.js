import  React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from '../components/home';
import Mobilephones from '../components/mobilephones'
import Cars from '../components/cars'
import Motorcycles from '../components/motorcycles'
import Houses from '../components/houses'
import  TV from '../components/tv-video'
import  Tablets from '../components/tablets'
import  Lands from '../components/lands'
import Facebook from '../app/facebook'
   
   
class AppRouter extends React.Component {
    render(){
        return (
     <Router>
         <Switch >
         <Route exact path="/" component={Home}/>
         <Route path="/mobilephones" component={Mobilephones} />
         <Route path="/cars" component={Cars} />
         <Route path="/motorcycles" component={Motorcycles} />
         <Route path="/houses" component={Houses} />
         <Route path="/tv-video" component={TV}  />
         <Route path="/tablets" component={Tablets}  />
         <Route path="/lands" component={Lands}  />
         <Route  path="/facebook" component={Facebook} />
       


    

    
         </Switch>
     </Router>
        )
    }
}

export default AppRouter;