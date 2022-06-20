import { StyleSheet, Text, View, Button, Alert, Dimensions } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import * as Location from "expo-location"
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import { buscaEstabelecimentos } from '../repository/estabelecimentosRepository'
import { logoff as logoffUser } from '../repository/loginRepository'
import iconCombustivel from '../../assets/iconsMaps/iconCombustivel.png';
import iconFastfood from '../../assets/iconsMaps/iconFastfood.png';
import iconMarket from '../../assets/iconsMaps/iconMarket.png';
import iconPet from '../../assets/iconsMaps/iconPet.png';
import iconPharmaci from '../../assets/iconsMaps/iconPharmaci.png';

export default function Menu(props) {
  const user = useSelector(store => store.user)
  const { navigation } = props
  const [estabelecimentos, setEstabelecimentos] = useState([])
  const [location, setLocation] = useState({
    coords: {
      latitude: -28.2653961,
      longitude: -52.3971366,
    }
  })

  const myPosition = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return
    } else {
      let myLocation = await Location.getCurrentPositionAsync({});
      setLocation(myLocation);
    }
  }

  const buscaEstabelecimentosRepo = async () => {
    try {
      let dados = await buscaEstabelecimentos();
      setEstabelecimentos(dados);
    } catch (error) {
    }
  }

  const logoff = async () => {
    try {
      await logoffUser();
      navigation.replace("Login");
    } catch (error) {
      Alert.alert(error);
    }
  }

  useEffect(() => {
    myPosition();
    buscaEstabelecimentosRepo();
  }, [props])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 20,
      },
      headerRight: () => <Button title='Sair' onPress={logoff} />
    })
  }, [])

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {location && <Marker
          coordinate={
            {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude
            }
          }
          // title={user.email}
          title={`Você está aqui - ${user.email}`}
        />}

        {estabelecimentos.map((estabelecimento, key) => {
          return <Marker
            key={key}
            coordinate={{
              latitude: estabelecimento.lat,
              longitude: estabelecimento.lng
            }}
            title={estabelecimento.nomeEstabelecimento}
            image={estabelecimento.icon == 'iconCombustivel' ? iconCombustivel :
              estabelecimento.icon == 'iconFastfood' ? iconFastfood :
                estabelecimento.icon == 'iconMarket' ? iconMarket :
                  estabelecimento.icon == 'iconPet' ? iconPet :
                    iconPharmaci
            }
            onPress={() => Alert.alert(estabelecimento.nomeEstabelecimento,
              `Tipo: ${estabelecimento.tipo}\nContato: ${estabelecimento.contato}\nEndereço: ${estabelecimento.endereco} `)}
          />
        }

        )}

      </MapView>
      <View style={{
        position: "absolute",
        top: "80%",
        left: 50,
        alignSelf: "center",
        backgroundColor: "#D8D8D8",
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      }}>
        <Button title='Sobre' onPress={() => navigation.navigate("Sobre")} />
      </View>

      <View style={{
        position: "absolute",
        top: "80%",
        width: 120,
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,

      }}>
        <Button title='Todos' onPress={() => navigation.navigate("ListagemEstabelecimentos")} />
      </View>

      <View style={{
        position: "absolute",
        top: "80%",
        right: 50,
        alignSelf: "center",
        backgroundColor: "#D8D8D8",
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      }}>
        <Button title='FAQ' onPress={() => navigation.navigate("FAQ")} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
})
