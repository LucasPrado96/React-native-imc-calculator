
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    viewContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton:{
        fontSize: 15,
        fontWeight: 700,
        color: 'black',
    },
    imc: {
        fontSize: 25,
        fontWeight: 800,
        color: 'black',
    }, 
    boxButton:{
        display: 'flex',
        
        width: '100%',
        marginBottom: 20,
    },
    button:{
        width: '100%',
        backgroundColor: '#3091d1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        paddingHorizontal: 50,
    },
    textButtonShare:{
        fontSize: 14,
        fontWeight: 800,
        color: '#fff'
    },
    

})


export default styles