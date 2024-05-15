import 'react-native-gesture-handler';
import React, { useEffect, useState }  from "react";

import {View, Text, Image, ScrollView, TextInput, StyleSheet, Button, ImageBackground, SafeAreaView} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import MyDrawer from "./Drawer";
import CalendarButton from './CalendarButton';
import { NavigationContainer } from '@react-navigation/native';
import profile_data_json from "./profile_data.json"

import { ProfileData } from './types';

export default function App() {
  //Get Profile Data from state. is of type ProfileData
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setProfileData(profile_data_json);
      } catch (error) {
        console.error('Error fetching Profile data:', error);
      }
    };
    fetchData();
  }, []);
  return(
    <NavigationContainer independent={true}>
      <View style={styles.container}>
        <MyDrawer/>
        {//<CalendarButton />
        }
        
      </View>
    </NavigationContainer>  
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "row", 
      backgroundColor: '#fff',
      alignItems:"stretch"
  },
  text: {
      color : "#161924",
      fontSize: 20,
      fontWeight: "500"
  }

})
