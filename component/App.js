import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './component/Task';
export default function App() {
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItem([...taskItem,task]);
    setTask(null)
  }

  const completTask = (index) => {
    let itemCopy = [...taskItem];
    itemCopy.splice(index,1);
    setTaskItem(itemCopy);
  }


  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style= {styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {
            taskItem.map((item, index)=> {
              return (
                <TouchableOpacity key = {index}  onPress = {()=>completTask(index)} >
                  <Task  text = {item}/>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS==="ios"?"padding":"height"}
      style = {styles.writeTask}>
        <TextInput style={styles.input} placeholder={'Write a task'} value = {task} onChangeText={text=>setTask(text)}/>
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  items:{
    marginTop:20
  },
  writeTask:{
    position:'absolute',
    bottom:15,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  input:{
    paddingVertical:10,
    paddingHorizontal:10,
    width:250,
    borderRadius:60,
    backgroundColor:'#FFF',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addWrapper:{
    width:50,
    height:50,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addText:{},
});
