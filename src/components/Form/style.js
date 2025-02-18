
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    background:{
        backgroundColor: '#f5f5f5',
        marginTop: 30,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        elevation: 20,
        
    },
    boxForm:{
        alignItems: 'center',
        height: 'auto',
        padding: 20,
        height: 250,
        width: '100%',
        
    },

    labelInput:{
        fontSize: 15,
        fontWeight: 'bold',
        color: "#f0053c",
        
    },
    input:{
        
        border: 'none',
        backgroundColor: "#fafcfa",
        borderRadius: 5,
        marginTop: 3,
        width: '90%',
        height: 40, 
        backgroundColor: '#c0c9d1',
        padding: 8,
        placeholderTextColor: '#919191',
        
    },

    buttonStyle:{
        backgroundColor: "#f0053c",
        borderRadius: 5,
        marginTop: 20,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40, 
        
    },
    textButton:{
        fontSize: 20,
        fontWeight: 700,
        color: '#f5f5f5',
    },
    errorMessage:{
        fontSize: 10,
        fontWeight: 'bold',
        color: "#f0053c",
    }
    

})


export default styles