import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { registerUser } from '../actions/authentification';
import '../styles/css/Register.css';
import DisplayErrors from './DisplayErrors';

class Register extends Component {
    constructor( ) {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
            errors: {}
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
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.registerUser(user, this.props.history);
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

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/')
        }
    }

    render() {
        console.log(this.state.errors)
        const { errors } = this.state;
        return (
            <div className="container-register">
                <form className="form-register" onSubmit={this.handleSubmit}>
                    <h2 className="m-none text-blue">Créer votre compte</h2>
                        <input
                        type='text'
                        placeholder='Nom'
                        className={classnames('input-text', {
                            'is-invalid': errors.name
                        })} 
                        autoComplete="username"
                        name='name'
                        onChange={this.handleInputChange }
                        value={this.state.name}
                        />
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
                        <input
                        type='password'
                        autoComplete="new-password"
                        placeholder='Confirmer votre password'
                        className={classnames('input-text', {
                            'is-invalid': errors.password_confirm
                        })} 
                        name='password_confirm'
                        onChange={this.handleInputChange }
                        value={this.state.password_confirm}
                        />
                        <button className="btn-blue-rounded"type="submit">Enregistrer votre compte</button>
                        <div className="errors-container">
                            <DisplayErrors errors={this.state.errors} />
                        </div>
                </form>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser } ) (withRouter(Register));
