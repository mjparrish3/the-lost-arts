import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class NewPost extends Component {
    state = {
        description: '',
        price: '',
        title: '',
        image: '',
        redirect: false
    }

    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps) {
        if (nextProps.post != null) {
            this.setState({
                description: nextProps.post.description,
                price: nextProps.post.price,
                title: nextProps.post.title,
                image: nextProps.post.image
            })
        }
    }

    componentDidMount() {
        if (this.props.post != null) {
            console.log(this.props)
            this.setState({
                description: this.props.post.description,
                price: this.props.post.price,
                title: this.props.post.title,
                image: this.props.post.image
            })
        }
    }

    titleChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    priceChange = e => {
        this.setState({
            price: e.target.value
        })
    }

    descriptionChange = e => {
        this.setState({
            description: e.target.value
        })
    }

    imageChange = e => {
        let files = e.target.files;
        let reader = new FileReader();
        if (files.lenght === 0) {
            return
        }
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            this.setState({
                image: e.target.result
            })
        }
    }

    submitNewPost = e => {
        e.preventDefault()
        this.props.usersPost(this.state)
        this.setState({
            description: '',
            price: '',
            title: '',
            image: '',
            redirect: true
        })
        console.log('redirect')
        // this.props.history.push('/HomePage')
    }


    render() {
        if (this.state.redirect === true) {
            if (this.props.entryPoint === 's') {
                return <Redirect to='/FreshStart' />
            } else {
                return <Redirect to='/HomePage' />
            }
        }

        return (
            <form className="new-post">
                <div className="form-row">
                    <div className="col-7">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={(e) => this.titleChange(e)} />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Price"
                            value={this.state.price}
                            onChange={(e) => this.priceChange(e)} />
                    </div>
                </div>
                <div className="custom-file form-row">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Description"
                            value={this.state.description}
                            onChange={(e) => this.descriptionChange(e)} />
                    </div>
                    <div className="col">
                        <input
                            type="file"
                            className="custom-file-input"
                            id="customFile"
                            accept='.jpeg'
                            ref='fileUpload'
                            onChange={(e) => this.imageChange(e)} />
                        <label
                            className="custom-file-label">
                            Choose file
                        </label>
                    </div>
                </div>
                <div className="image-container">

                </div>
                <button
                    className="btn btn-primary"
                    onClick={(e) => this.submitNewPost(e)}>
                    Submit
                </button>
            </form>
        );
    }
}

export default NewPost;