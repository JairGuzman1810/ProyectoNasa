import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../components/Header';
import fetchApi from '../../utils/fetch';
import TodaysImage from '../../components/TodaysImage';
import {PostImage} from '../../types';
import {format, sub} from 'date-fns';

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

    const loadLast5DaysImage = async () => {
      try {
        //Se consigue la fecha de hoy.
        const date = new Date();
        //Se hace formato a la fecha.
        const todaysDate = format(date, 'yyyy-MM-dd');
        //Se subtrae 5 dias a la fecha de hoy mediante el metodo sub de la libreria.
        const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd');
        //Se pasa los parametros a la URL para conseguir las ultimas imagenes.
        const lastFiveDaysImagesResponse = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`,
        );

        console.log(lastFiveDaysImagesResponse);
      } catch (error) {
        console.log(error);
      }
    };
    loadLast5DaysImage().catch(null);
    loadTodaysImage().catch(null);
    //Manejo del error evitar que se truene.
  }, []);

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
