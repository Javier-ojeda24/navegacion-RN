import {Pagina1Screen} from '../screens/Pagina1Screen';
import {Pagina2Screen} from '../screens/Pagina2Screen';
import {Pagina3Screen} from '../screens/Pagina3Screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {personaScreen} from '../screens/personaScreen';

const Stack = createNativeStackNavigator();

export const Navegacion = () => {
  return (
    <Stack.Navigator
      // initialRouteName=''
      screenOptions={{
        headerStyle: {
          backgroundColor: 'yellow',
        },
        headerTintColor: 'black',
        contentStyle: {
          backgroundColor: 'red',
        },
      }}>
      <Stack.Screen
        name="Pagina1Screen"
        options={{title: 'Página 1'}}
        component={Pagina1Screen}
      />
      <Stack.Screen
        name="Pagina2Screen"
        options={{title: 'Página 2'}}
        component={Pagina2Screen}
      />
      <Stack.Screen
        name="Pagina3Screen"
        options={{title: 'Página 3'}}
        component={Pagina3Screen}
      />
      <Stack.Screen name="Persona" component={personaScreen} />
    </Stack.Navigator>
  );
};
