import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentification';
import { withRouter } from 'react-router-dom';

export class UserConnection extends Component {

    render() {
        return (
            <div className="user-container">
                <span className="text-blue">{this.props.user.name}</span>
                <img src={process.env.PUBLIC_URL + "assets/images/logout.png"} onClick={() => this.props.logout(this.props.history)}  className="logo" alt="logo"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ 
    user: state.auth.user
})

const mapDispatchToProps = {
    logout: logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserConnection));
