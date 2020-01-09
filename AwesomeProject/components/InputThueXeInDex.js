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
               placeholder = "Họ và tên"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Số điện thoại"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Số lượng"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"/>
            <View style={{ flexDirection:'row', marginTop:30 }}>
                <View style={{ flex:1,flexDirection:'row',alignItems:"center" }}>

                    <CheckBox style={styles.Vcheckbox}/><Text>5 chỗ</Text>
                </View>
                <View style={{ flex:1,flexDirection:'row',alignItems:"center" }}>

                    <CheckBox style={styles.Vcheckbox}/><Text>7 chỗ</Text>
                </View>
            </View>
            <View style={{ flexDirection:'row',marginBottom:15 }}>
                <View style={{ flex:1,flexDirection:'row',alignItems:"center" }}>

                    <CheckBox style={styles.Vcheckbox}/><Text>16 chỗ</Text>
                </View>
                <View style={{ flex:1,flexDirection:'row',alignItems:"center" }}>

                    <CheckBox style={styles.Vcheckbox}/><Text>29 chỗ</Text>
                </View>
            </View>
            <Button borderRadius="20" onPress={() => Actions.Step2()} style={styles.submit} color = "#5cb85c" title="Bước kế tiếp"></Button>
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