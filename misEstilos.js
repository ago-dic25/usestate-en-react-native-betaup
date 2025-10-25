import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0a192f', 
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    titulo: {
      color: '#ccd6f6',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '70%', 
      borderColor: '#304a6e',
      backgroundColor: '#172a45',
      borderWidth: 1,
      borderRadius: 20, 
      padding: 12,
      marginBottom: 20,
      color: '#ccd6f6',
      textAlign: 'center',
    },
    buttonContainer: {
      width: '70%',
    },
    button: {
      borderRadius: 25, 
      paddingVertical: 12,
      alignItems: 'center',
      marginBottom: 10,
    },
    blueButton: {
      backgroundColor: '#367AF6',
    },
    greenButton: {
      backgroundColor: '#00B87C', 
    },
    purpleButton: {
      backgroundColor: '#8A2BE2',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    mensaje: {
      color: '#64ffda', 
      fontSize: 20,
      marginVertical: 20,
      fontWeight: 'bold',
    },
    contador: {
      color: '#8892b0', 
      marginTop: 15,
      fontSize: 14,
    },
});