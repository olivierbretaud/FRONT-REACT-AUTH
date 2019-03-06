import React, { Component } from 'react';
import {Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './history';
import jwt_decode from 'jwt-decode';
import setAuthToken from './actions/setAuthToken';
import {setCurrentUser , logoutUser} from './actions/authentification';

import store from './store';

import Explorer from './Components/Explorer';
import Register from './Components/Register';
import Login from './Components/Login';
import './styles/css/App.css';

if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decode = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decode));

    const currentTime = Date.now() /1000;
    if(decode.exp < currentTime) {
        store.dispatch(logoutUser());
        history.push('/login')
    }
}

class App extends Component {

    componentWillMount() {
        if(!this.props.isAuthenticated) {
            history.push('/login')
        }
    }

    render() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <div className="app-container">
                    <Switch>
                        <Route exact path="/" component={Explorer} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
