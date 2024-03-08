//Importações Padrão
import { View, TextInput, Button } from "react-native";
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

<Button title="About" onPress={() => navigation.navigate("About")} color= 'blue' />
      <Button title="Home" onPress={() => navigation.navigate("Home")} color= 'blue' />
      <Button title="Login" onPress={() => navigation.navigate("Login")} color= 'blue' />
  
        </View>
      </View>
  
  );
}
