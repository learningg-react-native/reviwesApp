import React, { useState } from 'react';
import {StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global'


export default function Home ({navigation}){ //this navigation came from the props 
   
    const pressHandlerNav = () =>{
        navigation.navigate('ReviewDetails');
        // or we can use the push method because its a stack navigation
        // navigation.push('ReviewDetails'); 
        //also we have pop method 
    }

    const [reviews, serReviews] = useState([
        {title: 'Harry Potter' , rating: '8' , body: 'last hallow', key: '1'},
        {title: 'The End Game ', rating: '9', body: 'last season', key: '2'},
        {title: 'Ant man', rating: '7', body: 'ant man', key: '3' },
    ]);

    return(
        <View style={globalStyles.container}>
         <Text style={globalStyles.titleText}>Home screen</Text>
         <Button title='go to review' onPress={pressHandlerNav} />
        
         
         <FlatList 
          data={reviews}
          renderItem={({item})=>{
              return (
                  // here when we press on the movie name it will go to the details screen and we pass the item info to the details screen with it 
                  <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}> 
                      <Text style={globalStyles.titleText} >{item.title}</Text>
                  </TouchableOpacity>
              )
          }}
         />

      
        </View>
    )
}
