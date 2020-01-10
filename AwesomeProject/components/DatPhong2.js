import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    ScrollView,
    TextInput
}from "react-native";
import { Table, TableWrapper, Row,Rows } from 'react-native-table-component';
import Modal from 'react-native-modal';
import {Actions} from 'react-native-router-flux'
import DatePicker from 'react-native-datepicker'
const tableHead = ['Thời gian', 'Giá']
const widthArr = [40, 60, 80, 100, 120, 140, 160, 180, 200]
const tableData = [['Thứ hai - Thứ sáu','1.890.000 vnd/ ngày'],['Thứ bảy - Chủ nhật','2.000.000 vnd/ngày'],['Thuê theo tháng','50.000.000 vnd/tháng']]
class DatPhong2 extends Component{
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
            <Text style={{ fontWeight:'bold', fontSize:20, textTransform:'capitalize', flex:1,textAlign:'center'}}>Thông tin đặt chỗ</Text>
            <Text style={styles.text}>Số lượng người</Text>
             <View style={{alignItems:'center'}}>
        
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               placeholder = "1 Người"
                 editable = {false}/>
            </View>
            <Text style={styles.text}>Thời gian nhận phòng</Text>
             <View style={{alignItems:'center'}}>
        
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               placeholder = "05/01/2020"
                 editable = {false}/>
            </View>
            <Text style={styles.text}>Thời gian trả phòng</Text>
             <View style={{alignItems:'center'}}>
        
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               placeholder = "06/01/2020"
                 editable = {false}/>
            </View>
            <Text style={{ fontWeight:'bold', fontSize:20, textTransform:'capitalize', flex:1,textAlign:'center'}}>Chi tiết đặt phòng</Text>
            <View style={styles.head}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>City Home Nha Trang
                </Text>
                <Image source={require('./../img/slider-5.jpg')} style={{height: 200, width:350,marginBottom:20}}/>
                <View style={{flexDirection: 'row',marginTop:30}}>
                    <View style={{flex:1,flexDirection: 'row'}}>
                        <Image style={{height:20,width:20}} source={require('./../img/calander.png')}/>
                        <Text style={{marginLeft:10}}>Một Đêm</Text>
                    </View>
                    <View style={{flex:1,flexDirection: 'row'}}>
                        <Image style={{height:20,width:20}} source={require('./../img/user.png')}/>
                        <Text style={{marginLeft:10}}>Một Người</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.text,{marginTop:10}}>Giá thuê một ngày</Text>
             <View style={{alignItems:'center'}}>
        
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               placeholder = "1.890.000 vnd"
                 editable = {false}/>
            </View>
            <Text style={styles.text,{marginTop:10}}>Thành tiền</Text>
             <View style={{alignItems:'center'}}>
        
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               placeholder = "1.890.000 vnd"
                 editable = {false}/>
            </View>
            <View style={{marginTop:10}}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>Trách nhiệm vật chất
                </Text>
                <Text>Khách hàng chịu mọi trách nhiệm thiệt hại về tài sản đã gây ra tại chỗ ở trong thời gian lưu trú.</Text>
            </View>
            <View style={{marginTop:10}}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>Nội quy chỗ ở
                </Text>
                <Text>- Chỉ mở phòng theo số lượng người đặt (Ví dụ: 8 người mở 2 phòng lớn 4 giường).</Text>
                <Text>- Check-in và check-out đúng thời gian quy định 
                     </Text>
                <Text>- Nhận phòng sớm (hoặc trả phòng muộn): Trước (sau) 3 giờ tính giá phòng nửa ngày, trước (sau) 6 giờ tính tiền một ngày.</Text>
                <Text>- Đi đúng số lượng người đặt thực tế. Các trường hợp phát sinh thêm tính phụ thu 200.000 đồng/ người.</Text>
            </View>
            <Text style={{ fontWeight:'bold', fontSize:20, textTransform:'capitalize', flex:1,textAlign:'center'}}>Thông tin của bạn</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Họ và tên (Trên CMND hoặc hộ chiếu)"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Số điện thoại"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"/>

            <Text style={{ fontWeight:'bold', fontSize:20, textTransform:'capitalize', flex:1,textAlign:'center'}}>Mã Khuyến Mãi</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Nhập mã khuyến mãi"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"/>
            </ScrollView>
            <Button title="Thanh Toán"   color='#dc3545' />
          </View>
            
        )
    }}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', },
    input:{
        backgroundColor:'#ebecee',
        width:350,
        marginTop:5,
        borderRadius: 10,
    },
})
export default DatPhong2;