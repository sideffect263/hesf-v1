import { 
  View,Button,  SafeAreaView,
  ScrollView, Image, Platform, 
  Text, StyleSheet, Pressable,
   Alert ,TouchableOpacity, Modal
   } from 'react-native'
import React,{useState} from 'react'
import HeadBar from '../componets/HeadBar'
import ImagSlider from '../componets/ImagSlider';
import DataFilter from '../componets/DataFilter';
import Constant from 'expo-constants'
import warehouseicon from '../../assets/9b9/warehouse-icon.png'
import farmicon from '../../assets/9b9/farm-icon.png'
import lifticon from '../../assets/9b9/lift-slab-icon.png'
import anyIcon from '../../assets/icons/icons8-everything-100.png'

const data = [//holds all the raw data
  {
    name: 'GS1330',
    vehicleType: 'slab lift',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '5.90',
    liftStrenght: '0.227',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    image:'https://www.ofeklift.com/images/categories/Electric-Scissor-Lift-ES19.jpg',
  },
  {
    name: 'GS1930',
    vehicleType: 'slab lift',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '7.80',
    liftStrenght: '0.227',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
  },
  {
    name: 'GS2032',
    vehicleType: 'slab lift',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '8.00',
    liftStrenght: '0.227',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
  },
  {
    name: 'GS2632',
    vehicleType: 'slab lift',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '9.90',
    liftStrenght: '0.227',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
  },
  {
    name: 'GS3246',
    vehicleType: 'slab lift',
    engType: 'חשמלי',
    workLocation: 'any',
    workHeight: '11.70',
    liftStrenght: '0.318',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
  },
  {
    name: 'GS4047',
    vehicleType: 'slab lift',
    engType: 'חשמלי',
    workLocation: 'any',
    workHeight: '13.70',
    liftStrenght: '0.350',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
  },
  {
    name: '4069LE',
    vehicleType: 'slab lift',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '14.00',
    liftStrenght: '0.360',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
  },
  {
    name: 'GS3232',
    vehicleType: 'slab lift',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '11.70',
    liftStrenght: '0.227',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח משופע',
  },
  {
    name: 'GS4069',
    vehicleType: 'slab lift',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '14.00',
    liftStrenght: '0.360',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח משופע',
  }
]



const config_data =[//hold all the filters

  {
    filter_name:"accessibility",
    options:  [          
    { label: 'אנכי', value: 'vertical' },
    { label: 'מאוזן', value: 'horizontal' },
    { label: 'הכל', value: 'any' },]
  },
  {
    filter_name:"workLocation",
    filterType:'dropdown',
    options:  [ 
    { label: 'סגור', value: 'closed',image:warehouseicon },
    { label: 'פתוח', value: 'open',image:farmicon },
    { label: 'הכל', value: 'any', image:anyIcon },
   ]
  } ,

  {
    filter_name:"vehicleType",
    options:  [          
    { label: 'במת מספריים', value: '1' },
    { label: 'במה מפרקית', value: '2' },
    { label: 'במה טלסקופית', value: '5' },
    { label: 'מלגזה', value: '6' },
    { label: 'הכל', value: '7' },]
  } ,
  {
    filter_name:"engType",
    options:  [          
    { label: 'ידני', value: '1',image:warehouseicon },
    { label: 'סולר/דיזל', value: '2',image:warehouseicon },
    { label: 'חשמלי', value: '3',image:warehouseicon },
    { label: 'הכל', value: '4',image:warehouseicon },
  ]
  } ,
  {
    filter_name:"groundType",
    options:  [          
    { label: 'מהודק', value: '1' },
    { label: 'כורכר ואדמה', value: '2' },
    { label: 'הכל', value: '3' },]
  } ,

  {
    filter_name:"groundLevel",
    options:  [          
    { label: 'שטח מפולס ישר', value: '1' },
    { label: 'שטח משופע', value: '2' },
    { label: 'הכל', value: '3' },]
  } ,
  ]

const MainScreen = (navigation, route, state) => {

  const [filterdData, setFilterdData] = useState(data);
  const [toolFilters,  setToolFilters] = useState({});
  const [config, setConfig] = useState(config_data);
  

  const filterData = (filter_name, value) => {//update the filters
    console.log('filter before', toolFilters)
    setToolFilters({...toolFilters, [filter_name]: value});
    if(value === 'הכל')
      setToolFilters({...toolFilters, [filter_name]: undefined});

      console.log('filter after', toolFilters)

}

 
const filterImgs=()=>{//filter  data btn has been pressed
console.log('filter items',toolFilters);
  const filteredData = data.filter((item) => {
    let isMatch = true;
    for (const key in toolFilters) {
      if (toolFilters[key] !== item[key]&&  toolFilters[key] !== undefined) {
        isMatch = false;
      }
    }
    return isMatch;
  });
  setFilterdData([...filteredData]);
}



  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.selectorCard}>
          
        <View style={styles.imageslider}>
     <ImagSlider data={filterdData}/>
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

     </View>
     <View style={styles.right}>
      <View style={
        {...Platform.select({
            ios:{

            },
            android:{
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
            <DataFilter filterData={filterData} type={item.filter_name} options={item.options}/>
            </>
          }
          )
        }

        
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
        
        flex:1,
        
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
      flex:1,
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
      borderWidth:2,
      borderColor:'yellow',

      
      flex:10,
        
      // make the rows heiger
      
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
          backgroundColor: '#eae2b7',
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