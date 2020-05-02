import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  WorkingWithTouchableComponent from './workingWithTouchableComponent/App';

export default function App() {
  return (
    <View style={styles.container}>
      <WorkingWithTouchableComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
