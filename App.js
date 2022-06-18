import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Menu from './src/screens/Menu';
import CadastroUser from './src/screens/CadastroUser';
import CadastroEstabelecimento from './src/screens/CadastroEstabelecimento';
import { Provider as StoreProvider } from 'react-redux';
import { LogBox } from 'react-native';
import store from './src/services/store'
import ListagemEstabelecimentos from './src/screens/ListagemEstabelecimentos';

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
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}


