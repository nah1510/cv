import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    Image
}from "react-native";

const TitleIndex = () =>{
    return (
        <View style={styles.container}>
            <View style={styles.head}>
            <Text style={styles.headtxt}>THUÊ XE
        </Text>
        <Image style={styles.img} source={require('./../img/ThueXe.png')}/>
        </View>
     </View>
        
    )
}
export default TitleIndex;

const styles = StyleSheet.create({
    img:{
        width: 60, height: 60
    },
    head:{
       flexDirection:'row', 
       flexWrap:'wrap',
    },
    headtxt:{
        fontSize:30,

    },
    container: {
        flex: 1,
        backgroundColor:"white",
    
        alignItems:'center',
    
      },
})