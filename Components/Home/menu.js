import { stubFalse } from 'lodash';
import * as React from 'react';
import { View, Text, SafeAreaView, Button, TouchableOpacity,StyleSheet, ToastAndroid } from 'react-native';
import colors from '../../Assets/Color/colors';
import { Firebase, auth, database } from '../../setup';
import { useNavigation } from '@react-navigation/native';
const MenuPage = () => {
    const navigation1 = useNavigation();
    const logout = () => {
        auth().signOut().then(()=>
            (navigation1.navigate('Welcome'))
        )
    }
   return(
        <TouchableOpacity onPress={logout}>
            <View style={styles.btnWrapper}>
                <Text style={styles.textBtn}>Log Out</Text>
            </View>
        </TouchableOpacity>
   )
}
const styles = StyleSheet.create({
    btnWrapper:{
        margin:10,
        justifyContent:'center',
        borderColor: colors.textLight,
        borderWidth:1,
        borderRadius:20,
        height:37,
        flexDirection:'row'
    },
    textBtn:{
        alignSelf:'center'
    }
})
export default MenuPage;