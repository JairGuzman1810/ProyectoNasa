import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {PostImage as PostImageTypes} from '../../types';

const PostImage: FC<PostImageTypes> = ({title, date}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttoncontainer}>
        <Button title="View"></Button>
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
