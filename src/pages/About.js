//Importações Padrão
import { View, Text, Image, Button } from "react-native";
import { styles } from "../styles/StyleSheet";
//Importações React Navigation
import { useNavigation } from "@react-navigation/native";


export default function About() {
  const navigation = useNavigation();

  return (
    
      <View style={styles.container}>
        <View style={styles.corpo}>

            <Image
                source={require('../assets/images/cao.jpg')}
                style={styles.obra}
                resizeMode='cover'
            />

            <View style={styles.descricao}>
                <Text style={{textAlign: 'justify'}}> Bom Dia Amiguinhos
                </Text>
            </View>
            
            <Button title="Home" onPress={() => navigation.navigate("Home")} color= 'blue' />
      <Button title="Contact" onPress={() => navigation.navigate("Contact")} color= 'blue' />
      <Button title="Login" onPress={() => navigation.navigate("Login")} color= 'blue' />
        </View>
      </View>
  
  );
}
