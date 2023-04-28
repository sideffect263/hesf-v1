import { 
  View,Button,  SafeAreaView,
  ScrollView, Image, Platform, 
  Text, StyleSheet, Pressable,
   Alert ,TouchableOpacity, Modal, Linking
   } from 'react-native'
import React,{useState} from 'react'
import HeadBar from '../componets/HeadBar'
import ImagSlider from '../componets/ImagSlider';
import DataFilter from '../componets/DataFilter';
import warehouseicon from '../../assets/9b9/warehouse-icon.png'
import farmicon from '../../assets/9b9/farm-icon.png'
import lifticon from '../../assets/9b9/lift-slab-icon.png'
import anyIcon from '../../assets/9b9/everything.png'
import boomIcon from '../../assets/9b9/boom-lift-icon.png'
import DataRange from '../componets/DataRange';
import vertical from '../../assets/9b9/vertical.png'
import horizontal from '../../assets/9b9/horizontal.png'
import forkliftIcon from '../../assets/9b9/forklift.png'
import teleBoom from '../../assets/9b9/boom-lift-tele.png'
import handEngine from '../../assets/9b9/hand-engine.png'
import electricEngine from '../../assets/9b9/electric-engine.png'
import gasEngine from '../../assets/9b9/gas-engine.png'
import asphalt from '../../assets/9b9/asphalt.png'
import soil from '../../assets/9b9/soil.png'
import uneven from '../../assets/9b9/uneven.png'
import level from '../../assets/9b9/level.png'
import toolBox from '../../assets/9b9/tool-box.png'
import logo from '../../assets/ofekLogo.png'
import reset from '../../assets/undo.png'

