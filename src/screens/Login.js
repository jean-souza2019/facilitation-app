import React, { useState, useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';
import * as loginService from "../services/LoginService"
import { CheckBox } from '@rneui/themed';

import AsyncStorage from "@react-native-async-storage/async-storage"
import { useSelector, useDispatch } from 'react-redux';
import * as UserAction from '../services/actions/user.action'
import facilitation from '../../assets/facilitation.png';


export default function Login(props) {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [lembreme, setLembreme] = useState(false);
    const dispatch = useDispatch()

    const { navigation } = props

    const verificarLembreme = async () => {
        let emailMemory = await AsyncStorage.getItem("email")
        let senhaMemory = await AsyncStorage.getItem("senha")
        if (emailMemory) {
            setEmail(emailMemory)
            setSenha(senhaMemory)
            setLembreme(true)
        }
    }

    useLayoutEffect(() => {
        verificarLembreme()
    }, [])

    const efetuarLogin = async () => {

        try {
            let user = await loginService.login(email, senha)
            dispatch(UserAction.setUser(user))

            navigation.replace("Menu")
        } catch (error) {
            Alert.alert("Erro ao efetuar Loging", error)
        }
    }


    const lembrar = async () => {
        setLembreme(!lembreme)

        if (!lembreme) {
            await AsyncStorage.setItem('email', email)
            await AsyncStorage.setItem("senha", senha)

        } else {
            await AsyncStorage.removeItem("email")
            await AsyncStorage.removeItem("senha")
        }
    }

    return (
        <View style={styles.container}>
            <View >
                <Image
                style={styles.image}
                    source={require('../../assets/facilitation.png')
                    } />
            </ View>
            <View style={styles.input}>
                <TextInput
                    placeholder='e-mail'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={(e) => setEmail(e)}

                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='senha'
                    autoCapitalize='none'
                    secureTextEntry
                    value={senha}
                    onChangeText={(e) => setSenha(e)}
                />
            </View>
            <View>
                <CheckBox
                    center
                    title="Lembre-me"
                    checked={lembreme}
                    onPress={lembrar}
                />
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <Button
                        title='Entrar'
                        onPress={efetuarLogin}
                    />
                </View>
                <View style={styles.coluna}>
                    <Button
                        title='Cadastrar'
                        onPress={() => navigation.navigate("CadastroUser")}
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
        alignItems: 'center',
        justifyContent: 'center',
    }, input: {
        borderWidth: 1,
        borderColor: "gray",
        margin: 5,
        width: "60%",
        padding: 3,
        borderRadius: 5
    },
    linha: {
        flexDirection: "row",
    },
    coluna: {
        width: "28%",
        margin: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        backgroundColor: "#D8D8D8",
        borderRadius: "30px",
    },
    image:{
        width: 300,
        height: 200,
    }

});