//Importações
import { View, Button } from 'react-native';
import styles from '../styles/StyleSheet';

export default function LoginButton() {

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
      </View>
    
  );
}
