import {StackNavigator} from 'react-navigation';
import {Dimensions} from 'react-native';
import LoginScreen from '../pages/Login';
import SignUpScreen from '../pages/SignUp';
import DrawerStack from '../stacks/drawerStack';
const {width,height} = Dimensions.get('window');

export const fromToptoBottom = (index,position) => {
    const inputRange = [0,index,index+0.80,index+1];
    const opacity = position.interpolate({
        inputRange,
        outputRange:[1,1,1,1]
    });
    const translateY = position.interpolate({
        inputRange,
        outputRange: [height,0,0,0]
    });

    return {
        opacity,
        transform:[
            {translateY}
        ]
    }
}

const transitionConfig = () => {
    return {
        screenInterpolator: (sceneProps) => {
            const {position, scene} = sceneProps;
            const {index, route} = scene;
            const params = route.params || {};
            const transition = params.transition || 'default';

            return {
                //list of transitions
                default: null,
                fromToptoBottom: fromToptoBottom(index,position)
            }[transition]
        }
    }
}

let scenes = {
    Login:{screen:LoginScreen,navigationOptions:{
        header:null
    }},
    SignUp:{screen:SignUpScreen,navigationOptions:{
        header:null
    }},
    Home:{screen:DrawerStack,navigationOptions:{
        header:null}
    }
}

const RootNavigator = StackNavigator(scenes,{
    transitionConfig:transitionConfig
})

export default RootNavigator;