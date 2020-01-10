import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    Button,
    Image
}from "react-native";

const Header = () =>{
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    container:{
        width: 400, height: 400
    }
})