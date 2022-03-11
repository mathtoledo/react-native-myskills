import React from 'react'
import { 
  TouchableOpacity, 
  TouchableOpacityProps,
  Text, 
  Platform, 
  StyleSheet 
} from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
  skillName: string
}

const SkillCard = ({ skillName, ...rest } : SkillCardProps) => {
  return (
    <TouchableOpacity 
      style={styles.buttonSkill}
      {...rest}
    >
        <Text style={styles.textSkill}>{skillName}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10,
    },
    textSkill: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default SkillCard
