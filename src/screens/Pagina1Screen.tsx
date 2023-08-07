import React from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import {styles} from '../theme/apptheme';
import {useNavigation} from '@react-navigation/core';
import {CommonActions} from '@react-navigation/native';

export const Pagina1Screen = () => {
  const navigatior = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.tittle}>Pagina1Screen</Text>
      <Button
        title="Ir pagina 2"
        onPress={() =>
          navigatior.dispatch(CommonActions.navigate({name: 'Pagina2Screen'}))
        }
      />
      <Text>Navegar con argumentos</Text>
      <TouchableOpacity
        onPress={() =>
          navigatior.navigate("Persona",{
            id:1,
            name:"Javi"
          })
        }>
        <Text>Javier</Text>
      </TouchableOpacity>
    </View>
  );
};
