import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {
    return(
        <View style= {styles.item}>
            <View style={styles.itemleft}>
                <View style={styles.square}></View>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <View style={styles.cicular}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    item:{
        backgroundColor: '#FFF',
        padding:15,
        borderRadius:10,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    itemleft:{
        flexDirection: 'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#55BCF6',
        opacity:0.4,
        borderRadius:5,
        marginRight:15
    },
    text:{
        maxWidth:'80%',
    },
    cicular:{
        width:12,
        height:12,
        borderColor:'#55BCF6',
        borderRadius:100,
        borderWidth:2
    },
})
export default Task;