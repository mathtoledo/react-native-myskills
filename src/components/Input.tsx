import React from 'react'
import { 
  TextInput, 
  TextInputProps, 
  Platform, 
  StyleSheet 
} from  'react-native'

type InputProps = TextInputProps

const Input = ({ ...rest }: InputProps ) => {
  return (
    <TextInput 
        style={styles.input} 
        placeholderTextColor="#555" 
        {...rest}
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


export default Input
