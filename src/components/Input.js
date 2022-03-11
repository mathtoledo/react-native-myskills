import React from 'react'
import { TextInput, StyleSheet } from  'react-native'

const Input = ({ onChangeText, placeholder }) => {
  return (
    <TextInput 
        style={styles.input} 
        placeholder={placeholder}
        placeholderTextColor="#555" 
        onChangeText={onChangeText}
    />
  )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
})


export { Input }