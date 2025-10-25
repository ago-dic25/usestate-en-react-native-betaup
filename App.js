import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './misEstilos'; // Importa los estilos

export default function App() {

  // Estados
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [contador, setContador] = useState(0);

  // Funcion para limpiar campos
  const limpiar = () => {
    setNombre('');
    setMensaje('');
  };

  // Funcion para cambiar el emoji segun longitud
  const obtenerEmoji = () => {
    if (nombre.length === 0) return '🤔';
    if (nombre.length < 4) return '🙂';
    if (nombre.length < 8) return '😄';
    return '🤩';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Captura tu nombre</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        placeholderTextColor="#8892b0"
        value={nombre}
        onChangeText={(texto) => setNombre(texto.replace(/\s/g, ''))}
      />


      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.blueButton]}
          onPress={() => setMensaje(`Hola ${nombre}!`)}
        >
          <Text style={styles.buttonText}>Mostrar mensaje</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.greenButton]}
          onPress={limpiar}
        >
          <Text style={styles.buttonText}>Limpiar</Text>
        </TouchableOpacity>

        {/* Boton del contador agregado */}
        <TouchableOpacity
          style={[styles.button, styles.purpleButton]}
          onPress={() => setContador(contador + 1)}
        >
          <Text style={styles.buttonText}>Contador ({contador})</Text>
        </TouchableOpacity>
      </View>


      {/* Mensaje */}
      {mensaje !== '' && (
        <Text style={styles.mensaje}>{mensaje}</Text>
      )}

      {/* Contador de caracteres */}
      <Text style={styles.contador}>
        Caracteres: {nombre.length} {obtenerEmoji()}
      </Text>

      <StatusBar style="light" />
    </View>
  );
}

