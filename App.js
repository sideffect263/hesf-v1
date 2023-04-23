import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, Image,Button,TouchableOpacity } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ofekLogo from './assets/ofekLogo.png'


const Stack = createNativeStackNavigator();

export default function App( {navigation} ) {

  return (


    <NavigationContainer>

           <Stack.Navigator>
            <Stack.Screen
             name='home' 
             component={MainScreen} 
             style={styles.container}  
             options={{ 
              headerRight:()=>(
                <Text>בית</Text>
              ),
            headerTitle:()=>(
              <TouchableOpacity onPress={()=>window.location.replace('https://www.ofeklift.com/')}>
              <Image style={styles.headBarImage} source={ofekLogo} />
              </TouchableOpacity>
            ),
            
            }} 
             
             />
           </Stack.Navigator>
           </NavigationContainer>
      );
    
    
    
    
    
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fca311',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headBarImage:{
    marginLeft:'5%',
      resizeMode:'contain',
      height:'100%',
      width:'300px',
      borderWidth:1,
      borderWidth:0,
      
  },
});
