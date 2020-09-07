import React, { useState } from 'react';
import {StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Modal} from 'react-native';
import {globalStyles} from '../styles/global'
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';


export default function Home ({navigation}){ //this navigation came from the props 
   
    const pressHandlerNav = () =>{
        navigation.navigate('ReviewDetails');
        // or we can use the push method because its a stack navigation
        // navigation.push('ReviewDetails'); 
        //also we have pop method 
    }

    const [reviews, serReviews] = useState([
        {title: 'Harry Potter' , rating: '4' , body: 'last hallow', key: '1'},
        {title: 'The End Game ', rating: '5', body: 'last season', key: '2'},
        {title: 'Ant man', rating: '3', body: 'ant man', key: '3' },
    ]);

    const [modalOpen, setModalOpen] = useState(false);

    return(
        <View style={globalStyles.container}>
         {/* <Text style={globalStyles.titleText}>Home screen</Text>
         <Button title='go to review' onPress={pressHandlerNav} /> */}
        
         <Modal visible={modalOpen} animationType='slide'>
             <View style={styles.modalContent}>
             <Text>Hello</Text>
             <MaterialIcons 
                name='close'
                size={24}
                onPress={setModalOpen(false)}
                style={{...styles.modalToggel,...styles.modalClose}} //aplay two styles 
             /> 

              </View>
         </Modal>

         <MaterialIcons 
          name='add'
          size={24}
          onPress={setModalOpen(true)}
          style={styles.modalToggel}
         />

         <FlatList 
          data={reviews}
          renderItem={({item})=>{
              return (
                  // here when we press on the movie name it will go to the details screen and we pass the item info to the details screen with it 
                  <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}> 
                      <Card>
                        <Text style={globalStyles.titleText} >{item.title}</Text>
                      </Card>
                  </TouchableOpacity>
              )
          }}
         />

      
        </View>
    )
}


const styles = StyleSheet.create({
    modalToggel:{
        padding:10,
        borderRadius:10,
        alignSelf:'center',
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2'
    },
    modalClose:{
        marginBottom:0,
        marginTop:20
    },
    modalContent:{
        flex:1
    }
})