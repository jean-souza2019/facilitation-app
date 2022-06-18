import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function FAQ(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>FAQ</Text>
            <Text style={styles.texto}>Funcionalidades do App</Text>
            <Text style={styles.texto2}>Este App foi criado com o intuíto de facilitar a localização de estabelecimentos próximos que os usuários desejem encontrar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 25,
    },
    titulo: {
        color: 'lightblue',
        fontSize: 26,
        fontWeight: 'bold',
    },
    texto: {
        color: 'black',
        justifyContent: 'center',
        margin: 5,
        fontSize: 20,
        fontWeight: 'bold',
    },
    texto2: {
        color: 'black',
        justifyContent: 'center',
        margin: 5,
        fontSize: 15,
        fontWeight: 'bold',
    },
})