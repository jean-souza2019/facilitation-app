import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function FAQ() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>FAQ</Text>
            <Text style={styles.texto}>Funcionalidades do APP</Text>
            <Text style={styles.texto2}>  Este App foi criado com o intuíto de facilitar a vida das pessoas, podendo abrir o mapa e ver as Lojas/Farmácias/Mercados e pontos de venda mais pertos de você, podendo consultar localização em tempo real e seu contato.</Text>
            <Text style={styles.texto2}></Text>
            <Text style={styles.texto2}>  Para criação do aplicativo, foi utilizado o EXPO como base de desenvolvimento. Optamos por utilizar o mesmo para renderizar tanto em Android como IOS utilizando o mesmo código fonte.</Text>
            <Text style={styles.texto2}>Modelamos arquitetura SSCR - Screens, Services, Components e Repositorys.</Text>
            <Text style={styles.texto2}>Screens: Centraliza-se todas as telas do APP.</Text>
            <Text style={styles.texto2}>Services: Contém todas as dependencias externas do projeto, como conexão com banco, estados globais, serviços de Geolocalização, entre outros.</Text>
            <Text style={styles.texto2}>Components: Component é utilizado para montar elementos de flatlist onde o mesmo recebe via props os dados.</Text>
            <Text style={styles.texto2}>Repositorys: Onde centralizamos todas as conexões/querys com o banco de dados.</Text>
            <Text style={styles.texto2}>Assets: Onde centralizamos todas as imagens e icones do APP.</Text>
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
        // fontWeight: 'bold',
    },
})