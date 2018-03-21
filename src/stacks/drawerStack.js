import {StackNavigator} from 'react-navigation';
import {Text,TouchableOpacity ,View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerScreen from '../stacks/drawerScreen';
import React from 'react';

const DrawerNavigation = StackNavigator({
    DrawerStack:{screen:DrawerScreen}
},{
    headerMode:'float',
    navigationOptions:({navigation})=>({
        headerStyle:{
            backgroundColor:'#4caf50',
            paddingLeft:10,
            paddingRight:10
        },
        title:'Home',
        headerTintColor:'white',
        headerLeft:<View>
            <TouchableOpacity  onPress={()=>{
                if(navigation.state.index === 0){
                    navigation.navigate('DrawerOpen');
                }else{
                    navigation.navigate('DrawerClose');
                }
            }}>
                <Icon name='ios-menu'size={30} color="white"/>
            </TouchableOpacity >
        </View>
    })
});

export default DrawerNavigation;