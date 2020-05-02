import React,{useState} from 'react';
import {StyleSheet, View, FlatList,Text} from 'react-native';
import Header from './components/Header'

const TodoApp = () => {
    const [todos, setTodos] = useState([
        {text:'buy coffee',key:'1'},
        {text:'buy coffee',key:'2'},
        {text:'buy coffee',key:'3'}
    ])
    return(
        <View style={styles.container}>
            {/*Header*/}
            <Header />
            <Text>Header</Text>
            <View style={styles.content}>
                {/*to do form */}
                <View style={styles.list}>
                    <FlatList
                        data = {todos}
                        renderItem = { ({item}) =>(
                            <Text>{item.text}</Text>
                        )}
                         />

                </View>
            </View>

        </View>

    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    content:{
        padding:40
    },
    list:{
        marginTop:20
    }


});
export default TodoApp;