import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {PostImage as PostImageTypes, RootStackParams} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
//En props se selecciona los parametros que se van a pasar en este caso
//RootStackParams, es el tipado de la vista el cual recibira PostImage, y lueg
//la pantalla a la que se dirigira que es detail
type PostImageNavigationProps = StackNavigationProp<RootStackParams, 'Detail'>;

const PostImage: FC<PostImageTypes> = ({title, date, url, explanation}) => {
  //Se tiene que tipar igual el useNavigation
  const {navigate} = useNavigation<PostImageNavigationProps>();
  const handleViewPress = () => {
    navigate('Detail', {title, date, url, explanation});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttoncontainer}>
        <Button title="View" onPress={handleViewPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#122771',
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  date: {
    color: '#ffffff',
  },
  buttoncontainer: {
    alignItems: 'flex-end',
  },
});

export default PostImage;
