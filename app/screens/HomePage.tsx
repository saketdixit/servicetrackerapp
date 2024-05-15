import React from "react";

import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import type { DrawerScreenProps } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../types";
import CircularIcon from "../CircularIcon";
import MyScreen from "../grids";
type Props = DrawerScreenProps<RootDrawerParamList, 'Home' >;

export const HomePageScreen = ({ navigation }: Props) => {
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