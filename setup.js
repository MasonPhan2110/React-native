import App from './App';
import Firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import * as React from 'react';


const firebaseConfig = {
    apiKey: "AIzaSyDIFrunLI3_8TTPc4jlW7W6IOlO4AVao2g",
    databaseURL: "https://chatapp-667fa-default-rtdb.firebaseio.com",
    authDomain: "chatapp-667fa.firebaseapp.com",
    projectId: "chatapp-667fa",
    storageBucket: "chatapp-667fa.appspot.com",
    messagingSenderId: "232113799587",
    appId: "1:232113799587:web:5e00d2bf02e8d8d56b5a16"
};
if(!Firebase.apps.length){
    Firebase.initializeApp(firebaseConfig);
}
export {Firebase, database, auth};
function Setup(){
    return(
        <App/>
    )
} 
export default Setup;