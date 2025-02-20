import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Vibration
 
} from "react-native";

import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring 
} from 'react-native-reanimated';

import { useState } from "react";
import ResultImc from "./Result";
import style from "./style";

export default function FormImg() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [imc, setImc] = useState("");
  const [messageResultImc, setMessageResult] = useState(
    "Preencha o peso e altura"
  );
  const [buttonText, setButtontext] = useState("CALCULAR");
  const [errorMessage, setErrorMessage] = useState(null);

  const shake = useSharedValue(0)



  function imcCalculator() {
    let heightFormated = height.replace(",", ".");
    let weightFormated = weight.replace(",", ".");
    return setImc(
      (weightFormated / (heightFormated * heightFormated)).toFixed(2)
    );
  }

  const shakeAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: withSpring(shake.value, {stiffness: 800, damping: 10})}
      ],
    }
  })

  function verificationIfInputIsNull() {
    if (imc == "") {
      setErrorMessage("Campo Obrigatório*");
      shake.value = 2
      setTimeout(() => {
        shake.value = -2;
      }, 50);
      Vibration.vibrate(200)
    }
  }

  function ShowImc() {
    if (height !== "" && weight !== "") {
      imcCalculator();
      setMessageResult("Seu IMC é: ");
      setButtontext("CALCULAR NOVAMENTE");
      setWeight("");
      setHeight("");
      setErrorMessage(null);
    } else {
      setButtontext("Calcular");
      setImc('');
      setMessageResult("Preencha o peso e altura");
      verificationIfInputIsNull();
    }
  }

  return (
    <View style={[style.background, style.boxshadow]}>
        { imc == '' ? 
        <Animated.View Keyboard={Keyboard.dismiss} style={[style.boxForm, shakeAnimation]}>
        <Text style={style.labelInput}>Altura</Text>
        <TextInput
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height}
          style={style.input}
        />
        <Text style={style.errorMessage}>{errorMessage}</Text>

        <Text style={style.labelInput}>Peso</Text>
        <TextInput
          placeholder="Ex. 75.500"
          keyboardType="numeric"
          onChangeText={setWeight}
          value={weight}
          style={style.input}
        />
        <Text style={style.errorMessage}>{errorMessage}</Text>

        <TouchableOpacity style={style.buttonStyle} onPress={ShowImc}>
          <Text style={style.textButton}>{buttonText}</Text>
        </TouchableOpacity>
      </Animated.View> 
      : 
      <View style={[style.background, style.boxshadow]}>

      <ResultImc ImcResult={imc} MessageResult={messageResultImc} />

       <TouchableOpacity style={style.buttonStyle} onPress={ShowImc}>
        <Text style={style.textButton}>{buttonText}</Text>
      </TouchableOpacity>
      
      </View> }

    </View>
  );
}
