import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import TransactionHistory from './TransactionHistory'
import Users from './Users';
import{
BrowserRouter,
Switch,
Route,
Link

}
from 'react-router-dom';
class App extends React.Component{
    render(){
    return ( 
        <BrowserRouter>
        <div>

<Link to="Register"><h4>Register Here</h4></Link>

        </div>
   
    <div className="App">
        
        <Switch>
<Route path="/home">

    <Home/>
</Route>
<Route path="/Register">

    <Register/>
</Route>

<Route path="/history"exact={true}>
<TransactionHistory/>
    
</Route>


<Route path="/users">
<Users/>
    
</Route>

<Route path="/"exact={true}>
    <Login/>
    </Route>


        </Switch>
          
            </div>
        
      
        </BrowserRouter>
    );
}
}
export default App;