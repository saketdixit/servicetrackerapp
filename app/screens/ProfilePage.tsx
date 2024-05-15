import React from "react";

import { View, Text, Button, ScrollView, StyleSheet } from 'react-native'
import type { DrawerScreenProps } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../types";

type Props = DrawerScreenProps<RootDrawerParamList, 'Profile' >;

export const ProfileScreen = ({ navigation }: Props) => {
    return(
      <View style = {styles.label}>
        <Text> Profile </Text>
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