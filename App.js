import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoApp  from './todoapp/App';
export default function App() {
  return (
    <View style={styles.container}>
     <TodoApp />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
