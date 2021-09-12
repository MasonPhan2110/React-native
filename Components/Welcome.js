import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Firebase, auth } from '../setup';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../Assets/Color/colors';
const App = ({ navigation }) => {
    if(auth().currentUser){
        navigation.navigate('Home');
    }
    console.log(auth().currentUser);
    return(
        <View style={styles.container}>
            <Image style={styles.logoHeader} source={require('../Assets/Image/Messenger_Logo.png')}/>
            <Text style={styles.textHeader}>Welcome to Messenger</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <View style={styles.btnLogin} >
                    <Text style={styles.btnLoginText}>LOGIN TO MESSENGER</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                <Text style={styles.btnRegister}>YOU DON'T HAVE ACCOUNT?</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    logoHeader:{
        marginTop:100,
        width:110,
        height:110
    },
    textHeader:{
        marginTop:100,
        width:250,
        fontFamily:'Montserrat-SemiBold',
        fontSize:40,
        textAlign:'center'
    },
    btnLogin:{
        justifyContent:'center',
        backgroundColor:colors.blue,
        width:300,
        height:48,
        borderRadius:10,
        marginTop:290
    },
    btnLoginText:{
        color:colors.white,
        alignSelf:'center',
        fontSize:18,
        fontFamily:'Montserrat-Medium'
    },
    btnRegister:{
        marginTop:30,
        color:colors.blue,
        fontSize:13,
        fontFamily:'Montserrat-Medium'
    },
})
export default App;