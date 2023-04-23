import { View, Text,Image,StyleSheet ,TouchableOpacity, Modal, Pressable,SafeAreaView,
  ScrollView,} from 'react-native'
import bamot_misparaim_memunaot from '../../assets/bamot_misparaim_memunaot-1.jpg'
import React,{useState} from 'react'

const ImagSlider = ({data}) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [modalTitle, setModalTitle] =  useState('');
  const [modalImage, setModaImage] =  useState('');
  
const imgPressed=(item)=>{

  setModaImage(item.image)
  setModalTitle(item.name);
  setModalData(item.vehicleType);
  setModalVisible(true);
  console.log('name')
  console.log(modalImage);
  // console.log(data);
 // console.log(data[key.index].name);


}


  return (
  
    <View style={styles.dfual}>
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
            <Text style={styles.modalText}>{modalTitle}</Text>
            <Image
                style={styles.modalImageS}
                source={modalImage}
                
                />
            <Pressable
              style={[styles.buttonx, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>CLOSE</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <SafeAreaView style={styles.scrollContainer}>
    <ScrollView style={styles.scrollView}>
      

      {
        data.map((item,index)=>
        {  

          return(
            <TouchableOpacity 
            onPress={()=>imgPressed(item)}
            >
              <View key={index} style={styles.itemBox}>
              <Text>{item.name}</Text>
              <Image
                style={styles.mainImage}
                source={item.image}
                
                />
            </View>
            </TouchableOpacity>

          )

        }
        )
        
      }
     </ScrollView>
      </SafeAreaView>
    </View>
  )

}

const styles = StyleSheet.create({

  scrollView:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr',
    gridTemplateRows:'1fr 1fr 1fr',
    gridGap:10,
  },
  scrollContainer:{
    flex:1,
    display:'flex',
    alignSelf:'stretch'
  },

    dfual:{
      flex:1,
      display:'flex',
    },

    modalImageS:{
      flex:1,
      resizeMode:'contain',
      width:'100%',
      height:100,
      alignSelf:'stretch',
      borderWidth:1,
      
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
   
   modalView: {
    margin: 20,
    backgroundColor: '#f26419',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    alignSelf:'stretch',
    height:'50%',   
    },
      container: {
      borderWidth:2 , 
      borderColor:'blue',
      flex:1,
      display:'grid',
      gridTemplateColumns:'1fr 1fr 1fr',
      gridTemplateRows:'1fr 1fr 1fr',
      gridGap:10,
    },
    mainImage: {
        flex:1,
        resizeMode:'contain',
        width:'100%',
        height:10,
        alignSelf:'stretch',
        borderWidth:1,
        

   
    },

    itemBox:{

      flex:2,
      borderWidth:2,

    },

    
  });

export default ImagSlider