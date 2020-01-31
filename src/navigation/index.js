import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Splash from '../screens/Splash';
import Home from '../screens/Home';

const SwitchNavigator = createSwitchNavigator({
  Splash,
  Home
},
{
  headerLayoutPreset: 'center',
});

const AppNavigation = createAppContainer(SwitchNavigator)
export default AppNavigation;