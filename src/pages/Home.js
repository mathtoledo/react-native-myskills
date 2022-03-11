import React, { useState } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform ,
    TouchableOpacity,
} from 'react-native'

export default Home = () => {
    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState([])

    handleAddNewSkill = () => {
        setMySkills(state => [...state, newSkill])
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Matheus</Text>
            <TextInput 
                style={styles.input} 
                placeholder="New skill" 
                placeholderTextColor="#555" 
                onChangeText={setNewSkill}
            />
            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={.7}
                onPress={handleAddNewSkill}
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <Text style={[ styles.title, { marginVertical: 50 } ]}>My Skills</Text>
            {
                mySkills.map((skill, index) => (
                    <TouchableOpacity style={styles.buttonSkill}>
                        <Text key={index} style={styles.textSkill}>{skill}</Text>
                    </TouchableOpacity>
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
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
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