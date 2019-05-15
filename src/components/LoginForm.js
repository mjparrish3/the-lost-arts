import React, { Component } from 'react';


class LoginForm extends Component {
    state = {
        username: '',
        password: ''

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

    userSubmit = e => {
        e.preventDefault()
        console.log('click')
        this.props.toHomePage(this.state.username, this.state.password)
        this.setState({
            username: '',
            password: ''
        })
    }

    render() { 
        return (
            <form className="form-container"> 
                <div className="form-group">
                    <label>Username</label>
                    <input  
                        className="form-control" 
                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"
                        value={this.state.username}
                        onChange={(e) => this.usernameChange(e)}/>
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" id="exampleInputPassword1" 
                        placeholder="Password"
                        value={this.state.password}
                        onChange={(e) => this.passwordChange(e)}/>
                </div>
                <button onClick={(e) => this.userSubmit(e)} type="submit" className="btn btn-primary">Login</button>
            </form>
        );
    }
}
 
export default LoginForm;
