import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    ToastAndroid
} from 'react-native';
import { Firebase, database, auth } from '../setup';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../Assets/Color/colors';
const App = ({ navigation }) => {   
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const user = auth().currentUser;

    const Login = (email, password) => {
        auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            navigation.navigate('Home');
        })
        .catch(error=>{
            if(error.code === 'auth/user-not-found'){
                ToastAndroid.show('The account not found. Do you have account?',ToastAndroid.SHORT);
            }
            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }
            console.error(error);
        });
    }
    return(
        <View style={styles.container}>
             <Image style={styles.logoHeader} source={require('../Assets/Image/Messenger_Logo.png')}/>
             <View style={styles.loginWrapper}>
                <TextInput placeholder='Your email' value={email} keyboardType={'email-address'} placeholderTextColor= {colors.textLight} onChangeText={text=>setEmail(text)}/>
             </View>
             <View style={styles.registerWrapper}>
                <TextInput placeholder='Your password' value={password} placeholderTextColor={colors.textLight} secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
             </View>
             <KeyboardAvoidingView behavior={Platform.OS==="ios"?"padding":"height"} style = {styles.writeTask}>
                <TouchableOpacity onPress={()=>Login(email, password)}>
                    <View style={styles.btnLogin} >
                        <Text style={styles.btnLoginText}>LOGIN</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.btnRegister}>FORGET PASSWORD?</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    logoHeader:{
        marginTop:80,
        width:110,
        height:110
    },
    loginWrapper:{
        marginTop:80,
        height:45,
        width:315,
        borderWidth:2,
        borderRadius:10,
        borderColor:colors.textLight
    },
    registerWrapper:{
        marginTop:10,
        height:45,
        width:315,
        borderWidth:2,
        borderRadius:10,
        borderColor:colors.textLight
    },
    writeTask:{
        position:'absolute',
        bottom:15,
        width:'100%',
        alignItems:'center',
    },
    btnLogin:{
        justifyContent:'center',
        backgroundColor:colors.blue,
        width:300,
        height:48,
        borderRadius:10,
    },
    btnLoginText:{
        color:colors.white,
        alignSelf:'center',
        fontSize:18,
        fontFamily:'Montserrat-Medium'
    },
    btnRegister:{
        marginTop:10,
        color:colors.blue,
        fontSize:13,
        fontFamily:'Montserrat-Medium'
    },
})
export default App;