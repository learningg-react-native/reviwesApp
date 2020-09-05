import React, { useState } from 'react';
import * as Font from 'expo-font'; //the first step to use custom fonts in React 
import {AppLoading} from 'expo';
import Navigator from './routes/homeStack';

//second step for the fonts 
const getFonts = () =>{
  return Font.loadAsync({
    'nunito-regular' : require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
    'nunito-bold' : require('./assets/fonts/Nunito/Nunito-Bold.ttf')
  })
}


export default function App() {
  //third step for the font 
  const [fontsLoaded, setFontsLoaded] = useState(false);
 
  //last step check if the fonts are loaded before load the screens 
  if(fontsLoaded){
    return (
    // <Home/> insted of calling home directly we can call the navigator
     <Navigator />
     );
  } else {
    return(
   //to load the fonts if they are not we use AppLoading
   <AppLoading
      startAsync={getFonts} //the function to get fonts
      onFinish={()=> setFontsLoaded(true)}
   />
    )
  }
}

