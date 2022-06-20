import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import { deletarEstabelecimento } from '../repository/estabelecimentosRepository';
export default function Registro(props) {
    const data = props.dados;

    const excluirEstabelecimento = () => {
        Alert.alert("Deletar", "Esses dados serão apagados para sempre, deseja prosseguir?", [
            {
                text: "Não",
                style: "cancelar"
            },
            {
                text: "Sim", onPress: async () => {
                    try {
                        await deletarEstabelecimento(data.key);
                        Alert.alert("Registro excluido com sucesso");
                        props.navigation.navigate("Menu", { atualizar: true });
                    } catch (error) {
                        Alert.alert("Você não possui permissão para excluir esse registro!");
                    }
                }
            }
        ])
    }


    return (
        <View style={styles.container}>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <Text style={styles.campo}>Estabelecimento: </Text>
                    <Text style={styles.campoField}>{data.nomeEstabelecimento}</Text>
                </View>
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <Text style={styles.campo}>Tipo:</Text>
                    <Text style={styles.campoField}>{data.tipo}</Text>
                </View>
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <Text style={styles.campo}>Endereço:</Text>
                    <Text style={styles.campoField}>{data.endereco}</Text>
                </View>
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <Text style={styles.campo}>Contato:</Text>
                    <Text style={styles.campoField}>{data.contato}</Text>
                </View>
            </View>
            <View style={styles.linha}>
                {/* <Image source={ } /> */}
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                </View>
                <View style={styles.coluna}>
                </View>
                <View style={styles.coluna}>
                </View>
                <View style={styles.coluna}>
                </View>
                <View style={styles.coluna}>
                    <Button title='Deletar' color={'red'} onPress={excluirEstabelecimento} />
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    button: { borderRadius: 10 },
    container: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        margin: 5
    },
    linha: {
        flexDirection: "row"
    },
    coluna: {
        flex: 1,
        flexDirection: "row"
    },
    campo: {
        width: 120
    },
    campoField: {
        width: 260
    },

})