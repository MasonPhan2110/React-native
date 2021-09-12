import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../Assets/Color/colors';
import ChatPage from './Home/chat';
import FriendPage from './Home/friend';
import MenuPage from './Home/menu';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { BottomNavigation } from 'react-native-paper';
import { database } from '../setup';
const App = ({ navigation }) => {
    // database().ref('/users').once('value').then(snapshot=>{
    //     snapshot.forEach
    // });
    function Chat(){
        return(
            <ChatPage/>
        )
    }
    function FriendScreen(){
        return(
            <FriendPage/>
        )
    }
    function Menu(){
        return(
            <MenuPage/>
        )
    }
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'chat', title: 'Chat', icon:'chat', color:'#95DAC1'},
        { key: 'friend', title: 'Friend', icon:'account-multiple', color:'#6F69AC'},
        { key: 'menu', title: 'Menu', icon:'menu', color:'#FD6F96'},
    ]);

    const renderScene = BottomNavigation.SceneMap({
        chat: Chat,
        friend: FriendScreen,
        menu: Menu,
    });

    return (
        <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        shifting={true}
        />
    );
}

const styles=StyleSheet.create({

})
export default App;