const data = [//holds all the raw data
  {
    name: 'GS1330',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '5.90',
    liftStrenght: '0.227',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    image:'https://www.lectura-specs.com/models/renamed/orig/wheeled-scissor-lifts-gs1330m-genie.jpg',
    color:'#86bbd8',
  },
  {
    name: 'GS1930',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '7.80',
    liftStrenght: '0.227',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    image:'https://www.acmetools.com/on/demandware.static/-/Sites-acme-catalog-m-en/default/dw1d72de20/images/images/catalog/product/g/GS-1930-Main.jpg',

    color:'#86bbd8',
  },
  {
    name: 'GS2032',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '8.00',
    liftStrenght: '0.227',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:'https://www.colle.eu/media/11768/2032-pdp-elektro.jpg?width=550',
  },
  {
    name: 'GS2632',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '9.90',
    liftStrenght: '0.227',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:'https://www.accessplatforms.co.uk/pub/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/g/s/gs2632_cut_out_extended.jpg',
  },
  {
    name: 'GS3246',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'any',
    workHeight: '11.70',
    liftStrenght: '0.318',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:'https://www.colle.eu/media/11770/3246-pdp-elektro.jpg?width=550',
  },
  {
    name: 'GS4047',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'any',
    workHeight: '13.70',
    liftStrenght: '0.350',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:'https://www.aerialliftequipment.com/files/catalog/genie-gs-4047.png',
  },
  {
    name: '4069LE',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '14.00',
    liftStrenght: '0.360',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'JLG',
    color:'#ff773d',
    

    image:'https://foursite-pape-production.s3.amazonaws.com/papemh.com/14f7fe19-e1b6-4b7a-9ff5-df04a0f65715.jpg',
  },
  {
    name: 'GS3232',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '11.70',
    liftStrenght: '0.227',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח משופע',
    brand:'Genie',
    color:'#86bbd8',
    image:'https://www.genielift.com/images/default-source/product-images/slab-scissor-lift/gs-2632/gs-2632_cutou-1d.jpg?sfvrsn=9d50a5c2_19',
  },
  {
    name: 'GS4069',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '14.00',
    liftStrenght: '0.360',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח משופע',
    brand:'Genie',
    color:'#86bbd8',
    image:'https://www.conger.com/wp-content/uploads/2018/03/Genie-GS-4069-DC-Scissor-Lift.jpg',
  },
  {
    name: '1230ES',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '5.60',
    liftStrenght: '0.227',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'JLG',
    color:'#ff773d',
    image:'https://cdn-jlg.scdn5.secure.raxcdn.com/-/media/jlg/current-materials-no-password/products/americas---ansi/vertical-lifts-and-stock-pickers/1230es-vertical-mast/images/1230es-gallery-silo.png?rev=facc5feb8f1d4706a4f42c0e13fbc1dd',
  },
  {
    name: 'GR15',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '6.70',
    liftStrenght: '0.227',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',

    image:'https://www.gtaccess.co.uk/system/machineimages/193GE/GR15_1.png',
  },
  {
    name: 'GR20',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '8.00',
    liftStrenght: '0.159',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:'https://www.canlift.ca/wp-content/uploads/2019/06/71NwyhcNUkL._SL1500_.jpg',
  },
  {
    name: '10E',
    vehicleType: 'במת מספריים',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '10.00',
    liftStrenght: '0.200',
    accessibility: 'אנכי',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'JLG',
    color:'#ff773d',

    image:'https://hird.co.uk/assets/uploads/2022/05/jlg-t10-personnel-mast-boom-lift.png',
  },
  {
    name: '260MRT',
    vehicleType: 'במת מספריים',
    engType: 'דיזל',
    workLocation: 'פתוח',
    workHeight: '9.90',
    liftStrenght: '0.560',
    accessibility: 'אנכי',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'JLG',
    color:'#ff773d',
    image:'https://riwal.getbynder.com/m/823549baa324f83f/webimage-jlg-260mrt-a.png',
  },
  {
    name: 'GS3384RT',
    vehicleType: 'במת מספריים',
    engType: 'דיזל',
    workLocation: 'פתוח',
    workHeight: '12.00',
    liftStrenght: '0.450',
    accessibility: 'אנכי',
    groundType: 'הכל',
    groundLevel:'הכל',
    brand:'Genie',
    color:'#86bbd8',
    image:'https://www.averasia.com/wp-content/uploads/2020/02/GS-3384-RT.jpg',
  },
  {
    name: 'GS4069RT',
    vehicleType: 'במת מספריים',
    engType: 'דיזל',
    workLocation: 'פתוח',
    workHeight: '14.00',
    liftStrenght: '0.363',
    accessibility: 'אנכי',
    groundType: 'הכל',
    groundLevel:'הכל',
    brand:'Genie',
    color:'#86bbd8',
    image:'https://www.genielift.com/images/default-source/product-images/rough-terrain-scissor-lifts/gs-4069-rt/gs-4069rt_cutout-1.jpg?sfvrsn=c901efa0_19',
  },
  {
    name: 'GS5390RT',
    vehicleType: 'במת מספריים',
    engType: 'דיזל',
    workLocation: 'פתוח',
    workHeight: '18.00',
    liftStrenght: '0.680',
    accessibility: 'אנכי',
    groundType: 'הכל',
    groundLevel:'הכל',
    brand:'Genie',
    color:'#86bbd8',
    image:'https://www.genielift.com/images/default-source/product-images/rough-terrain-scissor-lifts/gs-5390-rt/gs-5390rt_cutout-1.jpg?sfvrsn=1b0aefa0_19',
  },
  {
    name: 'Z30',
    vehicleType: 'זרוע מפרקית',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '11.00',
    liftStrenght: '0.227',
    liftAccesibility: '6.30',
    accessibility: 'הכל',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:'https://www.genielift.com/images/default-source/product-images/articulated-boom-lift/z-30-20-n/z-3020nrj_rev-cutout-1.jpg?sfvrsn=7daeba0b_19',
  },
  {
    name: '120AETJ',
    vehicleType: 'זרוע מפרקית',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '11.90',
    liftStrenght: '0.200',
    liftAccesibility: '7.00',
    accessibility: 'הכל',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Manitou',
    color:'#ef271b',
    image:'https://media.manitou-group.com/download/largejpg/551476-studio_mewp_120_aetj_c_manitou_003.jpg',
  },
  {
    name: 'Z34',
    vehicleType: 'זרוע מפרקית',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '13.00',
    liftStrenght: '0.215',
    liftAccesibility: '6.50',
    accessibility: 'הכל',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:'https://www.genielift.com/images/default-source/product-images/articulated-boom-lift/z-34-22-ic/z-3422ic_cutout-1.jpg?sfvrsn=2c8861f9_26',
  },
  {
    name: '150AETJ',
    vehicleType: 'זרוע מפרקית',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '15.00',
    liftStrenght: '0.200',
    liftAccesibility: '7.60',
    accessibility: 'הכל',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Manitou',
    color:'#ef271b',
    image:'https://www.grupema.com/wp-content/uploads/2015/09/studio_mewp_150_aetj_c_manitou_003.jpg',
  },
  {
    name: 'Z45',
    vehicleType: 'זרוע מפרקית',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '15.90',
    liftStrenght: '0.227',
    liftAccesibility: '7.60',
    accessibility: 'הכל',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',
    image:'https://hml.co.il/wp-content/uploads/2019/11/Z45-25J.jpg',
  },
  {
    name: '170AETJ',
    vehicleType: 'זרוע מפרקית',
    engType: 'חשמלי',
    workLocation: 'הכל',
    workHeight: '16.90',
    liftStrenght: '0.200',
    liftAccesibility: '9.40',
    accessibility: 'הכל',
    groundType: 'מהודק',
    groundLevel:'שטח מפולס ישר',
    brand:'Manitou',
    color:'#ef271b',
    image:'https://media.manitou-group.com/download/largejpg/501980-studio_mewp_170_aetj_l_manitou_002.jpg',
  },
{
    name: 'Z34',
    vehicleType: 'זרוע מפרקית',
    engType: 'דיזל',
    workLocation: 'פתוח',
    workHeight: '12.50',
    liftStrenght: '0.227',
    liftAccesibility: '6.80',
    accessibility: 'הכל',
    groundType: 'הכל',
    groundLevel:'שטח מפולס ישר',
    brand:'Genie',
    color:'#86bbd8',  
    image:'https://www.genielift.com/images/default-source/product-images/articulated-boom-lift/z-34-22-ic/z-3422ic_cutout-1.jpg?sfvrsn=2c8861f9_26',


},
]


