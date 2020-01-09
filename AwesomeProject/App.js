import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux'
import Step1 from './components/ThueXeStep1'
import Step2 from './components/ThueXeStep2'
import Step3 from './components/ThueXeStep3'
import Step4 from './components/ThueXeStep4'
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
      <Router>
      <Scene key="root">
      <Scene
            key="Step1"
            component={Step1}
          />
        <Scene
            key="Step2"
            component={Step2}
            title="Thông tin"
          />
          <Scene
            key="Step3"
            component={Step3}
            title="Thông tin"
          />
          <Scene
            key="Step4"
            component={Step4}
            title="Thông tin"
          />
      </Scene>
      
    </Router>
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