//Importações Padrão
import { View, TextInput } from "react-native";
import { styles } from "../styles/StyleSheet";
//Importações React Navigation
import { useNavigation } from "@react-navigation/native";


export default function Contact() {
  const navigation = useNavigation();

  return (
    //Imagem de fundo
    
      <View style={styles.container}>
        <View style={styles.corpo}>

        <TextInput 
          placeholder='USER'
          style={styles.inputs}
          inputMode='text'
        />
        <TextInput 
          placeholder='GMAIL'
          style={styles.inputs}
          inputMode='text'
        />
        <TextInput 
          placeholder='RECLAME AQUI!'
          style={styles.inputs}
          inputMode='text'
        />
  
        </View>
      </View>
  
  );
}
