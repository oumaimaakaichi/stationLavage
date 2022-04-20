/*import React from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Button } from 'react-native'
import {MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { View } from 'react-native-web';
import{useEffect , useState} from 'react'
const TableExample1 = () => {
    const [data , setData] = useState([]);
    useEffect(async() =>{
        getAvis();
    } , [])
  
    async function getAvis(){
      let result = await fetch("http://localhost:3001/comme/getcomm");
      result = await result.json();
      setData(result)
  
  }
  return (
    <View>
    {
        data.map((item , key) => (
            <Text>
            {item.avis}
            </Text>
        ))
    }
    </View>
  );
};*/
import React from 'react';
import { Text, View, StyleSheet , TouchableOpacity } from 'react-native';
export default class TableExamplee extends React.Component {
  
  componentDidMount=()=>{
    const url="http://192.168.43.230:3001/comme/getcomm"
    fetch(url).then((res)=>res.json())
    .then((resJson)=>{
      alert(JSON.stringify(resJson))
    })
  }
  render() {
    return (
      <View style={{ paddingTop: 30 }}>
        <TouchableOpacity onPress={this.componentDidMount} style={styles.boutton}>
        <Text style={{color:"black"}}>Cliqer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
  
//export default TableExample1;
  
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
   
   
  },
  boutton:{
    height:42,
    width:200,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    borderRadius:42,
    backgroundColor:"pink"
  }
})