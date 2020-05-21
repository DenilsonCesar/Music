import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SpleshScreen from '../pages/splash/index';
import Main from '../pages/main/index';

export default createAppContainer(
    createSwitchNavigator({
        SpleshScreen,
        Main,
    })
);