import  React,{useState} from 'react';
import  {View,StyleSheet, FlatList,Text} from 'react-native';

const WorkingWithFlatList = () => {
    const [people, setPeople] =  useState([
        {name: 'sholtlaa', id:1},
        {name: 'Kultla', id:2},
        {name: 'shola', id:3},
        {name: 'Ola', id:4},
        {name: 'Mike', id:5},
        {name: 'Mike Johson', id:6},
        {name: 'Mike', id:7},
    ])
    return (
        <View style={styles.container}>
            <FlatList 
                numColumns = {2}
                keyExtractor = {(item) => item.id}
                data={people}
                renderItem = {({item}) => (
                    <Text style={styles.item}>{item.name}</Text>
                )}
            />

        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center'
    },
    item:{
        marginTop:24,
        padding:30,
        backgroundColor:'pink',
        fontSize:24,
        marginHorizontal:10,
        marginTop:10
    }

});
export default WorkingWithFlatList;