//Importações Padrão
import { View, Text, Image } from "react-native";
import { styles } from "../styles/styleSheet";
//Importações React Navigation
import { useNavigation } from "@react-navigation/native";


export default function About() {
  const navigation = useNavigation();

  return (
    
      <View style={styles.container}>
        <View style={styles.corpo}>

            <Image
                source={require('../assets/images/palmeiras.png')}
                style={styles.obra}
                resizeMode='cover'
            />

            <View style={styles.descricao}>
                <Text style={{textAlign: 'justify'}}> Aqui é PALMEIRAS
                </Text>
            </View>
            
        </View>
      </View>
  
  );
}