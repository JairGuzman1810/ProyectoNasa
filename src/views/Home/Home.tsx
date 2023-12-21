import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../components/Header';
import fetchApi from '../../utils/fetch';
import TodaysImage from '../../components/TodaysImage';
import {PostImage} from '../../types';

const Home = () => {
  //Se tipa el useStage al PostImage
  const [todaysImage, setTodaysImage] = useState<PostImage>({});

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todayImageResponse = await fetchApi();
        //Se guarda en el useState en el cual se va hacer uso despues.
        setTodaysImage(todayImageResponse);
      } catch (error) {
        console.log(error);
        setTodaysImage({});
      }
    };

    loadTodaysImage().catch(null);
    //Manejo del error evitar que se truene.
  }, []);

  todaysImage !== undefined && console.log(todaysImage);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default Home;
