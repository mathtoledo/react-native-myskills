import React, { useState } from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
} from 'react-native'

import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { SkillCard } from '../components/SkillCard'

export default Home = () => {
    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState([])

    handleAddNewSkill = () => {
        setMySkills(state => [...state, newSkill])
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Matheus</Text>
            <Input placeholder="New skill" onChangeText={setNewSkill} />
            <Button onPress={handleAddNewSkill} />
            <Text style={[ styles.title, { marginVertical: 50 } ]}>My Skills</Text>
            {
                mySkills.map((skill, index) => (
                    <SkillCard key={index} skill={skill}/>
                ))
            }            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70,
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
})