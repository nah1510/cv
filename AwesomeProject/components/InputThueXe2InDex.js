import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
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
               <Image source={require('./../img/googlemap.jpg')} style={{height: 200, width:350,marginBottom:20}}/>
            <View style={{flexDirection: 'row',marginTop:30,marginBottom:50}}>
                <View style={{flex:1 , marginRight:10}} >
                    <Button title="Trở về" color = "#ff8d1e" onPress={() => Actions.Step3()}></Button>
                </View>
                <View style={{flex:1}} >
                    <Button title="Bước kế tiếp" color = "#5cb85c" onPress={() => Actions.Step3()}></Button>
                </View>
            </View>
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
    },
    submit:{
        flex:0.3,
        backgroundColor:"#ff8d1e",
        marginRight:30,

    }
})