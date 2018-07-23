import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e){
        let { name, email, password, password2 } = this.state;
        e.preventDefault();
        const newUser = {
            name,
            email,
            password,
            password2
        }

        axios.post('/api/users/register', newUser)
            .then(res => console.log(res.data))
            .catch(err => this.setState({errors: err.response.data}))
    }

    render(){
        console.log(this.state.errors);
        const { errors } = this.state;
        return(
        <div className="register">
            <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Sign Up</h1>
                <p className="lead text-center">Create your DevConnector account</p>
                <form noValidate onSubmit={this.onSubmit} action="create-profile.html">
                    <div className="form-group">
                    <input 
                        type="text" 
                        className={classnames('form-control form-control-lg', {
                            "is-invalid": errors.name
                        })} 
                        placeholder="Name" 
                        value={this.state.name}
                        name="name"
                        onChange={this.onChange}
                    />
                    {errors.name && (<div className="invalid-feedback" style={{textAlign: 'left'}}>{errors.name}</div>)}
                    

                    </div>
                    <div className="form-group">
                    <input 
                        type="email" 
                        className={classnames('form-control form-control-lg', {
                            "is-invalid": errors.email
                        })}
                        placeholder="Email Address" 
                        value={this.state.email}
                        name="email" 
                        onChange={this.onChange}
                    />
                    {errors.email && (<div style={{display: 'block', textAlign: 'left'}} className="invalid-feedback">{errors.email}</div>)}
                    <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                    </div>
                    <div className="form-group">
                    <input
                        className={classnames('form-control form-control-lg', {
                            "is-invalid": errors.password
                        })}
                        type="password" 
                        value={this.state.password}
                        className="form-control form-control-lg" 
                        placeholder="Password" 
                        name="password" 
                        onChange={this.onChange}
                    />
                    {errors.password && (<div style={{display: 'block', textAlign: 'left'}} className="invalid-feedback">{errors.password}</div>)}

                    </div>
                    <div className="form-group">
                    <input 
                        className={classnames('form-control form-control-lg', {
                            "is-invalid": errors.password2
                        })}
                        type="password" 
                        className="form-control form-control-lg" 
                        placeholder="Confirm Password" 
                        name="password2" 
                        value={this.state.password2}
                        onChange={this.onChange}
                    />
                    {errors.password2 && (<div style={{display: 'block', textAlign: 'left'}} className="invalid-feedback">{errors.password2}</div>)}

                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                </form>
                </div>
            </div>
            </div>
        </div>
        )
    }
}

export default Register;