import React, { useState, useLayoutEffect, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';
import { criarEstabelecimentos } from '../repository/estabelecimentosRepository';
import { useSelector } from 'react-redux';
import { RadioButton } from 'react-native-paper';

export default function CadastroEstabelecimento(props) {
    const [form, setForm] = useState({});
    const [buttonState, setButtonState] = useState(true);
    const { navigation } = props;
    const user = useSelector(store => store.user);
    const [checked, setChecked] = useState('iconMarket');


    const efetuarCadastro = async () => {
        if (form.nomeEstabelecimento && form.tipo && form.endereco && form.contato && checked) {
            try {
                form.icon = checked;
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
            form.nomeEstabelecimento && form.nomeEstabelecimento.trim().length > 0
            && checked && checked.trim().length > 0) {
            setButtonState(false);
        } else {
            setButtonState(true);
        }
    }, [form, checked])

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: "center", marginTop: 10 }}>Informe os dados do estabelecimento:</Text>
            <Text style={{ textAlign: "center", marginBottom: 20 }}>Usuário: {user.email}</Text>
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
            <View style={[styles.containerOption, {
                flexDirection: "row",
                alignContent: "space-around",
                backgroundColor: "#D8D8D8",
                borderRadius: 10,
                shadowColor: '#171717',
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.3,
                shadowRadius: 2,
                marginTop: 20,
                marginBottom: 20
            }]}>
                <View style={styles.containerOption}>

                    <Image source={require("../../assets/iconsMaps/iconCombustivel.png")} />
                    <RadioButton
                        value="iconCombustivel"
                        style={{
                            flexGrow: 0,
                            flexShrink: 1,
                            flexBasis: "auto",
                        }}
                        status={checked === 'iconCombustivel' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('iconCombustivel')}
                    />
                    <Text style={{ textAlign: "center" }}>Posto Combustível</Text>
                </View>
                <View style={styles.containerOption}>
                    <Image source={require("../../assets/iconsMaps/iconFastfood.png")} />
                    <RadioButton
                        value="iconFastfood"
                        style={{
                            flexGrow: 0,
                            flexShrink: 1,
                            flexBasis: "auto",
                        }}
                        status={checked === 'iconFastfood' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('iconFastfood')}
                    />
                    <Text style={{ textAlign: "center" }}>Comida</Text>
                </View>

                <View style={styles.containerOption}>
                    <Image source={require("../../assets/iconsMaps/iconMarket.png")} />
                    <RadioButton
                        value="iconMarket"
                        style={{
                            flexGrow: 0,
                            flexShrink: 1,
                            flexBasis: "auto",
                        }}
                        status={checked === 'iconMarket' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('iconMarket')}
                    />
                    <Text style={{ textAlign: "center" }}>Estabelecimento</Text>
                </View>

                <View style={styles.containerOption}>
                    <Image source={require("../../assets/iconsMaps/iconPet.png")} />
                    <RadioButton
                        value="iconPet"
                        style={{
                            flexGrow: 0,
                            flexShrink: 1,
                            flexBasis: "auto",
                        }}
                        status={checked === 'iconPet' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('iconPet')}
                    />
                    <Text style={{ textAlign: "center" }}>Petshop</Text>
                </View>

                <View style={styles.containerOption}>
                    <Image source={require("../../assets/iconsMaps/iconPharmaci.png")} />
                    <RadioButton
                        value="iconPharmaci"
                        style={{
                            flexGrow: 0,
                            flexShrink: 1,
                            flexBasis: "auto",
                        }}
                        status={checked === 'iconPharmaci' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('iconPharmaci')}
                    />
                    <Text style={{ textAlign: "center" }}>Farmácia</Text>
                </View>
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
    },
    containerOption: {
        height: 150,
        alignItems: 'center',
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