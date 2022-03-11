import React from 'react'
import { 
  TouchableOpacity, 
  TouchableOpacityProps,
  Text, 
  Platform,
  StyleSheet 
} from  'react-native'

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

const Button = ({ title, ...rest } : ButtonProps) => {
  return (
    <TouchableOpacity 
      style={styles.button} 
      activeOpacity={.7}
      {...rest}
    >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A370F7',
        padding: Platform.OS === 'ios' ? 20 : 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 17,
        fontWeight: 'bold',
    },
})

export default Button
