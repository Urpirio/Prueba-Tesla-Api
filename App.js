
import { Loginstyles } from './styles/LoginStyle';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Modal, ScrollView, Text, TouchableHighlight, View,VirtualizedList } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import { ModalStyle } from './styles/ModalStyle';

export default function App() {

  const [ModalStatus,setModalStatus] = useState(false)
  const [titleModal,setTitleModal] = useState();

  const ShowModal  = ({Modelo}) => {
    setModalStatus(!ModalStatus);
    setTitleModal(Modelo)
  }; 

  const [content, setcontent] = useState([]);
  const [State, setState] = useState(false);

  useEffect(()=>{
    
    fetch('https://randomapi.com/api/afa7c82c45b09c35c94b81a2c02561cb')
    .then(res => res.json())
    .then( async (Data)=>{
        setState(true);
      setcontent(Data.results[0].Cars)
    })
    .catch((error)=>{
      console("Tenemos un " + error)
    })

  })


  if(State === true){
    

    return (
      <SafeAreaProvider>
        <SafeAreaView style={Loginstyles.container} >

         <ScrollView style={{width:'100%',flexDirection: 'column',padding: 5}}>
              <VirtualizedList
                data={content}
                renderItem={Data => <Card 
                  Modelo={Data.item.Modelo} 
                  Img={Data.item.Img}
                  FunctionPress={()=>{
                    ShowModal({Modelo: Data.item.Modelo})
                  }}
                  />}


                keyExtractor={item => item.id}
                key={item => item.id}
                getItem={(data,index)=> data[index]}
                getItemCount={(data)=> data.length}
              />
          </ScrollView>
           
        </SafeAreaView>

        <Modal visible={ModalStatus} transparent={true} >

          <View style={ModalStyle.ModalContainer}>

            <View style={ModalStyle.BackDrop}></View>

            <View style={ModalStyle.ContainerInModal}>
              <Text style={ModalStyle.TextTitle}>{titleModal}</Text>

              <TouchableHighlight style={ModalStyle.BtnCerrarModal} onPress={()=>{setModalStatus(!ModalStatus)}} >
                <Text style={ModalStyle.TextBtnCerrar}>Cerrar</Text>
              </TouchableHighlight>
            </View>

          </View>

        </Modal>
        <StatusBar style="auto" />
      </SafeAreaProvider>
      
    );
  }

  if(State === false){
    return(
      <View style={Loginstyles.container}>
        <Text>
          Cargando...
        </Text>

      </View>
    )
  }
}


