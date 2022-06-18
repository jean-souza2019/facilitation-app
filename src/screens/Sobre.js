import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Jean from '../../assets/jean.jpg';
import Edu from '../../assets/edu.jpg'; 

export default function Sobre(){

    return (
        <View style={styles.view}>
            <Text style={styles.titulo}>Quem Somos</Text>
            <View style={styles.sobreProg}>
                <Image style={styles.imagens} source={Jean}/>
                <Text>Nome: Jean Marcos</Text>
                <Text>Desenvolvedor de Software</Text>
            </View>
            <View style={styles.sobreProg}>
                <Image style={styles.imagens} source={Edu}/>
                <Text>Nome: Eduardo Danelli</Text>
                <Text>Desenvolvedor de Software</Text>
                 <Text></Text> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 30,
    },
    titulo: {
        color: 'lightblue',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    texto: {
        color: 'lightblue',
        fontSize: 16,
        fontWeight: 'italic',
        marginBottom: 20,
        textAlign: 'center'
    },
    sobreProg: {
        backgroundColor: '#fff',
        padding: 25,
        margin: 3,
        width: 300,
        height: 250, 
        alignItems: 'center', 
    },
    imagens: {
        width: 120,
        height:120,
        borderRadius: 3,
        alignItems: 'center',
    },
})