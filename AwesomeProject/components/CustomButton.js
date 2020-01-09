import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    Button
}from "react-native";

const CustomButton = () =>{
    return (
        <Button title="Test" onPress={()=>alert("tesst")}>123</Button>
    )
}
export default CustomButton;
