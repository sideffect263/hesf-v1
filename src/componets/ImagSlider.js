import { View, Text,Image,StyleSheet ,TouchableOpacity, Modal, Pressable,SafeAreaView,
  ScrollView,FlatList} from 'react-native'
import bamot_misparaim_memunaot from '../../assets/bamot_misparaim_memunaot-1.jpg'
import React,{useState} from 'react'


var itemIndex = 0;


//start of main
const ImagSlider = ({data}) => {

  const [itemModel, setItemModel] = useState();

  const Item = ({item}) => (
    
    <View style={styles.itemBox}>

  <TouchableOpacity 
  onPress={()=>imgPressed(item)}
  >


    <View style={
      {
        flex:1,
        backgroundColor: item.color, 
        marginVertical:'0.4%',    
        flexDirection:'row',
        justifyContent:'space-around',
        borderWidth:2,
        borderColor:'white',
      }
    }>
  
<View style={styles.itemText}>
<Text>{item.name}</Text>
</View>
<View style={styles.itemImage}>
                <Image
                  style={styles.mainImage}
                  source={item.image}
                  />
    </View>


                  </View>


   
    </TouchableOpacity>
    </View>
  );
  
  
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [modalTitle, setModalTitle] =  useState('');
  const [modalImage, setModaImage] =  useState('');
  
const imgPressed=(item)=>{

  setModaImage(item.image)
  setModalTitle(item.name);
  setModalData(item);
  setModalVisible(true);
  console.log('name')
  console.log(modalImage);
  // console.log(data);
 // console.log(data[key.index].name);


}


  return (
  
    <View style={styles.dfual}>
      {
        //when an item pressed this shows up
      }
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={styles.itemView}>
            <View style={styles.itemDataCard}>
            <Text style={styles.modalTextTitle}>{modalData.name}</Text>
            <Text style={styles.modalText}>{modalData.vehicleType}</Text>
            <Text style={styles.modalText}>{modalData.engType}</Text>
            <Text style={styles.modalText}>{modalData.workLocation}</Text>
            <Text style={styles.modalText}>{modalData.workHeight}</Text>
            <Text style={styles.modalText}>{modalData.liftStrenght}</Text>
            <Text style={styles.modalText}>{modalData.accessibility}</Text>
            <Text style={styles.modalText}>{modalData.groundType}</Text>
            <Text style={styles.modalText}>{modalData.groundLevel}</Text>
            </View>

            <View style={styles.itemImageView}>
            <Image
                style={styles.modalImageS}
                source={modalImage}
                
                />
                </View>
                </View>
            <Pressable
              style={[styles.buttonx, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>CLOSE</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
    
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={data}
        renderItem={({item}) =>
         <Item item={item}
          />}
        keyExtractor={item => item.id}
      />
     </SafeAreaView>
      </View>
      </ScrollView>
    </View>
  )

}

const styles = StyleSheet.create({

  scrollContainer:{
    borderWidth:2,
    flexDirection:'column',
    flex:1,
  },
  safeContainer:{
    borderWidth:2,
    flexDirection:'column',
    flex:1,
  },
  itemDataCard:{
    flex:4,
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    alignSelf:'stretch',
    borderWidth:2,
    borderColor:'red',
  },
  itemImage:{
    flex:1,
    height:200,
    backgroundColor:'white',
    justifyContent:'center',
  },
  itemText:{
    flex:3,
  },
  itemImageView:{
    flex:2,
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    alignSelf:'stretch',
    borderWidth:2,
    borderColor:'red',
  },
  


  itemView:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    alignSelf:'stretch',
    borderWidth:2,
    borderColor:'red',
  },

    dfual:{
      flex:1,
      display:'flex',
    },

    modalImageS:{
      flex:1,
      resizeMode:'contain',
      alignSelf:'stretch',
      borderWidth:1,
      
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      borderWidth:2,
    },
   
   modalView: {
    margin: 20,
    backgroundColor: '#f26419',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    alignSelf:'center',
    height:'50%',   
    width:'60%',
    shadowOffset: {
      width: 0,
      height: 2,
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },  

    flexDirection:'column',
    },
      container: {
        backgroundColor:'white',
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        }
    },
    mainImage: {
      flex:1,
      resizeMode:'contain',
      borderWidth:2,
    },

    itemBox:{
     flex:1,
     backgroundColor:'#566e3d',
    },
    jlg:{
    },
    manitou:{

    },
    genie:{
    },
    item: {
      flex:1,
      backgroundColor: '#86bbd8', 
      marginVertical:'0.4%',    
      flexDirection:'row',
      justifyContent:'space-around',
      borderWidth:2,
      borderColor:'white',
    },
    modalTextTitle:{
      fontSize:20,
      fontWeight:'bold',
      color:'white',
      textDecorationLine:'underline',
    },
    modalText:{
      fontSize:15,
      fontWeight:'bold',
      color:'white',
    },
    

    
  });

export default ImagSlider