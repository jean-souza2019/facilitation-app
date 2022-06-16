import React, { useState, useLayoutEffect, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { criarEstabelecimentos } from '../repository/estabelecimentosRepository';
import { useSelector } from 'react-redux';

export default function CadastroEstabelecimento(props) {
    const [form, setForm] = useState({});
    const [buttonState, setButtonState] = useState(true);
    const { navigation } = props;
    const user = useSelector(store => store.user);

    const efetuarCadastro = async () => {
        if (form.nomeEstabelecimento && form.tipo && form.endereco && form.contato) {
            try {
                await criarEstabelecimentos(form, user.uid);
                Alert.alert("Dados cadastrados com Sucesso");
                setForm({});
                navigation.navigate("Menu", { atualizar: true });
            } catch (error) {
                Alert.alert("Erro ao registrar", "Verifique os campos, em especial o endereço!");
            }
        } else {
            Alert.alert("Campos não preenchidos corretamente!");
        }
    }

    useEffect(() => {
        if (form.contato && form.contato.trim().length > 0 && form.endereco && form.endereco.trim().length > 0 &&
            form.nomeEstabelecimento && form.nomeEstabelecimento.trim().length > 0 && form.tipo && form.tipo.trim().length > 0) {
            setButtonState(false);
        } else {
            setButtonState(true);
        }
    }, [form])


    return (
        <View style={styles.container}>
            <Text style={{ textAlign: "center" }}>Informe os dados do estabelecimento:</Text>
            <Text style={{ textAlign: "center" }}>Usuário: {user.email}</Text>
            <View style={styles.input}>
                <TextInput
                    placeholder='Nome Estabelecimento'
                    value={form.nomeEstabelecimento}
                    onChangeText={(value) => setForm(Object.assign({}, form, { nomeEstabelecimento: value }))}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Contato'
                    value={form.contato}
                    onChangeText={(value) => setForm(Object.assign({}, form, { contato: value }))}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Tipo: ex: Fastfood'
                    value={form.tipo}
                    onChangeText={(value) => setForm(Object.assign({}, form, { tipo: value }))}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Endereço: Rua/AV, nome, número, bairro, cidade, estado'
                    value={form.endereco}
                    onChangeText={(value) => setForm(Object.assign({}, form, { endereco: value }))}
                />
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <Button
                        title='Cadastrar'
                        onPress={efetuarCadastro}
                        disabled={buttonState}
                    />
                </View>
            </View>

            <StatusBar style="auto" />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10
    }, input: {
        borderWidth: 1,
        borderColor: "gray",
        margin: 5,
        width: "99%",
        padding: 3,
        borderRadius: 5
    },
    linha: {
        flexDirection: "row"
    },
    coluna: {
        width: "28%",
        margin: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        backgroundColor: "#D8D8D8",
        borderRadius: 30,
    }
});