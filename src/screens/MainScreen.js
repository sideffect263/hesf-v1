import { View,Button, Image, Platform, Text, StyleSheet, Pressable, Alert , } from 'react-native'
import React,{useState} from 'react'
import HeadBar from '../componets/HeadBar'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import ImagSlider from '../componets/ImagSlider';
import DataFilter from '../componets/DataFilter';
import Constant from 'expo-constants'
import warehouseicon from '../../assets/9b9/warehouse-icon.png'
import farmicon from '../../assets/9b9/farm-icon.png'
import lifticon from '../../assets/9b9/lift-slab-icon.png'
const i=0;


const data = [
  {
    name: 'JCB 535-140',
    vehicleType: 'boom lift',
    engType: 'hand',
    field: 'indoor',
    image:warehouseicon,
  }
  // genereate more data from options
,{

  name: 'JCB 535-174',
  vehicleType: 'scissor lift',
  engType: 'oil',
  field: 'outdoor',
},
{
  name: 'JCB 535-147',
  vehicleType: 'forklift',
  engType: 'electric',
  field: 'outdoor',
},
{
  name: 'JCB 535-142',
  vehicleType: 'vertical lift',
  engType: 'electric',
  field: 'outdorr - 4X4',
},

]

const config_data =[
  {
    filter_name:"field",
    options:  [     { label: 'indoor', value: '1',image:warehouseicon },
    { label: 'outdoor', value: '2',image:farmicon },
    { label: 'outdorr - 4X4', value: '3' },
    { label: 'any', value: '4' },
   ]
  } ,

  {
    filter_name:"vehicleType",
    options:  [          { label: 'vertical lift', value: '1' },
    { label: 'scissor lift', value: '2' },
    { label: 'boom lift', value: '4' },
    { label: 'telescopic lift', value: '5' },
    { label: 'forklift', value: '6' },
    { label: 'any', value: '7' },]
  } ,
  {
    filter_name:"engType",
    options:  [          { label: 'hand', value: '1',image:warehouseicon },
    { label: 'oil', value: '2',image:warehouseicon },
    { label: 'electric', value: '3',image:warehouseicon },]
  } ,
  
  
 
//coding stop - resume on next study session
  ]

