import React, { Component } from 'react';


class SignUpForm extends Component {
    state = {
        username: '',
        password: '',
        email: ''

    }

    usernameChange = e => {
        this.setState({
            username: e.target.value
        })
    }

    passwordChange = e => {
        this.setState({
            password: e.target.value
        })
    }

    emailChange = e => {
        this.setState({
            email: e.target.value
        })
    }

    signUpSubmit = e => {
        e.preventDefault()
        console.log('click')
        this.props.signUpInfo(this.state)
        this.setState({
            username: '',
            password: '',
            email: ''
        })
    }

    render() { 
        return (
            <form className="form-container"> 
                <div className="form-group">
                    <label>Username</label>
                    <input  
                        className="form-control" 
                        aria-describedby="emailHelp" placeholder="Username"
                        value={this.state.signUpName}
                        onChange={(e) => this.usernameChange(e)}/>
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input  
                        type="email"
                        className="form-control" 
                        aria-describedby="emailHelp" placeholder="Email Address"
                        value={this.state.email}
                        onChange={(e) => this.emailChange(e)}/>
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control"  
                        placeholder="Password"
                        value={this.state.signUpPassword}
                        onChange={(e) => this.passwordChange(e)}/>
                </div>
                <button onClick={(e) => this.signUpSubmit(e)} type="submit" className="btn btn-primary">Sign-up</button>
            </form>
        );
    }
}
 
export default SignUpForm;
