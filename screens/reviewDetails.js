import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles} from '../styles/global'

export default function ReviewDetails ({navigation}){

    const pressHandlerNav = ()=>{
        navigation.goBack(); 
        //this will pop this screen from the stack and back to the home screen 
    }

    return(
        <View style={globalStyles.container}>
         <Text>ReviewDetails screen</Text>
         <Button title='back to home screen' onPress={pressHandlerNav} />
         
         {/* here we will read the data that is comming from the home screen  */}
         <Text>{navigation.getParam('title')}</Text>
         <Text>{navigation.getParam('body')}</Text>
         <Text>{navigation.getParam('rating')}</Text>
        </View>
    )
}

