import React,{useState} from 'react';
import {StyleSheet, View, FlatList,Text} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodos from './components/addTodos';
import AddTodo from './components/addTodos';

const TodoApp = () => {
    const [todos, setTodos] = useState([
        {text:'buy coffee',key:'1'},
        {text:'buy coffee',key:'2'},
        {text:'buy coffee',key:'3'}
    ])
    const pressHandler = (key) => {
        setTodos((prevTodos)=>{
          return  prevTodos.filter((todo) => todo.key !== key )
        })
    }
    const submitHandler = (text) =>{
        setTodos((prevTodos) =>{
            return [
                {text:text,key:Math.random().toString()},
                ...prevTodos]
        })

    } 
    return(
        <View style={styles.container}>
            {/*Header*/}
            <Header />
            <View style={styles.content}>
                {/*to do form */}
                <AddTodo
                    submitHandler={submitHandler} />
                <View style={styles.list}>
                    <FlatList
                        data = {todos}
                        renderItem = { ({item}) =>(
                            <TodoItem todo={item} 
                                pressHandlerFunc={pressHandler} />
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