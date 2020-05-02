import React from 'react';
import { StyleSheet,Text,TouchableOpacity } from 'react-native';

const TodoItem = ({todo,pressHandlerFunc}) => {
    return(
        <TouchableOpacity onPress={()=>pressHandlerFunc(todo.key)}>
            <Text style={styles.item}>{todo.text}</Text>
        </TouchableOpacity>
            
       
    )
}
const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }

});
export default TodoItem;