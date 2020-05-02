import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import WorkingWithTextInput  from './workingwithtextinput/App';
//import ListViewScrollView  from './workingWithListViewAndScrollView/App'
import WorkingWithFlatList from './workingWithFlatList/App';
export default function App() {
  return (
    <View style={styles.container}>
      <WorkingWithFlatList />
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
