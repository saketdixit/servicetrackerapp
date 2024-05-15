import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import CircularIcon from './CircularIcon'; // Replace with your path
import { Service } from './types';
import profileData from "./profile_data.json";
import { TouchableOpacity } from 'react-native-gesture-handler';

type GridItemProps = {
    item: { id: number; image: string; title: string }; // Define item data structure
    onPress?: () => void; // Optional onPress handler
}

const handlePress = () => {
    console.log("Hello")
}

const MyScreen = () => {
  const [data, setData] = useState<any>(); // Replace 'any' with a specific interface if known

  useEffect(() => {
    const fetchData = async () => {
      try {
        /*console.log("Here")
        const response = await fetch("C:/Windows/System32/AwesomeProject/app/profile_data.json"); // Replace with your JSON file path
        const data = await response.json();
        console.log("Passed")
        console.log(data.services[0])*/

        setData(profileData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderServiceItem = (service: Service) => (
    <View key={service.id} style={styles.serviceItem}>
        <TouchableOpacity onPress={handlePress}>
            <CircularIcon source={{ uri: service.image }} ver = {2}/>
            <Text style={styles.serviceName}>{service.name}</Text>
        </TouchableOpacity>
      
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Your top view component here */}
      {data && data.services ? (
        <ScrollView contentContainerStyle={styles.gridContainer}>
          {data.services.map(renderServiceItem)}
        </ScrollView>
      ) : (
        <Text>Loading data...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gridContainer: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Distribute items evenly
  },
  serviceItem: {
    width: '45%', // Adjust width for desired layout
    margin: 10,
    alignItems: 'center',
  },
  serviceName: {
    marginTop: 5,
    textAlign: 'center',
  }
});

export default MyScreen;