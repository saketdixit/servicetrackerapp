import {View, Text, Image, ScrollView, TextInput, StyleSheet, Button, ImageBackground, SafeAreaView} from "react-native";

import { TabParamList } from "../types";

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
type CalendarProps = BottomTabScreenProps<TabParamList, 'Calendar' >;

export const CalendarTab = ({ navigation , route}: CalendarProps) => {
    return(
      <View style = {styles.label}>
        <Text> Calendar </Text>
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