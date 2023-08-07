import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/apptheme';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const personaScreen = ({route, navigation}: Props) => {
  const params = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: params!.name,
    });
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.tittle}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
