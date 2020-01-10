import React from 'react'
import { View,Image,Text, Button, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';
const CardList = () => {
    return (
        <View>
        <TouchableOpacity onPress={() => Actions.CTHomeStay()}  style={{flexDirection:"row",  marginLeft:10,marginTop:30}}>
                <Image source={require('./../img/hero_2.jpg')} 
                    style={{
                      
                        width:100,
                        height:100,
                    }}
                />
                <View style={{flex:1, marginLeft:10}}>
                <Text style={{fontSize: 24, color:'#ced4da'}}>February 26, 2018</Text>
                    <Text style={{fontSize: 26, fontWeight:"bold"}}>City Home Nha Trang</Text>
                    <Text style={{fontSize: 12}}>6 khách · 2 phòng ngủ · 2 phòng tắm</Text>
                    <Text style={{fontSize: 12}}>899,100₫/đêm</Text>
                </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.CTHomeStay()}  style={{flexDirection:"row",  marginLeft:10,marginTop:30}}>
                <Image source={require('./../img/hero_2.jpg')} 
                    style={{
                      
                        width:100,
                        height:100,
                    }}
                />
                <View style={{flex:1, marginLeft:10}}>
                    <Text style={{fontSize: 24, color:'#ced4da'}}>February 26, 2018</Text>
                    <Text style={{fontSize: 26, fontWeight:"bold"}}>City Home Nha Trang</Text>
                    <Text style={{fontSize: 12}}>6 khách · 2 phòng ngủ · 2 phòng tắm</Text>
                    <Text style={{fontSize: 12}}>899,100₫/đêm</Text>
                </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.CTHomeStay()}  style={{flexDirection:"row",  marginLeft:10,marginTop:30}}>
                <Image source={require('./../img/hero_2.jpg')} 
                    style={{
                      
                        width:100,
                        height:100,
                    }}
                />
                <View style={{flex:1, marginLeft:10}}>
                    <Text style={{fontSize: 24, color:'#ced4da'}}>February 26, 2018</Text>
                    <Text style={{fontSize: 26, fontWeight:"bold"}}>City Home Nha Trang</Text>
                    <Text style={{fontSize: 12}}>6 khách · 2 phòng ngủ · 2 phòng tắm</Text>
                    <Text style={{fontSize: 12}}>899,100₫/đêm</Text>
                </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.CTHomeStay()}  style={{flexDirection:"row",  marginLeft:10,marginTop:30}}>
                <Image source={require('./../img/hero_2.jpg')} 
                    style={{
                      
                        width:100,
                        height:100,
                    }}
                />
                <View style={{flex:1, marginLeft:10}}>
                <Text style={{fontSize: 24, color:'#ced4da'}}>February 26, 2018</Text>
                    <Text style={{fontSize: 26, fontWeight:"bold"}}>City Home Nha Trang</Text>
                    <Text style={{fontSize: 12}}>6 khách · 2 phòng ngủ · 2 phòng tắm</Text>
                    <Text style={{fontSize: 12}}>899,100₫/đêm</Text>
                </View>
        </TouchableOpacity>
        </View>
    )

}
export default CardList;