/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import Button from './src/components/Button';
export default class App extends Component {
  state={
    contador:0
  }
  apertou= ()=>{
    Alert.alert(this.props.alerta)
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
        <ScrollView>
          <Text>{this.state.contador}</Text>
          <TouchableOpacity onPress={this.apertou}>
        <Text>Somar</Text>
      </TouchableOpacity>
          <Button title="marcos" >
            <Text>Button</Text>
          </Button>
          <Text>teste</Text>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
