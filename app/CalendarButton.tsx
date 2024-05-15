import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootDrawerParamList } from "./types";
import { CalendarScreen } from './screens/CalendarPage';

type Props = DrawerScreenProps<RootDrawerParamList, 'Calendar' >;
/*
const CalendarButton: React.FC<Props> = ({ navigation }: Props) => {
  // Handle calendar screen navigation on button press
  const handleCalendarPress = () => {
    navigation.navigate('Calendar'); // Replace with your calendar screen name
  };
*/
  const CalendarButton = () => {
  return (
    <TouchableOpacity>
      <FontAwesome name="calendar" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default CalendarButton;