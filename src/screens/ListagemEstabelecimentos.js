import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { buscaEstabelecimentos } from "../repository/estabelecimentosRepository"
import Registro from '../components/Registro';
// import { useSelector } from 'react-redux';

export default function ListagemEstabelecimentos(props) {

    const { navigation } = props
    const [estabelecimentos, setEstabelecimentos] = useState([])
    // const user = useSelector(store => store.user)

    const buscarEstabelecimentos = async () => {
        try {
            let dados = await buscaEstabelecimentos()
            setEstabelecimentos(dados)
        } catch (error) {
            Alert.alert(error);
        }
    }

    
  const novoEstabelecimento = async () => {
    try {
      navigation.replace("CadastroEstabelecimento")
    } catch (error) {
      Alert.alert(error)
    }

  }

    useLayoutEffect(() => {
        buscarEstabelecimentos()
        navigation.setOptions({
          headerRight: () => <Button color={'green'} title='Novo' onPress={novoEstabelecimento}/>
        })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={estabelecimentos}
                renderItem={({ item }) => <Registro dados={item} buscarEstabelecimentos={buscarEstabelecimentos} navigation={navigation} />}
                keyExtractor={item => item.key}
            />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        flex: 1,
        flexDirection: "row",
        marginLeft: 5
    }
});