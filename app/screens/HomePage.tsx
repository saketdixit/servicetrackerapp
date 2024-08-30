import React from "react";

import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import type { DrawerScreenProps } from "@react-navigation/drawer";
import { DrawerParamList } from "../types";
import CircularIcon from "../CircularIcon";
import MyScreen from "../grids";
import MyBottomTab from "../BottomTabHome";
type HomeProps = DrawerScreenProps<DrawerParamList, 'Home' >;

export const HomePageScreen = ({ navigation , route }: HomeProps) => {
    return(
        <>
            <MyBottomTab />
        </>
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