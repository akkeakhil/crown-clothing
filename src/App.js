import React from 'react';

import './App.css';
import { connect } from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepages/homepage.component';

import ShopPage from './pages/shop/shop.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { setCurrentUser } from './redux/user/user.action'

import Header from './components/header/header.component';
import { auth ,createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

 
  unsubscibeFromAuth = null;
  componentDidMount(){
    const { setCurrentUser } = this.props;
   
   this.unsubscibeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot=>{
         setCurrentUser({
         id: snapshot.id,
         ...snapshot.data()
      
       })
        });
      }
      setCurrentUser( userAuth);
    });
  }
  componentWillUnmount(){
    this.unsubscibeFromAuth();
  }
  render(){
    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shops' component={ShopPage}/>
      <Route
      exact
      path='/signin'
      render={() =>this.props.currentUser ? 
        (<Redirect to='/'/>
      ):(<SignInAndSignUpPage/>)
      }/>
      </Switch>
      </div>
    );
  }
 
}
const mapStateToProps = ({ user }) =>({
  currentUser: user.currentUser
});


const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps ,mapDispatchToProps)(App);