const MainScreen = (navigation, route, state) => {
  const [filterdData, setFilterdData] = useState(data);
  const [toolFilters,  setToolFilters] = useState({});


  const filterData = (filter_name, value) => {
    console.log('test', toolFilters)
  
    setToolFilters({...toolFilters, [filter_name]: value});
    if(value === 'any')
      setToolFilters({...toolFilters, [filter_name]: undefined});
    // filter data with tool filters
    const filteredData = data.filter((item) => {
      let isMatch = true;
      for (const key in toolFilters) {
        if (toolFilters[key] !== item[key]&&  toolFilters[key] !== undefined) {
          isMatch = false;
        }
      }
      return isMatch;
    });
  //  create data copy via value not by ref
    setFilterdData([...filteredData]);
  
}

  const imgGoLeft=()=>{

}
const filterImgs=()=>{
  console.log('pressed')


  window.location.reload();
 // query = route.params;
}



  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.selectorCard}>
        <View style={styles.imageslider}>
     <ImagSlider data={filterdData}/>
     </View>

     <View style={styles.sliderButtns}>
      <Pressable onPress={imgGoLeft}>

      </Pressable>
     </View>
    <View style={styles.fliterData}>
    <Button
  onPress={filterImgs}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </View >
     </View>
     <View style={styles.infoCard}>

     </View>
     </View>
     <View style={styles.right}>
      <View style={
        {...Platform.select({
            ios:{
              marginBottom:useBottomTabBarHeight()*1.5,flex:1,

            },
            android:{
              marginBottom:useBottomTabBarHeight()*1.5,flex:1,
            },
            web:{
              width:'100%',
            },
            default:{},
          }),
        }}>
      <View style={styles.datafilter}>
        {
          config_data.map((item,i)=>{
            return <>
            {/* every row with mod 3 is 0 add view componet */}
        
            <DataFilter filterData={filterData} type={item.filter_name} options={item.options}/>
            </>
          }
          )
        }

        {/* <View style={styles.row1}>
        <DataFilter type={'fieldData'} label={'field'} id='1'/>
        <DataFilter type={'vehicleTypeData'}/>
        <DataFilter/>
        </View>
        <View style={styles.row2}>
        <DataFilter/>
        <DataFilter/>
        <DataFilter/>
        </View>
        <View style={styles.row3}>
        <DataFilter/>
        <DataFilter/>
        <DataFilter/>
        </View> */}
      </View>
      </View>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row1:{
    flexDirection:'row',
    alignSelf:'stretch',
    borderWidth:2,
    height:'33%'
  },
  row2:{
    flexDirection:'row',
    height:'33%',
    alignSelf:'stretch',

  },
  row3:{
    flexDirection:'row',
    height:'33%',
    alignSelf:'stretch',
  },
  fliterData:{
    flex:1,
    justifyContent:'center'
  },
  infoCard:{
    ...Platform.select({
      ios:{},
      android:{},
      web:{
        flex:1,
      },
      default:{},
    }),
  },
  selectorCard:{
    ...Platform.select({
      ios:{},
      android:{},
      web:{
        flex:1,
      },
      default:{
        
      },
    }),
    borderColor:'white',
    borderWidth:2,
    flexDirection:'column',       
  },
  datafilter:{
    
    ...Platform.select({
      ios:{
        flex:2,
        flexDirection:'row',
        flexWrap:'wrap',
        alignContent:'center',
        justifyContent:'center',
      },
      android:{
        flex:2,
        flexDirection:'row',
        flexWrap:'wrap',
        alignContent:'center',
        justifyContent:'center',
      },
      web:{
        // borderColor:'white',
        // borderWidth:5 ,
        // flexDirection:'colum',
        // justifyContent:'center',
        // alignContent:'center',
        // alignItems:'center',
        flex:1,
        // alignSelf:'strech',
        
        display:'grid',
        gridTemplateColumns:'1fr 1fr 1fr',
        gridTemplateRows:'1fr 1fr 1fr',
        // make the rows heiger
        gridAutoRows:'minmax(100px)',
        

      },
      default:{
      },
    }),
     
    },
  left:{
    ...Platform.select({
      ios:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        flexDirection:'row',
      },
      android:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        flexDirection:'row',
      },
      web:{
      flexDirection:'row',  
      alignItems:'stretch',
      borderWidth:3,
      flex:1,
      borderColor:'green',
      width:'100%',
      height:'70%',
    },
      default:{},

    }),
    

  },
  right:{
    ...Platform.select({
      ios:{
        flex:2,
      },
      android:{ 
         flex:2,

      },
      web:{
      
      flexDirection:'row',  
      justifyContent:'center',
      alignItems:'stretch',
      borderWidth:3,
      flex:1,
      borderColor:'blue',
      width:'100%',
      height:'70%',
      },
      default:{},
    }),
    
  },
  imageslider:{
    ...Platform.select({
      ios:{
        borderWidth:10,
        alignContent:'flex-end',
        alignItems:'flex-end',
        alignSelf:'flex-end',
        justifyContent:'flex-end',
      },
      android:{
        borderWidth:10,
        alignContent:'flex-end',
        alignItems:'flex-end',
        alignSelf:'flex-end',
        justifyContent:'flex-end',
      },
      web:{
      flex:7,
      borderWidth:2,
      borderColor:'yellow',

      },
      default:{},
    }),
    
  },
  sliderButtns:{
    flex:2,
    borderWidth:2,
    borderColor:'blue',
    
  },
  container: {
      flexDirection:'row',

      ...Platform.select({
        ios:{
          flexDirection:'colum',
          backgroundColor:'#57B8FF',
        },
        android:{
          backgroundColor:'#57B8FF',
        },
        web:{
          backgroundColor: '#57B8FF',
          alignItems:'center',

        },
        default:{
          flexDirection:'row',
          justifyContent:'space-around',

        },
      }),
      marginTop:Constant.statusBarHeight,
      flex: 1,
      
    },
    text:{
    },
  });
  
export default MainScreen