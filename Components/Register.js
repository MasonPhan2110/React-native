import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native';
import { Firebase, database, auth } from '../setup';
import colors from '../Assets/Color/colors';
const App = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const[keyboadrStatus, setkeyboardStatus] = useState(undefined);
    useEffect(()=>{
        const showSubcription = Keyboard.addListener("keyboardDidShow",()=>{
            setkeyboardStatus("Show");
        });
        const hideSubcription = Keyboard.addListener("keyboardDidHide",()=>{
            setkeyboardStatus("Hide");
        });
        return()=>{
            showSubcription.remove();
            hideSubcription.remove();
        }
    })
    const SignIn = (email, password, username) => {
        auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
            console.log(auth().currentUser.uid);
            //const reference = database().ref('/user').push();
            database().ref('/users/'+auth().currentUser.uid).set({
                Username: username,
                Email: email,
                Id: auth().currentUser.uid,
            }).then(()=>navigation.navigate('Home'))
            .catch(error =>{
                console.error(error);
            });
        })
        .catch(error=>{
            if(error.code === 'auth/email-already-in-use'){
                ToastAndroid.show('This email is already in use.',ToastAndroid.SHORT);
            }
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
             <Image style={[styles.logoHeader,{display:keyboadrStatus=='Show'?'none':'flex'}]} source={require('../Assets/Image/Messenger_Logo.png')}/>
             <View style={styles.loginWrapper}>
                <TextInput placeholder='Your email' placeholderTextColor= {colors.textLight} onChangeText={text=>setEmail(text)}/>
             </View>
             <View style={styles.registerWrapper}>
                <TextInput placeholder='Your password' placeholderTextColor={colors.textLight} secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
             </View>
             <View style={styles.registerWrapper}>
                <TextInput placeholder='Your Username' placeholderTextColor={colors.textLight} onChangeText={text=>setUsername(text)}/>
             </View>
             <KeyboardAvoidingView behavior={Platform.OS==="ios"?"padding":"height"} style = {styles.writeTask}>
                <TouchableOpacity onPress={()=>SignIn(email,password,username)}>
                    <View style={styles.btnRegister} >
                        <Text style={styles.btnLoginText}>Register</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.btnforget}>FORGET PASSWORD?</Text>
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
    btnRegister:{
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
    btnforget:{
        marginTop:10,
        color:colors.blue,
        fontSize:13,
        fontFamily:'Montserrat-Medium'
    },
})
export default App;