//Importações
import { View, Image } from 'react-native';
import styles from '../styles/StyleSheet';

export default function LoginImage() {

  return (
    //My Logo
    <View style={styles.headerContainer}>
      <Image
          source={require('../assets/images/fundo3.jpg')}
          style={styles.logo}
          resizeMode='cover'
      />
    </View>

  );
}