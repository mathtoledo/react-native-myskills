import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text, 
    FlatList,
    StyleSheet,
} from 'react-native'

import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { SkillCard } from '../components/SkillCard'

export default Home = () => {
    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState([])
    const [gretting, setGretting] = useState('')

    handleAddNewSkill = () => {
        setMySkills(state => [...state, newSkill])
    }
    
    useEffect(() => {
        const currentHour = new Date().getHours()
        if (currentHour < 12) {
            setGretting('Good morning')
        } else if (currentHour >= 12 && currentHour < 18) {
            setGretting('Good afternoon')
        } else {
            setGretting('Good night')
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Matheus</Text>
            <Text style={styles.greetings}>{gretting}</Text>

            <Input placeholder="New skill" onChangeText={setNewSkill} />
            <Button onPress={handleAddNewSkill} />
            
            <Text style={[ styles.title, { marginVertical: 50 } ]}>My Skills</Text>
            <FlatList 
                data={mySkills} 
                keyExtractor={(_, index) => index} 
                renderItem={({ item: skill }) => (
                    <SkillCard skill={skill}/>
                )}
            />                 
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
    greetings: {
        color: "#FFF",
    }
})