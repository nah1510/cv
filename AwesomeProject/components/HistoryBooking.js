import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert,ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
 
export default class ExampleFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['ID', 'Tài xế', 'Trạng thái','Ngày','Hành động'],
      tableData: [
        [ '00364', 'Otto','Đang chờ xử lý', '20 Sep, 8:56 PM', '5'],
        [ '00364', 'Tom','Đang chờ xử lý', '20 Sep, 8:56 PM', '5'],
        [ '00364', 'Jerry','Hoành thành', '20 Sep, 8:56 PM', '6'],
        [ '00364', 'Otto','Đang chờ xử lý', '20 Sep, 8:56 PM', '5'],
        ['00364', 'Tom','Otto', '20 Sep, 8:56 PM', '6'],
        [ '00364', 'Jerry','Đang chờ xử lý', '20 Sep, 8:56 PM', '5'],
        [ '00364', 'Otto','Đang chờ xử lý', '20 Sep, 8:56 PM', '5'],
        [ '00364', 'Tom','Hoành thành', '20 Sep, 8:56 PM', '6'],
        [ '00364', 'Jerry','Hoành thành', '20 Sep, 8:56 PM', '6'],
        [ '00364', 'Otto','Hoành thành', '20 Sep, 8:56 PM', '6'],
        [ '00364', 'Tom','Hoành thành', '20 Sep, 8:56 PM', '6'],
        [ '00364', 'Jerry','Hoành thành', '20 Sep, 8:56 PM', '6'],
        [ '00364', 'Otto','Hoành thành', '20 Sep, 8:56 PM', '6'],
        [ '00364', 'Tom','Hoành thành', '20 Sep, 8:56 PM', '6'],
        [ '00364', 'Jerry','Hoành thành', '20 Sep, 8:56 PM', '6'],
        [ '00364', 'Miki','Hoành thành', '20 Sep, 8:56 PM', '6']
      ]
    }
  }
 
  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
 
  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity >
        <View style={styles.btn}>
          <Text style={styles.btnText}>Hủy</Text>
        </View>
      </TouchableOpacity>
    );
    const element1 = (data, index) => (
        <TouchableOpacity >
          <View style={styles.btn1}>
            <Text style={styles.btnText}>Xong</Text>
          </View>
        </TouchableOpacity>
      );
    return (
      <View style={styles.container}>
           <ScrollView style={styles.dataWrapper}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell style={styles.cell} key={cellIndex} data={cellData == 5 ? element(cellData, index) : cellData == 6? element1(cellData, index) :cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#d9534f',  borderRadius: 10 },
  btn1:{ width: 58, height: 18, backgroundColor: '#5cb85c',  borderRadius: 10 },
  btnText: { textAlign: 'center', color: '#fff' },

});