const config_data =[//hold all the filters
  {
    filter_name:"accessibility",
    filter_title:"נגישות",
    filterType:'dropdown',
    options:  [          
    { label: 'אנכי', value: 'vertical', image:vertical },
    { label: 'מאוזן', value: 'horizontal', image:horizontal },
    { label: 'הכל', value: 'any', image:anyIcon },]
  },
  {
    filter_name:"workLocation",
    filter_title:"מקום עבודה",
    filterType:'dropdown',
    options:  [ 
    { label: 'סגור', value: 'closed',image:warehouseicon },
    { label: 'פתוח', value: 'open',image:farmicon },
    { label: 'הכל', value: 'any', image:anyIcon },
   ]
  } ,

  {
    filter_name:"vehicleType",
    filter_title:"סוג כלי",
    filterType:'dropdown',
    options:  [          
    { label: 'במת מספריים', value: '1',image:lifticon },
    { label: 'זרוע מפרקית', value: '2',image:boomIcon },
    { label: 'במה טלסקופית', value: '5' ,image:teleBoom},
    { label: 'מלגזה', value: '6',image:forkliftIcon },
    { label: 'הכל', value: '7', image:anyIcon  },]
  } ,
  {
    filter_name:"engType",
    filter_title:"סוג מנוע",
    filterType:'dropdown',
    options:  [          
    { label: 'ידני', value: '1',image:handEngine },
    { label: 'דיזל', value: '2',image:gasEngine },
    { label: 'חשמלי', value: '3',image:electricEngine },
    { label: 'הכל', value: '4',image:toolBox },
  ]
  } ,
  {
    filter_name:"groundType",
    filter_title:"סוג קרקע",
    filterType:'dropdown',

    options:  [          
    { label: 'מהודק', value: '1',image:asphalt },
    { label: 'כורכר ואדמה', value: '2', image:soil },
    { label: 'הכל', value: '3', image:toolBox },]
  } ,

  {
    filter_name:"groundLevel",
    filter_title:"זווית הקרקע",
    filterType:'dropdown',

    options:  [          
    { label: 'שטח מפולס ישר', value: '1' ,image:level},
    { label: 'שטח משופע', value: '2',image:uneven },
    { label: 'הכל', value: '3' , image:toolBox},]
  } ,
  
  ]

  const config_data_range =[//hold all the filters of ranges
    {
      filter_name:"workHeight",
      filter_title:"גובה עבודה",
      filter_range_type:'מטר',
      filter_type:'range',
      options:  [
        0,30
      ]
    },
    {
      filter_name:"liftStrenght",
      filter_title:"כושר הרמה",
      filter_range_type:'טון',
      filter_type:'range',
      options:  [
     0,1
      ]
    },
    {
      filter_name:"liftAccesibility",
      filter_title:"נגישות אופקית",
      filter_range_type:'מטר',
      filter_type:'range',
      options:  [
     0,10
      ]
    }
  ]

