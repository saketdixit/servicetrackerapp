import {View, Text, Image, ScrollView, TextInput, StyleSheet, Button, ImageBackground, SafeAreaView} from "react-native";
import CircularIcon from "../CircularIcon";
import MyScreen from "../grids";
import { TabParamList } from "../types";

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
type DashboardProps = BottomTabScreenProps<TabParamList, 'Dashboard' >;

export const DashboardTab = ({ navigation , route}: DashboardProps) => {
  const Addbtn = require("C:/Windows/System32/AwesomeProject/assets/images/Addbtn.png");
  const placeholder = require("C:/Windows/System32/AwesomeProject/assets/images/react-logo.png")
  return(
    <View style = {styles.label}>
      <View style = {styles.title}>
          <CircularIcon source={placeholder} ver = {1}/>
      </View>
      <View style= {styles.scrollscreen}>
          <MyScreen/>
      </View>
      <View style = {styles.addbuttonview}>
          <CircularIcon source={Addbtn} ver = {1}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column',
      color: "FFF"
  },
  text: {
      color : "#161924",
      fontSize: 20,
      fontWeight: "500"
  },
  title: {
      flex: 1,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      color: "101010"
  },
  addbuttonview: {
      flex: 1,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      color: "101010"
  },
  scrollscreen : {
      flex: 6
  }
  
})