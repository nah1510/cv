import React, { Component } from 'react'
import {View, StyleSheet, Button, Text, TextInput, Image, ScrollView, TouchableOpacity} from 'react-native';
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import DatePicker from 'react-native-datepicker'
import CardListFood from './CardListFood'

const dataCards = {imageSource:"./../img/hero_2.jpg", date: "February 26, 2018", title:"abc", room:"6 khách · 2 phòng ngủ · 2 phòng tắm", price: "899,100₫/đêm"}
const cardsArray = new Array(10);

class SearchingFood extends Component {
    constructor(props){
        super(props)
        this.state = {date:"01-01-2019", isVisible:false}
      }
    render(){
    return (
        <ScrollView backgroundColor="white">
            <View style={{backgroundColor:'white', flex:1, alignItems:"center", marginBottom: 30}}>
            <Text style={{textAlign:"center", fontSize:30, fontWeight:'bold',textTransform:'capitalize'}}>Tìm kiếm quán ăn</Text>
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
                <ModalDropdown options={['Hồ Chí Minh','Đà Lạt', 'Hà Nội','Nha Trang', 'Vũng Tàu']} 
                    style={{textAlign:'center', width:120}} 
                    textStyle={{textAlign:'center', zIndex:99, height:30,width:100, textAlignVertical:'center'}}
                    defaultValue="Hồ Chí Minh"
                    dropdownStyle={{marginTop:5}}
                    dropdownTextStyle={{textAlign:'center', width:120, }}
                    borderWidth={1}
                    borderRadius={5}
                    marginTop={10}
                    />
                <Image style={{
                    position:'absolute', width: 12, height: 12, top: 20, left:5, zIndex:-1
                }} source={require('./../img/location.png')}/>
               <Image style={{
                    position:'absolute', width: 12, height: 12, top: 20, right:5, zIndex:-1
                }} source={require('./../img/drop-down-arrow.png')}/>

            </View>
            <View>
                <ModalDropdown options={['Bình Thạnh','Tân Bình', 'Quận 1','Quận 5', 'Bình Tân']} 
                    style={{textAlign:'center', width:120}} 
                    textStyle={{textAlign:'center', zIndex:99, height:30,width:100, textAlignVertical:'center'}}
                    defaultValue="Quận 1"
                    dropdownStyle={{marginTop:5}}
                    dropdownTextStyle={{textAlign:'center', width:120 }}
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
        
            
            <View marginTop={20} width={230}>
                <Button title="TÌM KIẾM"
                    borderRadius={25}
                    fontWeight="bold"
                    
                    margin={15}
                    color="#b78a62"
                    onPress={()=> this.setState({isVisible: !this.state.isVisible})}
                />
            </View>
        </View>
        
        {this.state.isVisible ?
            <CardListFood/>
            
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
export default SearchingFood;
