import React,{useState} from 'react';
import {Text,View,StyleSheet,ScrollView} from 'react-native';

const ListViewScrollView  =() => {
    const [people, setPeople] =  useState([
        {name: 'sholtlaa', key:1},
        {name: 'Kultla', key:2},
        {name: 'shola', key:3},
        {name: 'Ola', key:4},
        {name: 'Mike', key:5},
        {name: 'Mike Johson', key:6},
        {name: 'Mike', key:7},
    ])
   
    return(
        <View style={styles.container}>
            <ScrollView>
                {people.map( item => (
                    <View key={item.key}>
                            <Text style={styles.item}>{item.name}</Text>
                    </View>
                 ) )}
           </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop:40,
        paddingHorizontal:20
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    item:{
        marginTop:24,
        padding:30,
        backgroundColor:'pink',
        fontSize:24,
    }

    
});

export default ListViewScrollView ;