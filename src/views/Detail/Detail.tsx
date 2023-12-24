import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../types';
import Header from '../../components/Header';
import {ScrollView} from 'react-native-gesture-handler';

const Detail = () => {
  //Se obtiene los parametros de la pantalla anterior
  //Como ya no es native-stack, se llama StackScreenProps en vez de NativeStackScreenProps
  //Se pasan los parametros, en este caso detail recibiria los detalles de postimage.
  const {
    params: {title, url, explanation, date},
  } = useRoute<StackScreenProps<RootStackParams, 'Detail'>['route']>();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{uri: url}} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationcontainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#071A5D',
  },
  content: {
    backgroundColor: '#2c449d',
    borderRadius: 32,
    padding: 16,
    marginVertical: 24,
    flex: 1,
  },
  image: {
    marginTop: 16,
    width: '100%',
    height: '50%',
    borderWidth: 2,
    borderColor: '#ffffff',
    marginBottom: 16,
    borderRadius: 32,
  },
  title: {
    color: '#ffffff',
    fontSize: 22,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  date: {
    color: '#ffffff',
    fontSize: 16,
  },
  explanationcontainer: {
    marginVertical: 16,
  },
  explanation: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default Detail;
