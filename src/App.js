import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import HomePage from './components/HomePage';
import Header from './components/Header';
import NewPost from './components/NewPost';
import FreshStart from './components/FreshStart';
import NewPic from './components/NewPic';
import GroupPost from './components/GroupPost';
import { Redirect } from 'react-router-dom';

class App extends Component {

  state ={
    users: [
      {
        username: 'mjp3',
        password: 'geturight'
      }
    ],
    newUser: [],
    redirect: false,
    startDirect: false,
    post: [
      {
        description: 'Found somewhere special',
        price: '$23,000',
        title: 'The Stone Indian',
        image: 'https://i.pinimg.com/originals/2a/aa/1e/2aaa1efa537e9f253e4ddf1f4ebb019f.jpg'
      },
      {
        description: 'The cleanest feet that I have ever seen!!!!!',
        price: '$45,000',
        title: 'The Egyptian Feet',
        image: 'https://www.miamiartguide.com/wp-content/uploads/2008/04/lowemuseum04_14_08.jpg'
      }
    ],
    firstPost: [],
    editPost: null,
    editIndex: null,
    starterImage: {
      image: 'https://www.heymind.org.uk/wp-content/uploads/2015/12/anonymous.png'
    },
    entryPoint: null
  }

  toHomePage = (username, password) => {
    console.log(username, password)
    if(this.state.users.some(element => {
      return element.username === username && element.password === password
    }))
      this.setState({
        redirect: true,
        entryPoint: 'Login'
      })
  }

  
  signUpInfo = (user) => {
    this.setState({
      users: [ ...this.state.users, user],
      startDirect: true,
      newUser: [user],
      entryPoint: "s"
    })
  }

  usersPost = thePost => {
    let newPost;

    if(this.state.editIndex != null) {
      newPost=[...this.state.post]
      newPost.splice(this.state.editIndex, 1, thePost)
    } else if(this.state.entryPoint === 's') {
      newPost = [thePost]
    }else {
      newPost = [...this.state.post, thePost]
    }
    this.setState({
        post: newPost,
        firstPost: newPost,
        editPost: null,
        editIndex: null
    })
}

removePost = index => {
  let newPost = [...this.state.post]
  newPost.splice(index, 1)

  this.setState({
    post: newPost,
    firstPost: newPost
  })
}

updatePost = (index, post) => {
  this.setState({
    editPost: post,
    editIndex: index
  })
}

editPic = (pic) => {
  this.setState({
    starterImage: pic
  })
}

changeRedirect = () =>{
  this.setState({
    redirect: false,
    startDirect: false
  })
}


  render() {
    let editPost= this.state.editPost
    console.log(this.state.firstPost);
    return (
      <div className="container">
        <Switch />
          <Header changeRedirect={this.changeRedirect}/>
          <div className="row">
            <div className="col-md-6">
            {this.state.redirect === true && <Redirect to='/HomePage' />}
              
              <Route exact path='/' render={(renderProps) => <LoginForm 
              toHomePage={this.toHomePage} {...renderProps}/> } />
            </div>
            <div className="col-md-6">
            {this.state.startDirect === true && <Redirect to='/FreshStart' />}
              <Route exact path='/' render={(renderProps) => <SignUpForm 
              signUpInfo= {this.signUpInfo} {...renderProps}/> } />
            </div>
          </div>
          <Route path='/HomePage' render={(renderProps) => <HomePage 
            username={this.state.users[0].username} 
            thePost={this.state.post}
            update={this.updatePost} 
            delete={this.removePost} {...renderProps}/>} />
          <Route path='/NewPost' render={(renderProps) => <NewPost 
            usersPost={this.usersPost}
            post={editPost}
            entryPoint={this.state.entryPoint} {...renderProps}/>} />
          <Route path='/FreshStart' render={(renderProps) => <FreshStart 
            username={this.state.newUser[0].username}
            update={this.updatePost} 
            delete={this.removePost}
            firstPost={this.state.firstPost}
            starterImage={this.state.starterImage.image} {...renderProps}/>} />
          <Route exact path='/NewPic' render={(renderProps) => <NewPic
            usersPic={this.editPic} {...renderProps}/> } />
          <Route exact path='/GroupPost' render={(renderProps) => <GroupPost {...renderProps}/> } />
        <Switch />
      </div>
    );
  }
}

export default App;
