import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text, 
    FlatList,
    StyleSheet,
    Platform,
} from 'react-native'

import Button from '../components/Button'
import Input from '../components/Input'
import SkillCard from '../components/SkillCard'

interface Skill {
    id: string
    name: string
}

const Home = () => {
    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState<Skill[]>([])
    const [greeting, setGreeting] = useState('')

    const handleAddNewSkill = () => {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }
        setMySkills(state => [...state, data])
    }

    const handleRemoveSkill = (id: string) => {
        setMySkills(state => state.filter(
            skill => skill.id !== id
        ))
    }
    
    useEffect(() => {
        const currentHour = new Date().getHours()
        if (currentHour < 12) {
            setGreeting('Good morning')
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Good afternoon')
        } else {
            setGreeting('Good night')
        }
    }, [])

    return (
        <View style={styles.container}>           
            <Text style={styles.title}>Welcome, Matheus</Text>
            <Text style={styles.greetings}>{greeting}</Text>

            <Input placeholder="New skill" onChangeText={setNewSkill} />
            <Button title="Add" onPress={handleAddNewSkill} />
            
            <Text style={[ styles.title, { marginVertical: 50 } ]}>My Skills</Text>
            <FlatList 
                data={mySkills} 
                keyExtractor={skill => skill.id} 
                renderItem={({ item: skill }) => (
                    <SkillCard skillName={skill.name} onPress={() => handleRemoveSkill(skill.id)} />
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
        paddingVertical: Platform.OS === 'ios' ? 70 : 20,
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

export default Home
