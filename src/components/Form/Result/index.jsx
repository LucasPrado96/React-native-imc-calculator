import {Text, View} from 'react-native'
import styles from './style'

export default function ResultImc(props){

    return(
    <View>
        <Text style={styles.textButton}>{props.MessageResult}</Text>
        <Text style={styles.imc}>{props.ImcResult}</Text>
    </View>
    )
}