import React,{Component} from 'react';
import {View,Text,FlatList,StyleSheet,TouchableHighlight,ImageBackground} from 'react-native';
import ListData from '../data/listData'

class FlatListItem extends Component{
    render(){
        return(
            <TouchableHighlight>
            <ImageBackground style={styles.backgroundImage}
                    source={{uri:this.props.item.image}}>
                    <View>
                        <Text style={styles.title}>{this.props.item.name}</Text>
                    </View>
            </ImageBackground>
        </TouchableHighlight>     
        )
    }
}

var styles = StyleSheet.create({
    backgroundImage:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'stretch',
        height:150,
        marginBottom:5,
        marginTop:5,
    },
    title:{
        fontSize:27,
        marginBottom:8,
        textAlign:'center',
        color:"#FFFFFF",
        backgroundColor:'rgba(52,52,52,0)'
    }
});

export default class Screen2 extends Component{
    render(){
        return(
            <View>
                <FlatList data={ListData}
                    renderItem={({item,index})=>{
                        return(
                            <FlatListItem item={item} index={index}>

                            </FlatListItem>);
                    }}>
                </FlatList>
            </View>
        )
    }
}