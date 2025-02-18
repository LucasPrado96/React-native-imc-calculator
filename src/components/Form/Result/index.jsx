import { Text, View, Share, TouchableOpacity } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
  async function onShare() {
    const result = await Share.share({
      message: "Meu IMC é:" + props.ImcResult,
    });
  }

  return (
    <View style={styles.viewContainer}>
      <View style={styles.boxButton}>

        <Text style={styles.textButton}>{props.MessageResult}</Text>
        <Text style={styles.imc}>{props.ImcResult}</Text>

        <TouchableOpacity onPress={onShare} style={styles.button}>
          <Text style={styles.textButtonShare}>Compartilhar</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}
