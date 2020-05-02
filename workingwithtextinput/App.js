import React,{useState} from 'react';
import {Text,View,StyleSheet,Button, TextInput} from 'react-native';

const WorkingWithTextInput =() => {
    const [name, setName] = useState('James');
    const [age,setAge] = useState('30');
   
  
   
    return(
        <View style={styles.container}>
            <Text>Enter Your Name</Text>
            <TextInput 
                multiline
                style={styles.input}
                placeholder='eg:John Doe'
                onChangeText={(val) => setName(val)} />
            <Text>Enter Your Age</Text>
            <TextInput
                keyboardType='numeric'
                style={styles.input}
                placeholder='eg:99'
                onChangeText={(val) => setAge(val)} />

            <Text>My Name is: {name} and My Age is {age}</Text>
          
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        borderWidth:1,
        borderColor:'#777',
        padding:8,
        margin:10,
        width:200
    }
    
});

export default WorkingWithTextInput ;