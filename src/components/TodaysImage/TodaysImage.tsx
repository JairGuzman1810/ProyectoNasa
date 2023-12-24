import React, {FC} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {PostImage, RootStackParams} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
//Se tiene que tipar el stacknavigation con los parametros que se le van a pasar, o modelo.
type PostImageNavigationProps = StackNavigationProp<RootStackParams, 'Detail'>;
const TodaysImage: FC<PostImage> = ({date, title, url, explanation}) => {
  //Se usara hooks para realizar el movimiento de pantallas.
  const {navigate} = useNavigation<PostImageNavigationProps>();
  //Se pueden usar const de flecha para las funciones/metodos.
  const handleViewPress = () => {
    navigate('Detail', {title, date, url, explanation});
  };
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: url}} style={styles.image} />
        {/* Asi se pone una imagen cuando no es local */}
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttoncontainer}>
        <Button title="View" onPress={handleViewPress} />
      </View>
      {/* Ocupa un view, porque directamente no se pueden aplicar estilos. */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c449d',
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 190,
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 32,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  date: {
    color: '#ffffff',
    fontSize: 16,
  },
  buttoncontainer: {
    alignItems: 'flex-end',
  },
});

export default TodaysImage;
