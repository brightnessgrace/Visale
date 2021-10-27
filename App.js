/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{useEffect, useState} from 'react';
import { ActivityIndicator,View } from 'react-native';
import Navigation from './src/navigation/Navigation';





const App = ()  => {

  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {setTimeout(() => {
    setIsLoading(false);
  }, 1000);
  }, []);

  if(isLoading) {

    return(
        <View style = {{flex:1, justifyContent:"center" ,alignItem:"center"}}>

  <ActivityIndicator size="large" />
        </View>
  )
  }

  return (

      <Navigation />

);
};



export default App;
