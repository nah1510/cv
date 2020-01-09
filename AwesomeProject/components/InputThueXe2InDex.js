import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Button,
    TextInput,
    CheckBox
  } from 'react-native';
const InputIndex = () =>{
    return (
        <View style={{alignItems:'center'}}>
         <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Địa điểm đón"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Địa điểm đến"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Thời gian"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"/>

                <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Thông tin thêm"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"/>
            
            <Button borderRadius="20" style={styles.submit} color = "#ff8d1e" title="Trở về"></Button>
            <Button borderRadius="20" style={styles.submit} color = "#5cb85c" title="Bước kế tiếp"></Button>
      </View>
        
    )
}
export default InputIndex;

const styles = StyleSheet.create({
    img:{
        width: 80, height: 80
    },
    headtxt:{
        fontSize:50,

    },
    input:{
        backgroundColor:'#ebecee',
        width:350,
        marginTop:20,
        borderRadius: 10,
    },
    Vcheckbox:{
        marginLeft:40,
    }
})