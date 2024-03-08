//Importações Padrão
import { View, ImageBackground } from "react-native";
import styles from "../styles/StyleSheet";
//Importações de Components
import LoginButton from "../components/LoginButton";
import LoginImage from "../components/LoginImage";
import LoginInput from "../components/LoginInput";
import LoginText from "../components/LoginText";


export default function LoginImageBackground() {
  return (

      //Imagem de fundo
      <ImageBackground
        source={require("../assets/images/fundo2.jpg")}
        style={styles.fundo}
      >
        <View style={styles.container}>
          {/* Meu body/Outros Components */}
          <LoginImage/>
          <LoginText/>
          <LoginInput/>
          <LoginButton/>
        </View>
      </ImageBackground>
    
  );
}
