import * as React from 'react'
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/services/redux/store'
import Login from './src/screens/Login';
import Menu from './src/screens/Menu';
import ListagemEstabelecimentos from './src/screens/ListagemEstabelecimentos';
import CadastroEstabelecimento from './src/screens/CadastroEstabelecimento';
import CadastroUser from './src/screens/CadastroUser';
<<<<<<< HEAD
import CadastroPet from './src/screens/CadastroPet';
import { Provider as StoreProvider } from 'react-redux';
import { LogBox } from 'react-native';
import store from './src/services/store'
=======
>>>>>>> 4fcd65129e8f18bda8ca2b0c5cdaaebd69d59d83
import Sobre from './src/screens/Sobre';
import FAQ from './src/screens/FAQ';

LogBox.ignoreLogs([
  'AsyncStorage'
])

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>

          <Stack.Screen
            name="Login"
            component={Login}
            options={
              { title: "Login" }
            }
          />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={
              { title: "Bem Vindo" }
            }
          />
          <Stack.Screen
            name="CadastroUser"
            component={CadastroUser}
            options={
              { title: "Registro de Usuários" }
            }
          />
          <Stack.Screen
            name="ListagemEstabelecimentos"
            component={ListagemEstabelecimentos}
            options={
              { title: "Estabelecimentos cadastrados" }
            }
          />
          <Stack.Screen
            name="CadastroEstabelecimento"
            component={CadastroEstabelecimento}
            options={
              { title: "Cadastro de Estabelecimento" }
            }
          />
          <Stack.Screen
            name="Sobre"
            component={Sobre}
            options={
              { title: "Sobre" }
            }
          />
          <Stack.Screen
            name="FAQ"
            component={FAQ}
            options={
              { title: 'FAQ' }
            }
          />
          <Stack.Screen
            name="Sobre"
            component={Sobre}
            options={
              { title: "Sobre" }
            }
          />
          <Stack.Screen
            name="FAQ"
            component={FAQ}
            options={
              {title: 'FAQ'}
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}


