import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,TouchableOpacity
} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/FormSignUp';


export default class SignUp extends Component {

  render(){
    return(
      <View style={styles.container}>
        <Logo/>
        <Form/>
        <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Ya tienes cuenta? </Text>
            <TouchableOpacity><Text style={styles.signupButton}> Inicia Sesion.</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#4caf50',
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    signupTextCont:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    signupText:{
        color:'rgba(255,255,255,0.6)',
        fontSize:18
    },
    signupButton:{
        color:'#ffffff',
        fontSize:18,
        fontWeight:'300'
    }
  });