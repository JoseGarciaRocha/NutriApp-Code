import {DrawerNavigator} from 'react-navigation';

import Screen1 from '../pages/Screen1';
import Screen2 from '../pages/Screen2';
import Screen3 from '../pages/Screen3';

const DraweScreen = DrawerNavigator({
    Plan:{screen:Screen1},
    Recetas:{screen:Screen2},
    Citas:{screen:Screen3}
},{
    headerMode:'none'
});

export default DraweScreen;