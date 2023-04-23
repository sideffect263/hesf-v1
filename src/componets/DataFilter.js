import { Image, View, Text ,StyleSheet,FlatList, SafeAreaView, StatusBar, TouchableOpacity, Platform} from 'react-native'
import React,{useState} from 'react'
import {useFonts} from 'expo-font';
import booicon from '../../assets/9b9/boom-lift-icon.png'
import warehouseicon from '../../assets/9b9/warehouse-icon.png'
import farmicon from '../../assets/9b9/farm-icon.png'
import lifticon from '../../assets/9b9/lift-slab-icon.png'
import { Dropdown } from 'react-native-element-dropdown';



const data ={
    
  groundType : [
     { label: 'מהודק', value: '1' },
    { label: 'כורכר ואדמה', value: '2' },
    { label: 'הכל', value: '3' },
  ],
      vehicleType : [
        { label: 'במת מספריים', value: '1' },
    { label: 'במה מפרקית', value: '2' },
    { label: 'במה טלסקופית', value: '5' },
    { label: 'מלגזה', value: '6' },
    { label: 'הכל', value: '7' },
  ],
      engType:[
        { label: 'ידני', value: '1',image:warehouseicon },
        { label: 'דיזל', value: '2',image:warehouseicon },
        { label: 'חשמלי', value: '3',image:warehouseicon },
        { label: 'הכל', value: '4',image:warehouseicon },
      ],
   
//coding stop - resume on next study session
    }


const DataFilter = ({type,options,filterData}, navigation ) => {
    const [fontsLoaded] = useFonts({
        IcoMoon: require('dooboo-ui/Icon/doobooui.ttf'),
      });



      const [value, setValue] = useState(null);
      const [iconIm, seticonIm] = useState(null);
      const [isFocus, setIsFocus] = useState(false);
  
      //navigation.navigate('filterCode', { code:'code 1' })


  return (
    <View style={styles.container}> 
    <View style={styles.imagecontainer}>
        <Image
        style={styles.mainImage}
        source={iconIm}
        />
        </View>
        <View style={styles.selector}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={options}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            seticonIm(item.image);
            filterData(type,item.label)
          }}
        />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    imagecontainer:{
        flex:7,
    },
    selector:{
        flex:3,
    },
    container:{
        ...Platform.select({
            ios:{
                alignSelf:'center',
                flexDirection:'column',
                borderWidth:2 , 
                borderColor:'white',
                height:'40%',
                width:'40%',
                margin:'3%',
            },
            android:{},
            web:{
                flex:1,
                alignSelf:'center',
                flexDirection:'column',
                borderWidth:2 , 
                borderColor:'white',
                margin:'3%',
                alignSelf:'strech'
            },
            
            default:{},
            
          }),
     
      
    },
    mainImage: {
        flex:4,
        resizeMode:'contain',
        borderWidth:2,
        width:'100%',
        height:'100%',flex:1,
        alignSelf:'stretch',
    },
})

export default DataFilter