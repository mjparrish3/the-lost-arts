import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Header extends Component { 
    state = {
        
    }

    onSignOut = () =>{
        this.props.changeRedirect();
    }
    // componentDidMount(){
        
    // }

    render () {
        console.log()
        return (
        <div className="row header-container">
            <h1><span className="small-text">The</span><span className="title">LostArts</span></h1>
            <div>
                <Link to='/' className="btn btn-primary"
                onClick={() => this.onSignOut()}>Sign Out</Link>
            </div>
        </div> 
        );
    }
}
 
export default Header;