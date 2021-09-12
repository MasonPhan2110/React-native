import React,{Component} from 'react';
import { View, Text } from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import { database } from '../../setup';
class FriendPage extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const ref = database().ref('/users');
        ref.once('value')
        .then(snapshot=>{
            const datacontain = [];
            snapshot.forEach(child=>{
                var childdata = child.val();
                console.log(childdata);
                datacontain.push(childdata);
            })
            this.setState({users:datacontain});
        });
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('next');
        console.log(nextProps, nextState);
        console.log('old');
        console.log(this.props, this.state);
        return true;
    }
    componentWillUnmount(){

    }
    render(){
        if(this.state==null){
            return(
                <Text>Old</Text>
            )
        }else{
            return( 
                <View>
                    <Text>friend</Text>
                    {
                        this.state.users.map((user)=>{
                            console.log({user});
                            return(
                                <Text >new.</Text>
                            );
                    })}
                </View>
            )
        }
    }
}

const Friendpage = () => {
    var dataContainer = [];
    database().ref('/users').once('value').then(snapshot=>{
        snapshot.forEach((childSnapshot)=>{
            var childdata = childSnapshot.val();
            dataContainer.push(childdata);
        })
    });
    
    return(
        <View>
            <Text>friend</Text>
        </View>
    )
}
export default FriendPage;