const MainScreen = (navigation, route, state) => {

  const [filterdData, setFilterdData] = useState(data);
  const [toolFilters,  setToolFilters] = useState({});
  const [config, setConfig] = useState(config_data);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    console.log('refreshing')
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  console.log("app start")
  console.log(data.length)


  
  const filterData = (filter_name, value) => {//create the filters
    console.log('filter before', toolFilters)
    setToolFilters({...toolFilters, [filter_name]: value});
    if(value === 'הכל')
      setToolFilters({...toolFilters, [filter_name]: undefined});

      console.log('filter after', toolFilters)

}
const logoPressed=()=>{//logo pressed
  console.log('logo pressed')
  Linking.openURL('https://www.ofeklift.com/')
}
const resetFilters=()=>{//reset all filters

  setToolFilters({});
  console.log('reset filters',toolFilters)
  setFilterdData([...data]);
  console.log('reset filters',filterdData)
  console.log('reset filters',data)
  console.log('reset filters',toolFilters)


}

 
const filterImgs=()=>{//filter  data btn has been pressed
console.log('filter items',toolFilters);
  const filteredData = data.filter((item) => {
    let isMatch = true;
    for (const key in toolFilters) {
      if(key==='workHeight'||key==='liftStrenght'||key==='liftAccesibility' )
      {//ragne type filter
        console.log('range filter')
        console.log('hey')
        console.log(item[key])
        console.log(toolFilters[key][0])
        if (item[key] < toolFilters[key][0]) {
          isMatch = false;
        }
      }else{//dropdown type filter
        console.log('dropdown filter')
        if (toolFilters[key] !== item[key]&&  toolFilters[key] !== undefined) {
          isMatch = false;
        }
      }
     
    }
    return isMatch;
  });
  setFilterdData([...filteredData]);
}



  return (
    <View style={styles.container}>

      <View style={styles.left}>
          
        <View style={styles.imageslider}>
     <ImagSlider data={filterdData}/>
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
          <Pressable style={styles.logobar} onPress={logoPressed}>
            <Image source={logo} style={styles.logo} />
          </Pressable>
      <View style={styles.datafilter}>
        {
          config_data.map((item,i)=>{
            return <>
            <DataFilter filterData={filterData} name={item.filter_title} type={item.filter_name} options={item.options}/>
            </>
          }
          )
        }

        
      </View>
      <View style={styles.dataRange}>
        {
        config_data_range.map((item,i)=>{
          return <>
          <DataRange filterData={filterData} name={item.filter_title} ratioType={item.filter_range_type}  type={item.filter_name} options={item.options}/>
                    </>
        }
        )
      }
        </View>

        <View style={styles.btns}>
          


        <Pressable  style={styles.fliterData}>
          <Text style={styles.filterbtntext} onPress={filterImgs}>סנן</Text>
    </Pressable>


    <Pressable  style={styles.resetdata} onPress={resetFilters}>
          <Image source={reset}  style={styles.resetimg} />
    </Pressable>

    </View>
      </View>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  logobar:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f6ae2d',
    borderWidth:3,

    paddingBottom:10,
  },
  logo:{
    width:'100%',
    height:'100%',
    resizeMode:'contain',
  },
  btns:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f6ae2d',
    borderWidth:3,
  },
  resetdata:{
    flex:1,
    backgroundColor:'#f6ae2d',
    
    borderLeftWidth:1,
    height:'100%',
  },
  resetimg:{
    flex:1,
    resizeMode:'contain',
  },
  fliterData:{
    flex:6,
    backgroundColor:'#f6ae2d',

  },
  dataRange:{
    flex:7,
  },
  filterbtntext:{
    fontSize:20,
    textAlign:'center',
  },
  filterbtn:{
    borderWidth:10,
    backgroundColor:'red',
    padding:10,
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
        
        flex:8,
        borderColor:'black',
        borderWidth:1,
        display:'grid',
        gridTemplateColumns:'1fr 1fr 1fr',
        gridTemplateRows:'1fr 1fr ',
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
      flex:6,
      width:'100%',
      height:'95%',
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
      backgroundColor:'#b9a44c',
      flexDirection:'row',  
      justifyContent:'center',
      flex:5,
      width:'100%',
      height:'95%',
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
      flex:10, 
      // make the rows heiger
      
      },
      default:{},
    }),
    
  },

  container: {
      flexDirection:'row',

      ...Platform.select({
        ios:{
          flexDirection:'colum',
          backgroundColor:'#86bbd8',
        },
        android:{
          backgroundColor:'#86bbd8',
        },
        web:{
          backgroundColor: 'white',
          alignItems:'center',

        },
        default:{
          flexDirection:'row',
          justifyContent:'space-around',

        },
      }),
      flex: 1,
      
    },
    text:{
    },
  });
  
export default MainScreen