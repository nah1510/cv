import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Modal from 'react-native-modal';


import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

class Home extends Component{
    render() {
    return (
        <View style={styles.container}>
        <ScrollView style={styles.scrollView}>

        <View style={{ flex: 1, justifyContent:'center',marginTop:30}}>
                        <View style={{alignItems:'center'}}>
                            <Image style={styles.img} source={require('./../img/HomeStayIconSmall.png')}/>
                        </View>
                            <View style={{alignItems:'center',margin: 7},styles.viewButton}>
                                <Button color="#5cb85c" title="Tìm kiếm homestay" onPress={() => Actions.Searching1()}  />
                            </View>
                            <View style={{alignItems:'center',margin: 7},styles.viewButton}>
                                <Button color="#5cb85c" title="Đặt xe đưa đón" onPress={() => Actions.Step1()}/>
                            </View>

                            <View style={{alignItems:'center',margin: 7},styles.viewButton}>
                                <Button color="#5cb85c" title="Tìm kiếm quán ăn" onPress={() => Actions.Searching2()}  />
                            </View>
                    </View>
        </ScrollView>
      </View>
        
    )
}}
export default Home;

const styles = StyleSheet.create({
    img:{
        width: 80, height: 80
    },
    viewButton: {
        flex:1 , marginTop:10, width:300,
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
      },
      img:{
        borderRadius:40,
        height:80,
        width:80,

      }
})