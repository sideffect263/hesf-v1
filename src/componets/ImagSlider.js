import { View, Text,Image,StyleSheet } from 'react-native'
import bamot_misparaim_memunaot from '../../assets/bamot_misparaim_memunaot-1.jpg'
import React from 'react'
import warehouseicon from '../../assets/9b9/warehouse-icon.png'

const ImagSlider = ({data}) => {
  return (
    <View style={styles.container}>
      {
        data.map((item,index)=>{


          
          return(
            <View key={index}>
              <Text>{item.name}</Text>
              <Image
                style={styles.mainImage}
                source={warehouseicon}
              />
            </View>
          )
        }
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      borderWidth:1,
      flex:1,
      justifyContent:'center',
      alignContent:'center',

    },
    mainImage: {
        flex:1,
        resizeMode:'contain',
        borderWidth:2,  
        
   
    },

    
  });

export default ImagSlider