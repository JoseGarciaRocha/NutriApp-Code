import React, { Component } from 'react';
import {StyleSheet, AppRegistry, StatusBar,View,Text,TouchableOpacity} from 'react-native';
import Form from '../components/Form';
import Logo from '../components/Logo';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <Form {...this.props}/>
        <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>No tienes cuenta? </Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp',{transition:'fromToptoBottom'})}>
                <Text style={styles.signupButton}> Registrate.</Text>
                </TouchableOpacity>
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
      fontWeight:'100'
  },
  button:{
    width:300,
    backgroundColor:'#087f23',
    borderRadius:25,
    marginVertical:10,
    paddingVertical:12
},
buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
}
});