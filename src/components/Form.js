import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

class Form extends Component{

    render(){
        
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Email'
                placeholderTextColor='#000000'
                selectionColor="#000"
                keyboardType="email-address"
                onSubmitEditing={()=>this.password.focus()}/>
                <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor='#000000'
                selectionColor="#000"
                ref={(input) => this.password = input }/>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center'
    },
    inputBox:{
        width:300,
        backgroundColor:'rgba(255,255,255,0.5)',
        borderRadius: 25,
        paddingHorizontal:16,
        color:'#000000',
        marginVertical:10,
        fontSize:16
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

export default Form;