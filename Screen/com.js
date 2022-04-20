import React from 'react';
import { Text, View, StyleSheet , TouchableOpacity } from 'react-native';
export default class TableExample2 extends React.Component {
  
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
        <Table>
            <tr>
                <td>o</td>
                <td>a</td>
            </tr>
        </Table>
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