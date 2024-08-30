import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface ImageSource {
  uri?: string; // For local images
  // Add other properties for different image sources (e.g., base64) if needed
}

const TabIcon: React.FC<{ source: ImageSource, ver: number }> = ({ source, ver}) => {
  const styles = StyleSheet.create({
    tabBtn: {
      width: 35, // Adjust width and height as needed
      height: 35,
      //borderRadius: 70 / 2, // Set half of width/height for circle
      backgroundColor: '#ccc', // Optional background color
      //overflow: 'hidden', // Clip content within the circle
    },
    image: {
      width: '100%', // Fill the container
      height: '100%', // Fill the container
      resizeMode: 'cover', // Adjust resize mode as needed (cover, contain, etc.)
    },
    tabBtnAlt: {
      width: 35,
      height: 35,
      //borderRadius: 40 / 2,
      //backgroundColor: '#eee',
      //overflow: 'hidden'
    }
  });

  if(ver == 1) {
    return (
      <View style={styles.tabBtnAlt}>
        <Image source={source} style={styles.image} />
      </View>
    );
  }
  else {
    return (
      <View style={styles.tabBtn}>
        <Image source={source} style={styles.image} />
      </View>
    );
  }
};

export default TabIcon;