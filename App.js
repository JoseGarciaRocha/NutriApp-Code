import * as firebase from 'firebase';  
import React, { Component } from 'react';
import {StyleSheet, AppRegistry, StatusBar,View,Text,TouchableOpacity} from 'react-native';

// Components to display when the user is LoggedIn and LoggedOut 
// Screens for logged in/out - outside the scope of this tutorial
import LoggedIn from './src/pages/Home';
import LoggedOut from './src/config/route-navigator';

import Navigator from './src/config/route-navigator';
import Navigator1 from './src/pages/Home';

 /*var username = this.state.username;
 var password = this.state.password;*/

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
    /*render() {
    return (
      <Navigator/>
    );*/
  /**
   * When the App component mounts, we listen for any authentication
   * state changes in Firebase.
   * Once subscribed, the 'user' parameter will either be null 
   * (logged out) or an Object (logged in)
   */
  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
    });
  }
   /**
   * Don't forget to stop listening for authentication state changes
   * when the component unmounts.
   */
  componentWillUnmount() {
    this.authSubscription();
  }
  render() {
    // The application is initialising
    if (this.state.loading) return null;
    // The user is an Object, so they're logged in
    if (this.state.user) return (<LoggedIn />);
    // The user is null, so they're logged out
    return (<LoggedOut />);
  }
}

onLogin = () => {
  const { email, password } = this.state;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((email) => {
      // If you need to do anything with the user, do it here
      // The user will be logged in automatically by the 
      // `onAuthStateChanged` listener we set up in App.js earlier
    })
    .catch((error) => {
      const { code, message } = error;
      // For details of error codes, see the docs
      // The message contains the default Firebase string
      // representation of the error
    });
}
onRegister = () => {
  const { email, password } = this.state;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // If you need to do anything with the user, do it here
      // The user will be logged in automatically by the
      // `onAuthStateChanged` listener we set up in App.js earlier
    })
    .catch((error) => {
      const { code, message } = error;
      // For details of error codes, see the docs
      // The message contains the default Firebase string
      // representation of the error
    });
}

AppRegistry.registerComponent('App',()=>App);

// Initialize Firebase
const firebaseConfig = {  
  apiKey: "AIzaSyD0513TPX90hi4VDKt8UJPabzKUVkP_Ekw",
  authDomain: "fir-1c03e.firebaseapp.com",
  databaseURL: "https://fir-1c03e.firebaseio.com",
  /*projectId: "fir-1c03e",*/
  storageBucket: "fir-1c03e.appspot.com",
  /*messagingSenderId: "87531536764"*/
};
const firebaseApp = firebase.initializeApp(firebaseConfig);  
