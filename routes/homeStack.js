import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';


//SECOND we will create the objects we want to pass
const screens = {
    //the first one will be the defult that will show on the screen
    Home: {
        screen: Home, //for the screen we want to show 

        //  navigationOptions:{
        //  title:'GameZone', //for the title for this screen 
        //  headerStyle:{backgroundColor: 'pink'} // the style for the header or we can put it on line 29

        // for the menu we will replace the title 'GamwZone' to
        // headerTitle:()=> <Header/>    
        // }

        //to pass props with headerTitle we make navigationOptions as a function
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='GameZone' />
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'ReviewDetails'
        }
    }
}

//FIRST 
//create our stack navigator -- pass an object into it that used to configure what diffrent screens we want to register for this navigator 
// for this example we want the home screen and the review screen to be configured in this stack navigator 
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444', //the text color
        headerStyle: { backgroundColor: 'pink', height: 60 }
    } // this will be global for all the screens, so if we want to override it like in line 14
});

//THIRD
// //then we will wrap the stack in an App container 
// export default createAppContainer(HomeStack);
// //this will return a component that we can render to App.js and it contains all the info about the navigation stack


//THIRD for the drawer navigation 
export default HomeStack;
