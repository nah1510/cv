import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux'
import Step1 from './components/ThueXeStep1'
import Step2 from './components/ThueXeStep2'
import Step3 from './components/ThueXeStep3'
import Step4 from './components/ThueXeStep4'
import Step5 from './components/ThueXeStep5'
import historyBooking from './components/HistoryBooking'
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
            key="history"
            component={historyBooking}
            title="HisTory"
          />
        <Scene
            key="Step1"
            component={Step1}
            title="Step1"
          />
        <Scene
            key="Step2"
            component={Step2}
            title="Step2"
          />
          <Scene
            key="Step3"
            component={Step3}
            title="Step3"
          />
          <Scene
            key="Step4"
            component={Step4}
            title="Step4"
          />
          <Scene
            key="Step5"
            component={Step5}
            title="Step4"
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