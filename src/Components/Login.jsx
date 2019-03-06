import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentification';
import classnames from 'classnames';
import '../styles/css/Register.css';

import DisplayErrors from './DisplayErrors'

class Login extends Component {
    constructor( ) {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/')
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const user =  {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
        // console.log(user);
    }

    componentDidUpdate(prevProps) {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(this.props.errors && this.props.errors !== prevProps.errors ) {
            this.setState({
                errors: this.props.errors
            })
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container-register">
                <form className="form-register" onSubmit={this.handleSubmit}>
                        <h2 className="m-none text-blue">Login</h2>
                        <input
                        type='email'
                        placeholder='Email'
                        className={classnames('input-text', {
                            'is-invalid': errors.email
                        })} 
                        autoComplete="email"
                        name='email'
                        onChange={this.handleInputChange }
                        value={this.state.email}
                        />
                        <input
                        type='password'
                        autoComplete="new-password"
                        placeholder='mot de passe'
                        className={classnames('input-text', {
                            'is-invalid': errors.password
                        })} 
                        name='password'
                        onChange={this.handleInputChange }
                        value={this.state.password}
                        />
                        <div className='form-group'>
                            <button className="btn-blue-rounded" type="submit">Connectez-vous</button>
                            <button className="btn-blue-rounded" onClick={() => this.props.history.push('/register')}>Créer votre compte</button>
                        </div>
                        <div className="errors-container">
                            <DisplayErrors errors={this.state.errors} />
                        </div>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    errors: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser } )(Login);
