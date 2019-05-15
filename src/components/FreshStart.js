import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class FreshStart extends Component {
    state = {
        image: '',
    }

    
    
    
    

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="side-panel">
                            <div className="img-container">
                                <img src={this.props.starterImage} alt=""/>
                            </div>
                            <Link className="btn" to="/NewPic">
                                Edit Pic
                            </Link> 
                            <h2>Hello {this.props.username}</h2>
                        </div>   
                    </div>
                    <div className="col-md-9">
                        <h1>Let's make your first post...</h1>
                        <Link 
                            className="btn btn-primary"
                            to='/NewPost'>
                            New Post
                        </Link>
                        <table className="table post-container">
                            <tbody>
                            {this.props.firstPost.map((p, i) =>
                                <tr key={i} className="row">
                                    <th>
                                        <div className='col-md'>
                                            <h4>{p.title}</h4>
                                            <p className='price'>{p.price}</p>
                                        </div>
                                    </th>
                                    <td>
                                        <div className='col-md'>
                                            <div className="artifact-container">
                                                <img src={p.image} alt=""/>
                                            </div>
                                            <div>
                                                <p>{p.description}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="col-md">
                                            <Link className="btn btn-info btn-sm" to="/NewPost" onClick={() => this.props.update(i, p)}>u</Link>
                                            <button className="btn btn-danger btn-sm" onClick={() => this.props.delete(i)}>x</button>
                                        </div>
                                    
                                    </td>
                                </tr> 
                                )}
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        );
    }
}
 
export default FreshStart;