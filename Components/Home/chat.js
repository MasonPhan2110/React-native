import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../Assets/Color/colors';

const ChatPage = () => {
    const renderChatItem = () =>{
        return(
            <View style={styles.itemWrapper}>
                <Text style={styles.textName}>Name</Text>
                <Text style={styles.lastMessage}>LastMessage</Text>
            </View>
        )
    }
    return(
        <ScrollView>
            <SafeAreaView>
                <View style={styles.headWrapper}>
                    <Feather name='search' size={20} color={colors.textLight}/>
                    <Text style={styles.textSearch} >Search...</Text>
                </View>
            </SafeAreaView>
            {/* <FlatList 
                data={}
                renderItem={renderChatItem}
                key={item=>item.id}
                horizontal={true}/> */}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    headWrapper:{
        padding:10,
        margin:10,
        borderWidth:1,
        borderColor:colors.textLight,
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
    },
    textSearch:{
        color:colors.textLight,
        fontSize:17,
        marginLeft:10
    }
})
export default ChatPage;