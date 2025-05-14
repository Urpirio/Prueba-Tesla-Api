import { Button, Image,Text,TouchableOpacity,View } from "react-native"
import { CardStyle } from "../styles/CardStyle";



export default function Card({Img,Modelo,FunctionPress}) {
  return (
    <View style={CardStyle.CardHome}  >
        <View>
            <Image source={{uri: Img}} style={{height: 150, width: 300,objectFit: 'contain'}}></Image>
            <Text style= {CardStyle.TextCardHome}>{Modelo}</Text>
        </View>
        <View>
            {/* <Button style={CardStyle.ButtonCardHome} onPress={()=>{}} title="Show more about"/> */}
            <TouchableOpacity style={CardStyle.ButtonCardHome} 
                onPress={()=>{
                    FunctionPress()
                }}>

                <Text style ={CardStyle.TextButton} >Show more about</Text>
                
            </TouchableOpacity>
        </View>

    </View>
  )
};


