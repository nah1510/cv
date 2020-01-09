import React,{ Component } from 'react-native'
import {View, StyleSheet, Button, Text} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Actions } from 'react-native-router-flux';

const historyBooking = () => {
    return (
        <View>
            <Text>Hello this is history</Text>
            <Button onPress={() => Actions.Step1()} title="Quay về step 1" />
        </View>
    )
}

const styles = StyleSheet.create({
    
})
export default historyBooking;
