import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, Image,Button,TouchableOpacity } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App( {navigation} ) {

  return (



    <NavigationContainer>

           <Stack.Navigator>
            <Stack.Screen
             name='פתרונות בגובה' 
             component={MainScreen} 
             style={styles.container}  
             options={{ 
              headerShown:false,
            }} 

             />
           </Stack.Navigator>
           </NavigationContainer>
      );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#86bbd8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headBarImage:{
      marginLeft:'5%',
      resizeMode:'contain',
      height:'100%',
      width:'300px',
      borderWidth:1,      
  },
});
