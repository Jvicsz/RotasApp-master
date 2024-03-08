//Importações Padrão
import { View, ImageBackground, Text, Button } from "react-native";
import { styles } from "../styles/StyleSheet";
//Importações React Navigation
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    //Imagem de fundo
    <ImageBackground
      source={require("../assets/images/fundo1.jpg")}
      style={styles.fundo}
    >
<Button title="About" onPress={() => navigation.navigate("About")} color= 'blue' />
      <Button title="Contact" onPress={() => navigation.navigate("Contact")} color= 'blue' />
      <Button title="Login" onPress={() => navigation.navigate("Login")} color= 'blue' />
      <View style={styles.container}>
        <Text style={styles.hey}>Cachorro Feliz</Text>
      </View>

      
    </ImageBackground>
  );
}
