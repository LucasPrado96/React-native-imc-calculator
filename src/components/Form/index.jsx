import { View, Text, TextInput, TouchableOpacity } from 'react-native';
   
import { useState } from 'react';
import ResultImc from './Result';
import style from './style'


export default function FormImg() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [imc, setImc] = useState(null);
    const [messageResultImc, setMessageResult] = useState("Preencha o peso e altura");
    const [buttonText, setButtontext] = useState('CALCULAR');
   
    function imcCalculator() {  
        return setImc((weight /(height * height)).toFixed(2));  

    }

    function ShowImc(){
        if(height != null && weight != null){
            imcCalculator();
            setMessageResult('Seu IMC é: ');
            setButtontext('CALCULAR NOVAMENTE');
            setWeight(null);
            setHeight(null);
            return;
        }
        setButtontext('Calcular');
        setImc(null);
        setMessageResult('Preencha o peso e altura');
       
    }

   

    return (
       <View style={[style.background, style.boxshadow]}>
            <View style={style.boxForm}>
                <Text style={style.labelInput}>Altura</Text>
                <TextInput
                placeholder='Ex. 1.75'
                keyboardType='numeric'
                onChangeText={setHeight}
                value={height}
                style={style.input}
                />

                <Text style={style.labelInput}>Peso</Text>
                <TextInput
                placeholder='Ex. 75.500'
                keyboardType='numeric'
                onChangeText={setWeight}
                value={weight}
                style={style.input}
                />

               <TouchableOpacity style={style.buttonStyle} onPress={ShowImc}>
                <Text style={style.textButton}>{buttonText}</Text>
               </TouchableOpacity>

            </View>
            <ResultImc ImcResult={imc} MessageResult={messageResultImc}/>
       </View>
    )
}   








