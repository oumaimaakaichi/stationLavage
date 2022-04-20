import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homme from './Screen/homme'
import OnBoardScreenL from './Screen/homme2';
import Login from './Screen/login';
const Stack= createStackNavigator();
import Register from './Screen/inscri';
import App1 from './Screen/map';
import TableExample from './Screen/DataTable';
import Dashboard from './Screen/dashboard';
import Commentaire from './Screen/Commentaire';
import Reservation from './Screen/reservation';
import Profil from './Screen/profil';
import Update from './Screen/update';

import Signin from './Screen/log';
export default function App() {
  
  return (
 
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Homme'>
        <Stack.Screen name='Home' component={Homme} />
        <Stack.Screen name='OnBoardScreenL' component={OnBoardScreenL} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='signin' component={Signin} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Dashboard' component={Dashboard} />
        <Stack.Screen name='Commentaire' component={Commentaire} />
        <Stack.Screen name='Reservation' component={Reservation} />
        <Stack.Screen name='Profil' component={Profil} />
      <Stack.Screen name='Update' component={Update} />
      </Stack.Navigator>
    </NavigationContainer>
    
    /*<NavigationContainer>
    <Stack.Navigator initialRouteName='Dashboard'>
     
      <Stack.Screen name='Dashboard' component={Dashboard} />
      <Stack.Screen name='profil' component={profil} />
      <Stack.Screen name='update' component={update} />
    </Stack.Navigator>
  </NavigationContainer>*/
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
