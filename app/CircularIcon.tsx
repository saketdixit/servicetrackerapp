import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface ImageSource {
  uri?: string; // For local images

  // Add other properties for different image sources (e.g., base64) if needed
}

const CircularIcon: React.FC<{ source: ImageSource, ver: number }> = ({ source, ver}) => {
  const styles = StyleSheet.create({
    container: {
      width: 70, // Adjust width and height as needed
      height: 70,
      borderRadius: 70 / 2, // Set half of width/height for circle
      backgroundColor: '#ccc', // Optional background color
      overflow: 'hidden', // Clip content within the circle
    },
    image: {
      width: '100%', // Fill the container
      height: '100%', // Fill the container
      resizeMode: 'cover', // Adjust resize mode as needed (cover, contain, etc.)
    },
    gridIcon: {
        width: 100, // Set desired width for grid icons
        height: 100, // Set desired height for grid icons
        borderRadius: 100 / 2, // Maintain half of width/height for circle
        backgroundColor: '#ccc', // Optional background color
        overflow: 'hidden', // Clip content within the circle
      }
  });

  if(ver == 1)
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
  else
  return (
  <View style={styles.gridIcon}>
    <Image source={source} style={styles.image} />
  </View>
    );
};

export default CircularIcon;