const API_KEY = 'dCVJ1hmJISJhFagO9cQl2EBWyDXIkFC79neeoRAc';
const API_URL = 'https://api.nasa.gov/planetary/apod';

export default async (urlParams?: string) => {
  //? Significa que puede recibir parametros o no.
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}${
        typeof urlParams !== 'undefined' && urlParams?.length > 0
          ? urlParams
          : ''
      }`,
    ); //ASI SE CONCATENA EN REACT
    //Si el tipo de urlParams no es undefined va realizar la obtención de la longitud,
    //y si es mayor a 0, pondra las urlParams, y si no pondra vacio.
    const data = await response.json(); //Se obtiene la data asincrona si no atora la app.

    return Promise.resolve(data); //Se retorna la promesa para regresar la data.
  } catch (error) {
    return Promise.reject(error);
  }
};
