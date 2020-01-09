import React, { Component } from 'react';
import CustomButton from './CustomButton'
import TitleIndex from './TitleThueXeInDex'

import InputIndex from './InputThueXeInDex'

import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

const Step1 = () =>{
    return (
        <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Text>Step1 nè </Text>

        <TitleIndex/>
        <InputIndex/>
        </ScrollView>
      </View>
        
    )
}
export default Step1;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"white",
  
      alignItems:'center',
  
    },
    scrollView:{
  
    }
  });