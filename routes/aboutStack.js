import { createStackNavigator } from 'react-navigation-stack';
// import {createAppContainer} from 'react-navigation';
import About from '../screens/about'
import Header from '../shared/header';
import React from 'react';



const screens = {

    About: {
        screen: About,
        //      navigationOptions:{
        //         //  title:'GameZone', 
        //         headerTitle:()=> <Header/>
        //    }

        // to pass props we make navigationOptions function 
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About' />
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: 'pink', height: 60 }
    }
});


export default AboutStack;