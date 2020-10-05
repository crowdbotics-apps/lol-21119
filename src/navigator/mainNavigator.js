import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps127891Navigator from '../features/Maps127891/navigator';
import Add-Item127890Navigator from '../features/Add-Item127890/navigator';
import Maps127886Navigator from '../features/Maps127886/navigator';
import UserProfile127882Navigator from '../features/UserProfile127882/navigator';
import Maps127801Navigator from '../features/Maps127801/navigator';
import Add-Item127800Navigator from '../features/Add-Item127800/navigator';
import Maps127796Navigator from '../features/Maps127796/navigator';
import UserProfile127792Navigator from '../features/UserProfile127792/navigator';
import BlankScreen0127769Navigator from '../features/BlankScreen0127769/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps127891: { screen: Maps127891Navigator },
Add-Item127890: { screen: Add-Item127890Navigator },
Maps127886: { screen: Maps127886Navigator },
UserProfile127882: { screen: UserProfile127882Navigator },
Maps127801: { screen: Maps127801Navigator },
Add-Item127800: { screen: Add-Item127800Navigator },
Maps127796: { screen: Maps127796Navigator },
UserProfile127792: { screen: UserProfile127792Navigator },
BlankScreen0127769: { screen: BlankScreen0127769Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
