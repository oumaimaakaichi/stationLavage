import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView , Button , TextInput } from 'react-native';


export default function Update({navigation}) {
  
  return (
 
    <ScrollView>
          
         
    <View style={styles.container1}>
 
      <View style={styles.wrapper}>
          <Text  style={{
          fontSize:20 , 
          fontWeight:"bold",
          marginBottom:15,
          marginTop:30
        }}> Modifier vos cordonnés </Text>
        <TextInput
          style={styles.input}
       
          placeholder="Nouvelle nom de station"
         
        />
        
        
        

        <TextInput
          style={styles.input}
         
          placeholder="Nouvelle  email"
          
        />

        <TextInput
          style={styles.input}
         
          placeholder="Nouvelle password"
         
          secureTextEntry
        /> 
        <TextInput
          style={styles.input}
         
          placeholder="Confirmer nouvelle password"
         
          secureTextEntry
        />

        <Button
          title="update"
          
        />

       
      </View>
    </View>
        

         
          </ScrollView>
    
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: 'blue',
  },
});
