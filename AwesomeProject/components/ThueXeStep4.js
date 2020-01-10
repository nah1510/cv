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

class Step4 extends Component{
    state = {
        isModalVisible: false
    };
    toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
    }
    componentWillUnMount() {
        this.setState({isModalVisible: false})
    }
    handleBackToHome() {
        this.setState({isModalVisible: false})
        Actions.Step1();
       
    }
    handleToHistory() {
        this.setState({isModalVisible: false})
        Actions.history();
       
    }
    render() {
    return (
        <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View style={{alignItems:'center'}}>
            <Image style={styles.img} source={require('./../img/anh.jpg')}/>
        </View>
        <Text style={styles.text}>Tên tài xế</Text>
        <View style={{alignItems:'center'}}>
        
         <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               placeholder = "Nguyễn Văn A"
                 editable = {false}/>
            </View>
            <Text style={styles.text}>Số điện thoại</Text>
        <View style={{alignItems:'center'}}>
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               placeholder = "0123456789"
                 editable = {false}/>
            </View>
            <Text style={styles.text}>Thời gian</Text>
        <View style={{alignItems:'center'}}>
        
         <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               placeholder = "15:30"
                 editable = {false}/>
            </View>
            <Text style= {styles.text}>Thông tin thêm</Text>
            <View style={{alignItems:'center'}}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Thông tin thêm"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               editable = {false}/>

            <View style={{flexDirection: 'row',marginTop:30,marginBottom:50}}>
                <View style={styles.viewButton} >
                    <Button title="Hủy" color = "#ff8d1e" onPress={() => Actions.Step1()}></Button>
                </View>
                <View style={{flex:1}} >
                    <Button title="Đặt xe" color = "#5cb85c" onPress={() => Actions.Step5()}></Button>
                </View>
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={{ flex: 1, justifyContent:'center'}}>
                        <View style={{alignItems:'center'}}>
                            <Image style={styles.img} source={require('./../img/success.png')}/>
                        </View>
                            <Text style={{textAlign:'center', color:'white', margin: 7}}>chúc mừng bạn đã đặt phòng thành công !</Text>
                            <Text style={{textAlign:'center', color:'white', margin: 7}}>Cảm ơn đã sử dụng dịnh vụ!</Text>
                            <Text style={{textAlign:'center', color:'white', margin: 7}}>Mã hóa đơn: 0220056798</Text>
                            <View style={{alignItems:'center',margin: 7}}>
                                <Button title="Quay về trang chủ" onPress={(e) => this.handleBackToHome(e)}/>
                            </View>
                            <View style={{alignItems:'center',margin: 7}}>
                                <Button title="xem Lịch sử đặt phòng" onPress={(e) => this.handleToHistory(e)} color='#dc3545' />
                            </View>
                    </View>
                </Modal>
            </View>
        </View>
        </ScrollView>
      </View>
        
    )
}}
export default Step4;

const styles = StyleSheet.create({
    img:{
        width: 80, height: 80
    },
    viewButton: {
        flex:1 , marginRight:10
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