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
class ChiTietHomestay extends Component{
    state = {
        isModalVisible: false
    };
    toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
    }
    componentWillUnMount() {
        this.setState({isModalVisible: false})
        Actions.DatPhong2();
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
        <ScrollView>
        <View style={{ alignItems:'center', flex:1, backgroundColor:'white'}}>
            <Text style={{ fontWeight:'bold', fontSize:36, fontStyle:'italic', marginBottom:20}}>
            City Home Nha Trang
            </Text>
            <Image source={require('./../img/slider-5.jpg')} style={{height: 200, width:350,marginBottom:20}}/>
            <View style={styles.head}>
            <Image style={styles.img} source={require('./../img/location.png')}/>
                    <Text style={styles.headtxt}>Ba Đình, Hà Nội, Vietnam
                </Text>
            </View>
            <View style={styles.head}>
            <Image style={styles.img} source={require('./../img/department.png')}/>
                    <Text style={styles.headtxt}>Căn hộ chung cư · 80 m2
                </Text>
            </View>
            <View style={styles.head}>
                    <Text style={styles.headtxt}>   Nguyên căn · 2 phòng tắm · 2 giường · 2 phòng ngủ 
                </Text>
            </View>
            <Text style={styles.info}> Thông tin
                </Text>
         <ScrollView style={styles.scroll}>
         <Text style={styles.scrolltxt}>+ Căn hộ trong dự ăn Vimhomes Metropolis cao cấp nhất Hà Nội. Căn hộ có diện tích 80m2 gồm 2 phòng ngủ, 2 phòng tắm, phòng khách rộng, bếp với đầy đủ trang thiết bị. Căn hộ được trang bị tiện ích như khách sạn 5 sao, với lễ tân, bảo vệ 24/24h. 
    
                </Text>
                <Text style={styles.scrolltxt}>
                 + Internet tốc độ cao, bạn có thể xem phim Fox, CNN, HBO, NHK, DW, KBS. 
                </Text>
                <Text style={styles.scrolltxt}>
                + Vinhomes Metropolis là tôt hợp căn hộ, trung tâm thương mại tiện nghi với hệ thống bể bơi ngoài trời và trong nhà, khu vui chơi dành cho trẻ em, vương BBQ, không gian thư giãn. 
                </Text>
                <Text style={styles.scrolltxt}>
                + Vinhomes Metropolis là tổ hợp căn hộ, trung tâm thương mại tiện nghi với hệ thống bể bơi ngoài trời và trong nhà, khu vui chơi dành cho trẻ em, vương BBQ, không gian thư giãn. 
                </Text>
         </ScrollView>

        </View>
        <View style={{backgroundColor:'white'}}>
        <Text style={styles.info}>Tiện nghi chỗ ở</Text>
        <View style={{flexDirection: 'row',marginTop:30}}>
                <View style={{flex:1 , marginRight:10}} >
                    <View style={styles.head}>
                <Image style={styles.img} source={require('./../img/chilbed.png')}/>
                        <Text style={styles.scrolltxt,{marginLeft:10}}>An toàn cho trẻ nhỏ
                    </Text>
                </View>
                </View>
                <View style={{flex:1}} >
                <View style={styles.head}>
            <Image style={styles.img} source={require('./../img/microwave.jpg')}/>
                    <Text style={styles.scrolltxt,{marginLeft:10}}>Lò vi sóng
                </Text>
            </View>
                </View>
            </View>
            <View style={{flexDirection: 'row',marginTop:30}}>
                <View style={{flex:1 , marginRight:10}} >
                <View style={styles.head}>
            <Image style={styles.img} source={require('./../img/electricstove.png')}/>
                    <Text style={styles.scrolltxt,{marginLeft:10}}>Bếp điện
                </Text>
            </View>
                </View>
                <View style={{flex:1}} >
                <View style={styles.head}>
            <Image style={styles.img} source={require('./../img/fridge.jpg')}/>
                    <Text style={styles.scrolltxt,{marginLeft:10}}>Tủ lạnh
                </Text>
            </View>
                </View>
            </View>
            <View style={{flexDirection: 'row',marginTop:30}}>
                <View style={{flex:1 , marginRight:10}} >
                <View style={styles.head}>
            <Image style={styles.img} source={require('./../img/wifi.jpg')}/>
                    <Text style={styles.scrolltxt,{marginLeft:10}}>Wifi
                </Text>
            </View>
                </View>
                <View style={{flex:1}} >
                <View style={styles.head}>
            <Image style={styles.img} source={require('./../img/pool.png')}/>
                    <Text style={styles.scrolltxt,{marginLeft:10}}>Bể bơi
                </Text>
            </View>
                </View>
            </View>
            


        <View style={styles.container}>
            <View style={{marginTop:20, marginBottom:10}}>
                <Text style={{ fontWeight:'bold', fontSize:20, textTransform:'capitalize', flex:1,textAlign:'center'}}>Giá Phòng</Text>
            </View>
            <Table borderStyle={{borderWidth: 2, borderColor: '#e6e6e6',}}>
                <Row data={tableHead} style={styles.header} textStyle={styles.textHeader}/>
                <Rows data={tableData} textStyle={styles.text}/>
            </Table>
        </View>

        </View>
        <View style={{alignItems:'center',backgroundColor:'white' }}>

            <View style={{flexDirection: 'row',marginVertical:30}}>
            <Button title="Đặt phòng" onPress={this.toggleModal} color = "#5cb85c"></Button>
            </View>
        </View>
        <Modal isVisible={this.state.isModalVisible}>
                    <View style={{ flex: 1, justifyContent:'center'}}>
                <DatePicker
                style={{width: 330, marginTop:10, borderRadius:5}}
                date={this.state.date}
                mode="date"
                placeholder="Từ ngày"
                format="DD-MM-YYYY"
                minDate="11-01-2020"
                maxDate="31-12-2020"
                confirmBtnText="Hoàn thành"
                cancelBtnText="hủy"
                customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 36,
                    borderRadius:10,

                },
                dateText: {
                    fontSize: 17,
                    color: "white",
                  }
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
            />
            <DatePicker
                style={{width: 330, marginTop:10, borderRadius:5}}
                date={this.state.date1}
                mode="date"
                placeholder="Đến ngày"
                format="DD-MM-YYYY"
                minDate="11-01-2020"
                maxDate="31-12-2020"
                confirmBtnText="Hoàn thành"
                cancelBtnText="hủy"
                customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 36,
                    borderRadius:10,

                },
                dateText: {
                    fontSize: 17,
                    color: "white",
                  }
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date1) => {this.setState({date1: date1})}}
            />
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Số lượng"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"/>
                            <View style={{alignItems:'center',margin: 7}}>
                                <Button title="Hủy bỏ" onPress={this.toggleModal}/>
                            </View>
                            <View style={{alignItems:'center',margin: 7}}>
                                <Button title="Đặt phòng"  onPress={(e) => this.componentWillUnMount(e)} color='#dc3545' />
                            </View>
                    </View>
                </Modal>

        </ScrollView>
        
    )
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', },
    header: { height: 50, backgroundColor: '#5cb85c',fontWeight:'bold' },
    textHeader: { textAlign: 'center', fontWeight: 'bold', marginVertical:10,color:'white' },
    text: { textAlign: 'center', fontWeight: '100', marginVertical:10 },
    textDes: {
        fontSize:15,
        color: '#6c757d',
        marginTop: 15,

    },
    img:{
        width:25,
        height:25,
        marginLeft:5,
    },
    head:{
        flexDirection:'row', 
        flexWrap:'wrap',
        marginTop:10,
     },
     scroll:{
         width:300,
         height:100,
         marginTop:20,

     },
     scrolltxt:{
        fontSize:13
     },
     headtxt:{
        fontWeight:"bold",
        fontSize:15
     },
     info:{
        fontWeight:"bold",
        fontSize:15,
        marginTop:30,
     },
     input:{
        backgroundColor:'#ebecee',
        width:350,
        marginTop:20,
        borderRadius: 10,
    },
})
export default ChiTietHomestay;