import {View, Text, Image, ScrollView, TextInput, StyleSheet, Button, ImageBackground, SafeAreaView} from "react-native";
import { TabParamList } from "./types";
import Ionicons from '@expo/vector-icons/Ionicons'
import { HistoryTab } from "./screens/HistoryTab";
import { DashboardTab } from "./screens/DashboardTab";
import { CalendarTab } from "./screens/CalendarTab";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CircularIcon from "./CircularIcon";
import TabIcon from "./TabIcon";

const TabNavigator = createBottomTabNavigator();
const dashboard_active_icon = require("C:/Windows/System32/AwesomeProject/assets/images/dashboard_active.png");
const dashboard_inactive_icon = require("C:/Windows/System32/AwesomeProject/assets/images/dashboard_inactive.png");
const tasks_active_icon = require("C:/Windows/System32/AwesomeProject/assets/images/tasks_active.png");
const tasks_inactive_icon = require("C:/Windows/System32/AwesomeProject/assets/images/tasks_inactive.png");
const calendar_inactive_icon = require("C:/Windows/System32/AwesomeProject/assets/images/calendar_inactive.png");
const calendar_active_icon = require("C:/Windows/System32/AwesomeProject/assets/images/calendar_active.png");

export default function MyBottomTab() {
    return(
        <TabNavigator.Navigator initialRouteName="Dashboard"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName, opentab;
              if (route.name === 'History') {
                iconName = focused ? tasks_active_icon : tasks_inactive_icon;
              } else if (route.name === 'Dashboard') {
                iconName = focused ? dashboard_active_icon : dashboard_inactive_icon;
              } else if (route.name === 'Calendar') {
                iconName = focused ? calendar_active_icon : calendar_inactive_icon;
              }

              

              // You can return any component that you like here!
              //return <CircularIcon source={iconName} ver = {0}/>;
              return <TabIcon source = {iconName} ver = {1} />
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
            <TabNavigator.Screen name = "History" component={HistoryTab} />
            <TabNavigator.Screen name = "Dashboard" component={DashboardTab} />
            <TabNavigator.Screen name = "Calendar" component={CalendarTab} />
        </TabNavigator.Navigator>
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