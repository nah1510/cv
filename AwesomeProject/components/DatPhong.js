import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    ScrollView
}from "react-native";
import { Table, TableWrapper, Row,Rows } from 'react-native-table-component';
import {Actions} from 'react-native-router-flux'
const tableHead = ['Tên Món', 'Giá']
const widthArr = [40, 60, 80, 100, 120, 140, 160, 180, 200]
const tableData = [['Hủ tíu xá xíu','35.000 vnd/ tô'],['Hủ tíu thập cẩm','50.000 vnd/tô'],['Trà đá','2.000 vnd/ly']]
const ChiTietHomestay = () =>{
    return (
        <ScrollView>
        <View style={{ alignItems:'center', flex:1, backgroundColor:'white'}}>
            <Text style={{ fontWeight:'bold', fontSize:36, fontStyle:'italic', marginBottom:20}}>
                Hủ Tiếu Nam Vang
            </Text>
            <Image source={require('./../img/hu_tieu.jpg')} style={{height: 200, width:350,marginBottom:20}}/>
            <Text style={styles.textDes}>
                204 Nguyễn Tư Giản, P. 12, Gò Vấp, TP. HCM
            </Text>
            <Text style={styles.textDes}>
                Mở cửa: 8:00 - 17:30
            </Text>
            <Text style={styles.textDes}>
                Giá: 30.000 - 50.000 VND
            </Text>
            
        </View>
        <View style={styles.container}>
            <View style={{marginTop:20, marginBottom:10}}>
                <Text style={{ fontWeight:'bold', fontSize:20, textTransform:'capitalize', flex:1,textAlign:'center'}}>Danh Sách Món</Text>
            </View>
            <Table borderStyle={{borderWidth: 2, borderColor: '#e6e6e6',}}>
                <Row data={tableHead} style={styles.header} textStyle={styles.textHeader}/>
                <Rows data={tableData} textStyle={styles.text}/>
            </Table>
        </View>
        <View style={{alignItems:'center',backgroundColor:'white' }}>
            <Image source={require('./../img/googlemap.jpg')} style={{height: 200, width:350,marginBottom:20}}/>
            <View style={{flexDirection: 'row',marginVertical:30}}>
                <View style={{flex:1 , marginHorizontal:25,}} >
                    <Button  title="Quay Lại" color = "#ff8d1e" onPress={() => Actions.Home()}></Button>
                </View>
                <View style={{flex:1,marginHorizontal:25}} >
                    <Button title="Chỉ Đường" color = "#5cb85c"></Button>
                </View>
            </View>
        </View>
        </ScrollView>
        
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#5cb85c',fontWeight:'bold' },
    textHeader: { textAlign: 'center', fontWeight: 'bold', marginVertical:10,color:'white' },
    text: { textAlign: 'center', fontWeight: '100', marginVertical:10 },
    textDes: {
        fontSize:15,
        color: '#6c757d',
        marginTop: 15,
    }
})
export default ChiTietHomestay;