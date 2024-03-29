import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../actions/authActions';
import classnames from 'classnames';
import TextFieldGroup from '../common/TextFieldGroup';



class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard')
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/dashboard')
        }

        if(nextProps.errors){
            const { errors } = nextProps;
            this.setState({errors})
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e){
        let { email, password } = this.state;
        e.preventDefault();
        const userData = {
            email,
            password
        }

        this.props.loginUser(userData)
    }

    
    render(){
        const { errors } = this.state;
        return(
        <div className="login">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Log In</h1>
                  <p className="lead text-center">Sign in to your DevConnector account</p>
                  <form onSubmit={this.onSubmit}>

                    <TextFieldGroup
                        type='email'
                        placeholder="Email Address"
                        name="email"
                        onChange={this.onChange}
                    />

                    <TextFieldGroup 
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={this.onChange}
                    />
                    
                    <input 
                        type="submit" 
                        className="btn btn-info btn-block mt-4" 
                    />
                  </form>
                </div>
              </div>
            </div>
        </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        errors: state.errors
    }
}

export default connect(mapStateToProps, { loginUser })(Login)