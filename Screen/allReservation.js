import React ,{Component} from 'react';
import { StyleSheet , View , ScrollView , SafeAreaView, Alert} from 'react-native';
import { DataTable } from 'react-native-paper';
import { Button , TouchableOpacity ,Text } from 'react-native'
import {MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
export default class Rese extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  } 
 

  componentDidMount=()=>{
    const url="http://192.168.43.230:3001/reservation/getAllReservation"
    fetch(url).then((res)=>res.json())
    .then((resJson)=>{
     // alert(JSON.stringify(resJson))
     this.setState({data:resJson})
    })
  }
   Supprimerr=(_id)=>{

    
      
    fetch("http://192.168.43.230:3001/reservation/deleteres/"+_id , {
        method: 'DELETE',
      
        headers:{
            "Content-Type" : 'application/json',
            "Accept":'application/json'
           
        },
       

      
    }).then(res=>res.json())
    .then(async data=>{
  
    console.warn("supprimer avec succce")
    })
    .catch(err=>{
      console.log(err)
    });
   
    
   
}
Approuver=(_id)=>{

    
      
    fetch("http://192.168.43.230:3001/reservation/updateEtat/"+_id , {
        method: 'PUT',
      
        headers:{
            "Content-Type" : 'application/json',
            "Accept":'application/json'
           
        },
       

      
    }).then(res=>res.json())
    .then(async data=>{
  
    console.warn("confirmer avec succce")
    })
    .catch(err=>{
      console.log(err)
    });
   
    
   
}
  //{data.map((item,index)=>{ 
  render() {
    const{ data }=this.state
    return (
      <View style={styles.container}>
        
       
           
              
              <View >
               <SafeAreaView> 
              <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                <DataTable style={styles.container}>
       
       <DataTable.Header style={styles.tableHeader}>
         
         <DataTable.Title style={styles.title} >Nom et Prenom</DataTable.Title>
         <DataTable.Title style={styles.title} >Nom station</DataTable.Title>
         <DataTable.Title style={styles.title} >date et heure</DataTable.Title>
         <DataTable.Title style={styles.title} >Marque v??hicule</DataTable.Title>
         <DataTable.Title style={styles.title} >Nature v??hiule</DataTable.Title>
         <DataTable.Title  style={styles.title} >status</DataTable.Title>
         <DataTable.Title style={styles.title}>Action</DataTable.Title>
       </DataTable.Header>
       
       {
          data.map((item , index)=>{
              return(
         <DataTable.Row  >
       <DataTable.Cell style={styles.title1}>{item.Nom_prenom}</DataTable.Cell>
       <DataTable.Cell style={styles.title1}>{item.namestation}</DataTable.Cell>
       <DataTable.Cell style={styles.title1}>{item.date_heure}</DataTable.Cell>
       <DataTable.Cell style={styles.title1}>{item.marque_vehicule}</DataTable.Cell>
       <DataTable.Cell style={styles.title1}>{item.Nature_vehicule}</DataTable.Cell>
       <DataTable.Cell style={styles.title1}>{item.etat ? (<div className="text-green-500 " style={{color:'green'}}>
                            <b> Confirmer</b>
                          </div>
                        ) : (
                          <div className="text-blue-500" style={{color:'blue'}}>
                            <b >En Attente...</b>
                          </div>
                        )}</DataTable.Cell>
       <DataTable.Cell  >
        <MaterialIcons name='delete'size= {20} color='#D90115' onPress={() => {
            this.Supprimerr(item._id);
          }} style={{marginRight:20}}/>
        <AntDesign name="checkcircle" size={20} color="#22780F" onPress={() => {
            this.Approuver(item._id);
          }} />
       
        </DataTable.Cell>
         </DataTable.Row>
         )
        })
        }
       
       </DataTable>
       </ScrollView>
              </SafeAreaView>
              </View>
             
            
          



      </View>
        
         
      
         


    );
  }
}
 
//export default TableExample;
  
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor:"white",
    
    marginEnd:15,
    alignContent:'center'
    
  },
  
  tableHeader: {
    backgroundColor: '#DCDCDC',
   width:'100%',
   alignContent:'center',
   alignItems:'center'
    
    
  },
  title1:{
    marginRight:30,
    fontSize:2
  },
  title:{
    marginRight:50,
   fontWeight:'bold',
   marginLeft:10
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal:0,
    
  
  }
});
