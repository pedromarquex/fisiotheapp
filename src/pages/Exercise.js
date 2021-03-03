import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { RectButton as Button } from 'react-native-gesture-handler';

function Exercise() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/hand.png')} />
      <Text style={styles.title}>Close and open hands</Text>
      <Button style={styles.button}>
        <Text style={styles.buttonText}>Done!</Text>
      </Button>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Series</Text>
        <Text style={styles.infoTitle}>Repetitions</Text>
        <Text style={styles.infoTitle}>Rest</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoContent}>3x</Text>
        <Text style={styles.infoContent}>10</Text>
        <Text style={styles.infoContent}>20 seg</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    marginBottom: 20,
  },
  title: {
    color: '#333',
    textAlign: 'center',
    fontSize: 30,
    width: 300,
    marginBottom: 30,
  },
  button: {
    width: 250,
    height: 50,
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5b3fff',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
  },
  infoContainer: {
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  infoTitle: {
    fontSize: 18,
    width: 100,
    textAlign: 'center',
    color: '#333',
  },
  infoContent: {
    width: 100,
    fontSize: 18,
    textAlign: 'center',
    color: '#5b3fff',
  },
});

export default Exercise;
