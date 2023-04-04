import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
           <Tab.Navigator 
          screenOptions={{
            tabBarStyle:{
              backgroundColor:'black'
            },
          }}
           >
            <Tab.Screen name='home' component={MainScreen} style={styles.container}
            options={{
              tabBarActiveTintColor:'#5698c3',
              tabBarIcon:({color,size,focused})=>{
              return(
                <View style={{flex:1,justifyContent:'center'}}>
                  <Image style={{width:size*1.3,height:size*1.3, tintColor:color}} source={require('./assets/icon.png')}/>  
                  </View>
              )
              },
              tabBarStyle:{
                ...Platform.select({
                  ios:{
                    showLable:true,
                position:'absolute',
                bottom:25,
                left:20,
                right:20,
                elevation:0,
                backgroundColor:'#ffffff',
                borderRadius:15,
                height:90,
                justifyContent:'strech',
                alignContent:'strech',
                alignItems:'strech',
                alignSelf:'strech',
                  },
                  android:{},
                  web:{
                    showLable:true,
                position:'absolute',
                marginLeft:'25%',
                bottom:25,
                left:20,
                right:20,
                elevation:0,
                backgroundColor:'#ffffff',
                borderRadius:15,
                height:90,
                width:'40%',
                justifyContent:'strech',
                alignContent:'strech',
                alignItems:'strech',
                alignSelf:'strech',
                  },
                  default:{},
                }),
                
              },
              headerShown:false,
              showLable:true,
              tabBarShowLabel:true,
            
              ...styles.shadow
              
            }}

       
            />
           </Tab.Navigator>
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
});
