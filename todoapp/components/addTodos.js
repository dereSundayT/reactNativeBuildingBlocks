import React,{useState} from 'react';
import { StyleSheet,TextInput,Button, View } from 'react-native';
const AddTodo = ({submitHandler}) => {
    const [newTodos, setNewTodos] = useState('')
    
    const changeHandler = (val) => {
        setNewTodos(val)
    }
    return(
        <View>
            <TextInput 
                style={styles.input}
                placeholder='New Todos'
                onChangeText={changeHandler}
                />
            <Button onPress={()=>submitHandler(newTodos)} title='Add Todo' color='coral' />
        </View>

    )
}
const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',

    }

});

export default AddTodo;