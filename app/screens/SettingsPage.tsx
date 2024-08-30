import React from "react";

import { View, Text, Button, ScrollView, StyleSheet } from 'react-native'
import type { DrawerScreenProps } from "@react-navigation/drawer";
import { DrawerParamList } from "../types";

type SettingsProps = DrawerScreenProps<DrawerParamList, 'Settings' >;

export const SettingsScreen = ({ navigation , route}: SettingsProps) => {
    return(
      <View style = {styles.label}>
        <Text> Settings </Text>
      </View>
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