import React, { Component } from 'react';
import InputIndex from './InputThueXe2InDex'


import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

const Step2 = () =>{
    return (
        <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <InputIndex/>
        </ScrollView>
      </View>
        
    )
}
export default Step2;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"white",
  
      alignItems:'center',
  
    },
    scrollView:{
  
    }
  });