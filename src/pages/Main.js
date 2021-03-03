import React from 'react';
import { RectButton as Button } from 'react-native-gesture-handler';
import { Text, Image, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Main() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/person.png')} />
      <Text style={styles.greetings}>Hey, Lorena!</Text>
      <Text style={styles.title}>Let's start your treatment? :)</Text>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('Exercise')}>
        <Text style={styles.buttonText}>Start</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  greetings: {
    fontSize: 32,
    marginBottom: 20,
  },
  title: {
    color: '#333',
    textAlign: 'center',
    fontSize: 28,
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
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
  },
});

export default Main;
