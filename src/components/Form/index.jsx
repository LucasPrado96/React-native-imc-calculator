import { View, Text, TextInput, TouchableOpacity, Keyboard, Pressable } from 'react-native';
   
import { useState } from 'react';
import ResultImc from './Result';
import style from './style'


export default function FormImg() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [imc, setImc] = useState('');
    const [messageResultImc, setMessageResult] = useState("Preencha o peso e altura");
    const [buttonText, setButtontext] = useState('CALCULAR');
    const [ errorMessage, setErrorMessage] = useState(null)


   
    function imcCalculator() {  
        let heightFormated = height.replace(',', '.')
        let weightFormated = weight.replace(',', '.')
        return setImc((weightFormated /(heightFormated * heightFormated)).toFixed(2));  

    }

    function verificationIfInputIsNull(){
        if(imc == ''){
            
            setErrorMessage("Campo Obrigatório*")
           
        }
    }

    function ShowImc(){
        if(height !== '' && weight !== ''){
            imcCalculator();
            setMessageResult('Seu IMC é: ');
            setButtontext('CALCULAR NOVAMENTE');
            setWeight('');
            setHeight('');
            setErrorMessage(null)
            return;
        }
        setButtontext('Calcular');
        setImc(null);
        setMessageResult('Preencha o peso e altura');
        verificationIfInputIsNull()
       
    }

   

    return (
       <View  style={[style.background, style.boxshadow]}>
            <Pressable  style={style.boxForm}>
                <Text style={style.labelInput}>Altura</Text>
                <TextInput
                placeholder='Ex. 1.75'
                keyboardType='numeric'
                onChangeText={setHeight}
                value={height}
                style={style.input}
                
                />
                <Text style={style.errorMessage}>{errorMessage}</Text>

                <Text style={style.labelInput}>Peso</Text>
                <TextInput
                placeholder='Ex. 75.500'
                keyboardType='numeric'
                onChangeText={setWeight}
                value={weight}
                style={style.input}
                />
                <Text style={style.errorMessage}>{errorMessage}</Text>

               <TouchableOpacity style={style.buttonStyle} onPress={ShowImc}>
                <Text style={style.textButton}>{buttonText}</Text>
               </TouchableOpacity>

            </Pressable>
            <ResultImc ImcResult={imc} MessageResult={messageResultImc}/>
       </View>
    )
}   








