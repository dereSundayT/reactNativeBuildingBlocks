import React,{useState} from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';

const WorkingWithState =() => {
    const [text, setText] = useState('Example Text');
    const [person,setPerson] = useState({
        name: 'James',
        'age':20
    })
    const clickHandler = () => {
        setText('hello new text is here');
        setPerson({name:'Kola',age:40})
    }
   
    return(
        <View style={styles.container}>
            <Text>Here is a {text}</Text>
            <Text>My Name is: {person.name} and My Age is {person.age}</Text>
            <View style={styles.buttonContainer}>
                <Button title='Update Text' onPress={clickHandler}/>
            </View>
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
    buttonContainer:{
        marginTop:20,

    }
    
});

export default WorkingWithState;