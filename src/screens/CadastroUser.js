import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import * as loginService from "../services/LoginService"

export default function CadastroUser(props) {
    const [nomeCompleto, setNomeCompleto] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [buttonState, setButtonState] = useState(false)
    const { navigation } = props

    const efetuarCadastro = async () => {
        try {
            let retorno = await loginService.createUser(email, senha)
            Alert.alert(retorno)
            navigation.navigate("Login")
        } catch (error) {
            Alert.alert("Erro ao registrar usuário", error)
        }
    }

    useEffect(() => {
        // console.log("form.nomeEstabelecimento", form)
        if (nomeCompleto.trim().length > 0 && email.trim().length > 0 &&
            senha.trim().length > 0) {
            setButtonState(false);
        } else {
            setButtonState(true);
        }
    }, [nomeCompleto, email, senha])

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>Complete seus dados</Text>
            <View style={styles.input}>
                <TextInput
                    placeholder='Nome Completo'
                    autoCapitalize='none'
                    keyboardType='default'
                    value={nomeCompleto}
                    onChangeText={(e) => setNomeCompleto(e)}

                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={(e) => setEmail(e)}

                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Senha'
                    type='password'
                    autoCapitalize='none'
                    secureTextEntry
                    value={senha}
                    onChangeText={(e) => setSenha(e)}
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
        backgroundColor: '#fff',
        padding: 10,
    }, input: {
        borderWidth: 1,
        borderColor: "gray",
        margin: 5,
        width: "60%",
        padding: 3,
        borderRadius: 5,

        alignSelf: "center",
    },
    linha: {
        flexDirection: "row",
        alignSelf: "center",
    },
    coluna: {
        marginLeft: 5,
        width: "30%",
        margin: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        backgroundColor: "#D8D8D8",
        borderRadius: 30,
    }

});