//Importações
import { View, Button } from 'react-native';
import styles from '../styles/StyleSheet';
import { useNavigation } from "@react-navigation/native";

export default function LoginButton() {
  const navigation = useNavigation();

  pressButton = () => {
    alert("Function not found:' (")
  }

  return (

      //Botão
      <View style={styles.bodyContainer}>
        <Button
          title='Entrar'
          color= 'blue'
          onPress={pressButton}
        />
        
        <Button title="About" onPress={() => navigation.navigate("About")} color= 'blue' />
      <Button title="Contact" onPress={() => navigation.navigate("Contact")} color= 'blue' />
      <Button title="Home" onPress={() => navigation.navigate("Home")} color= 'blue' />
      </View>
    
  );
}
