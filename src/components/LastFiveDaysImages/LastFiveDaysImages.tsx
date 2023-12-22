import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PostImage as PostImageTypes} from '../../types';
import PostImage from '../PostImage';
//Asi se recibe un arreglo, como se manda el nombre de la variable se va usar
// ejemplo si es test tanto donde esta el FC y los ({}) se va poner test
//y en codigo se va usar como test.
const LastFiveDaysImages: FC<{PostImages?: PostImageTypes[]}> = ({
  PostImages,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
        {PostImages?.map(postImage => (
          <PostImage key={`post-image-${postImage.title}`} {...postImage} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 18,
  },
  content: {
    padding: 24,
  },
});

export default LastFiveDaysImages;
