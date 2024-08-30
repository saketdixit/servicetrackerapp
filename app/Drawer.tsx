import {View, Text, Image, ScrollView, TextInput, StyleSheet, Button, ImageBackground, SafeAreaView} from "react-native";
//import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerParamList } from "./types";
import { HomePageScreen } from "./screens/HomePage";
import { ProfileScreen } from "./screens/ProfilePage";
import { SettingsScreen } from "./screens/SettingsPage";
import { LogoutScreen } from "./screens/LoginPage";
import { CalendarScreen } from "./screens/CalendarPage";

const DrawerN = createDrawerNavigator<DrawerParamList>();

export default function MyDrawer()  {
  return (
  <DrawerN.Navigator initialRouteName="Home">
    <DrawerN.Screen name="Home" component={HomePageScreen} />
    <DrawerN.Screen name="Profile" component={ProfileScreen} />
    <DrawerN.Screen name="Settings" component={SettingsScreen} />
    <DrawerN.Screen name="Logout" component={LogoutScreen} />
  </DrawerN.Navigator>
    //<DrawerN.Screen name="Calendar" component={CalendarScreen}/>
  );
}


const styles = StyleSheet.create({
    label: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color : "#161924",
        fontSize: 20,
        fontWeight: "500"
    }

})