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
<<<<<<< HEAD
                <Text>Nome: Jean Marcos</Text>
=======
                <Text>Nome: Jean Marcos de Souza</Text>
                <Text>RA: 1116403</Text>
>>>>>>> 4fcd65129e8f18bda8ca2b0c5cdaaebd69d59d83
                <Text>Desenvolvedor de Software</Text>
            </View>
            <View style={styles.sobreProg}>
                <Image style={styles.imagens} source={Edu}/>
                <Text>Nome: Eduardo Danelli</Text>
<<<<<<< HEAD
=======
                <Text>RA: 1121477</Text>
>>>>>>> 4fcd65129e8f18bda8ca2b0c5cdaaebd69d59d83
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
<<<<<<< HEAD
        height: 250, 
=======
        height: 350, 
>>>>>>> 4fcd65129e8f18bda8ca2b0c5cdaaebd69d59d83
        alignItems: 'center', 
    },
    imagens: {
        width: 120,
        height:120,
        borderRadius: 3,
        alignItems: 'center',
    },
})