import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';


import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

const Step3 = () =>{
    return (
        <View style={styles.container}>
        <ScrollView style={styles.scrollView}>     
        <Text style={styles.text}>Khoảng cách</Text>
        <View style={{alignItems:'center'}}>
         <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               placeholder = "8 Km"
                 editable = {false}/>
            </View>
            <Text style= {styles.text}>Giá tiền</Text>
            <View style={{alignItems:'center'}}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "20.000 VND"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               editable = {false}/>

            <View style={{flexDirection: 'row',marginTop:30}}>
                <View style={{flex:1 , marginRight:10}} >
                    <Button title="Trở về" color = "#ff8d1e" onPress={() => Actions.Step2()}></Button>
                </View>
                <View style={{flex:1}} >
                    <Button title="Đặt xe" color = "#5cb85c" onPress={() => Actions.Step4()}></Button>
                </View>
            </View>
        </View>
        </ScrollView>
      </View>
        
    )
}
export default Step3;

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
        marginTop:5,
        borderRadius: 10,
    },
    Vcheckbox:{
        marginLeft:40,
    },
    submit:{
        flex:0.3,
        backgroundColor:"#ff8d1e",
        marginRight:30,

    },
    container: {
        flex: 1,
        backgroundColor:"white",
    
        alignItems:'center',
    
      },
      scrollView:{
    
      },
      text:{
          marginTop:15,
          fontSize:18,
      }
})