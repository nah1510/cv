import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux'
import Home from './components/Home'
import Step1 from './components/ThueXeStep1'
import Step2 from './components/ThueXeStep2'
import Step3 from './components/ThueXeStep3'
import Step4 from './components/ThueXeStep4'
import Step5 from './components/ThueXeStep5'
import ExampleFour from './components/HistoryBooking'
import Searching from './components/Timkiem'
import SearchingFood from './components/TimkiemMonAn'
import ChiTietDiaDiem from './components/CTDiaDiem'
import ChiTietHomestay from './components/DatPhong'

import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
 
export default class App extends React.Component {
  constructor(){
    super()
  }
  render() {
    return (
      <>
      <Router>
      <Scene key="root">

        <Scene
              key="CTHomeStay"
              component={ChiTietHomestay}
              hideNavBar={true}
            />
        <Scene
              key="Home"
              component={Home}
              hideNavBar={true}
            />
          <Scene
              key="CTDiaDiem"
              component={ChiTietDiaDiem}
              hideNavBar={true}
            />
          <Scene
              key="Step1"
              component={Step1}
              title="Step1"
              hideNavBar={true}
            />
          <Scene
              key="Step2"
              component={Step2}
              title="Step2"
              hideNavBar={true}
            />
            <Scene
              key="Step3"
              component={Step3}
              title="Step3"
              hideNavBar={true}
            />
            <Scene
              key="Step4"
              component={Step4}
              title="Step4"
              hideNavBar={true}
            />
            <Scene
              key="Step5"
              component={Step5}
              title="Step4"
              hideNavBar={true}
            />
            <Scene
              key="history"
              component={ExampleFour}
              title="Lịch sử đặt xe"
            />

          <Scene key="Searching1"
            component={Searching}

          />
          <Scene
              key="Searching2"
              component={SearchingFood}
              title="Tìm Kiếm Món Ăn"
            />
      </Scene>
      
    </Router>
    </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",

    alignItems:'center',

  },
  scrollView:{

  }
});