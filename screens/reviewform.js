import React from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import {globalStyles} from '../styles/global'
import { Formik } from 'formik';
import * as yup from 'yup'; //this library to validate the form inputs 
import FlatButton from '../shared/button';
const ReviewSchema = yup.object({
  title: yup.string().required().min(4), //any input (title) must be string and minimum 4 char and its required 
  body: yup.string().required().min(8),
  rating: yup.string().required().test('is-num', 'Rating must be a num 1-5', (val)=>{
    return parseInt(val) < 6 && parseInt(val) > 0
    // the test method take 3 parameters 
    // 1- the name of the vlidation(test)
    // 2- feedback msg to provid to the user if the test faild
    // 3- the function to test the value and it should return true or false 
  })
})

export default function ReviewForm({addReview}){

    return(
        <View style={globalStyles.container}>
            <Formik
              initialValues={{title: '', body: '', rating:''}}
              validationSchema={ReviewSchema}
              onSubmit={(values, actions)=>{
                actions.resetForm(); //to reset the form to the original states 
                addReview(values);
              }}
            >
                {(props)=>(
                    <View>
                        <TextInput
                          style={globalStyles.input}
                          placeholder='Review title'
                          onChangeText={props.handleChange('title')}
                          value={props.values.title}
                          onBlur={props.handleBlur('title')} //this so we can have realtime validation not until the submit 
                        />
                        <Text style={globalStyles.errorText}>
                           {props.touched.title && props.errors.title}
                           {/* props.touched.title so the msg only appear if this output is touched */}

                        </Text>
                        <TextInput
                          multiline
                          style={globalStyles.input}
                          placeholder='Review body'
                          onChangeText={props.handleChange('body')}
                          value={props.values.body}
                          onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>
                           {props.touched.body && props.errors.body}
                        </Text>
                        <TextInput
                          style={globalStyles.input}
                          placeholder='Rating (1-5)'
                          onChangeText={props.handleChange('rating')}
                          value={props.values.rating}
                          keyboardType='numeric'
                          onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>
                           {props.touched.rating && props.errors.rating}
                        </Text>
                        {/* <Button title='submit' color='maroon' onPress={props.handleSubmit} /> */}
                        <FlatButton  text='submit' onPress={props.handleSubmit}/>
                    </View>
                )}

            </Formik>
        </View>
    )
}

