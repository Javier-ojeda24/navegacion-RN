import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/apptheme';
import {useNavigation} from '@react-navigation/core';
import {CommonActions} from '@react-navigation/native';

export const Pagina2Screen = () => {
  const navigatior = useNavigation();
  useEffect(() => {
    navigatior.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: '',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.tittle}>Pagina2Screen</Text>
      <Button
        title="Ir pagina 3"
        onPress={() =>
          navigatior.dispatch(CommonActions.navigate({name: 'Pagina3Screen'}))
        }
      />
    </View>
  );
};
