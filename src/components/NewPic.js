import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewPic extends Component {
    state = {
        image: ''
    }

    imageChange = e => {
        let files = e.target.files;
        let reader = new FileReader();
        if(files.lenght === 0) {
            return
        }
        reader.readAsDataURL(files[0]);
        reader.onload=(e)=> {
            this.setState({
                image: e.target.result
            })
        }
    }

    submitNewPic = e => {
        e.preventDefault()
        this.props.usersPic(this.state)
        this.setState({
            description: '',
            price: '',
            title: '',
            image: ''
        })
        this.props.history.push('/FreshStart')
    }

    render() { 
        return (
            <form className="new-post">
                <div className="form-row">
                    <div className="col">
                        <input 
                            type="file" 
                            className="custom-file-input" 
                            id="customFile"
                            accept='.jpeg' 
                            ref='fileUpload'
                            onChange={(e) => this.imageChange(e)}/>
                        <label 
                            className="custom-file-label">
                            Choose file
                        </label>
                    </div>
                </div>
                <div className="image-container">
                    
                </div>
                <Link 
                    className="btn btn-primary"
                    to='/FreshStart'
                    onClick={(e) => this.submitNewPic(e)}>
                    Submit
                </Link>
            </form>
        );
    }
}
 
export default NewPic;