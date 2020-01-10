import React, { Component } from 'react'
import {View, StyleSheet, Button, Text, TextInput, Image, ScrollView} from 'react-native';
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import DatePicker from 'react-native-datepicker'
import CardList from './CardList'

const dataCards = {imageSource:"./../img/hero_2.jpg", date: "February 26, 2018", title:"abc", room:"6 khách · 2 phòng ngủ · 2 phòng tắm", price: "899,100₫/đêm"}
const cardsArray = new Array(10);

class Searching extends Component {
    constructor(props){
        super(props)
        this.state = {date:"01-01-2019", isVisible:false}
      }
    render(){
    return (
        // <View>
            // {/* <Text>Hello this is history</Text> */}
            // {/* <Button onPress={() => Actions.Step1()} title="Quay về step 1" /> */}
        // </View>
        
        <ScrollView backgroundColor="white">
            <View style={{backgroundColor:'white', flex:1, alignItems:"center", marginBottom: 30}}>
            <Text style={{textAlign:"center", fontSize:30, fontWeight:'bold'}}>Tìm kiếm</Text>
            <View >
                <TextInput 
                    style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholderTextColor = "#bfbfbf"
                    autoCapitalize = "none"
                    placeholder = "Từ khóa ..."
                />
            </View>
            <View>
                <ModalDropdown options={['1 người','2 người', '3 người','4 người', '5 người']} 
                    style={{textAlign:'center', width:120}} 
                    textStyle={{textAlign:'center', zIndex:99, height:30,width:100, textAlignVertical:'center'}}
                    defaultValue="1 người"
                    dropdownStyle={{marginTop:5}}
                    dropdownTextStyle={{textAlign:'center', width:120, }}
                    borderWidth={1}
                    borderRadius={5}
                    marginTop={10}
                    />
                <Image style={{
                    position:'absolute', width: 12, height: 12, top: 20, left:5, zIndex:-1
                }} source={require('./../img/user.png')}/>
               <Image style={{
                    position:'absolute', width: 12, height: 12, top: 20, right:5, zIndex:-1
                }} source={require('./../img/drop-down-arrow.png')}/>

            </View>
            <View style={{flexDirection: 'row', alignItems:'center',justifyContent:'space-evenly'}}>
            <Text style={{width: 50, marginTop:10, textAlign:'right'}}>From: </Text>
            <DatePicker
                style={{width: 170, marginTop:10, borderRadius:5}}
                date={this.state.date}
                mode="date"
                placeholder="chọn ngày"
                format="DD-MM-YYYY"
                minDate="01-01-2019"
                maxDate="31-12-2019"
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
                }
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
            />
            </View>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Text style={{width: 50, marginTop:10, textAlign:'right'}}>To: </Text>
            <DatePicker
                style={{width: 170, marginTop:10, borderRadius:5}}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="01-01-2019"
                maxDate="31-12-2019"
                confirmBtnText="Hoàn thành"
                cancelBtnText="Hủy"
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
                }
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
            />
            </View>
            
            <View marginTop={20} width={230}>
                <Button title="TÌM KIẾM"
                    borderRadius={25}
                    fontWeight="bold"
                    
                    margin={15}
                    color="#5cb85c"
                    onPress={()=> this.setState({isVisible: !this.state.isVisible})}
                />
            </View>
        </View>
        {this.state.isVisible ?
        <View style={{alignItems:'stretch',flex:1,marginBottom:60 }}>
            <View style={{flexDirection:'row'}}>
                <ModalDropdown
                    options={["Dưới 500.000 VNĐ", "Dưới 1.000.000 VNĐ", "Dưới 2.000.000 VNĐ", "Dưới 5.000.000 VNĐ"]}
                    style={{flex:1, alignItems:'stretch'}}
                    dropdownStyle={{flex:1, height: 72}}
                    dropdownTextStyle={{width:127,textAlign:'center'}}>
                    <Text style={{textAlign:"center", backgroundColor:'#4a90e2', color:'white', fontSize:16,fontWeight:'bold'}}>Giá Chỗ Ở</Text>
                </ModalDropdown>
                <ModalDropdown
                    options={["Nội Thành", "Ngoại Thành"]}
                    style={{flex:1,alignItems:'stretch'}}
                    dropdownStyle={{flex:1, height: 72}}
                    dropdownTextStyle={{width:127,textAlign:'center'}}>
                    <Text style={{textAlign:"center", backgroundColor:'#dc3545', color:'white', fontSize:16,fontWeight:'bold'}}>Khu Vực</Text>
                </ModalDropdown>
                <ModalDropdown
                    options={["Theo giá", "Số phòng trống"]}
                    style={{flex:1,alignItems:'stretch', justifyContent:'center'}}
                    dropdownStyle={{flex:1, height: 72}}
                    dropdownTextStyle={{width:127, textAlign:'center'}}
                    >
                    
                    <Text style={{textAlign:"center", backgroundColor:'#ff8d1e', color:'white', fontSize:16,fontWeight:'bold'}}>Thêm Bộ Lọc</Text>
               </ModalDropdown>
            </View>
            <CardList/>
            </View>
    : null}
        </ScrollView>
    );
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor:'#ebecee',
        width:250,
        marginTop:5,
        borderRadius: 10,
        fontWeight:'bold'
    }
})
export default Searching;
