import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';


//Check for token
if(localStorage.jwtToken){
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expirted token
  const currentTime = Date.now() / 3000;

  if(decoded.exp){
    
  }
}



class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
            <div className="App">
              <Navbar />
                  <Route path="/" exact component={Landing} />
                  <div className="container">
                      <Route path="/register" exact component={Register} />
                      <Route path="/login" exact component={Login} />
                  </div>
              <Footer />
            </div>
          </Router>
      </Provider>
    );
  }
}

export default App;
