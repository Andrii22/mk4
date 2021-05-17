import * as React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import SimpleInput from '../components/simpleInput.js';
import RNPickerSelect from 'react-native-picker-select';
import Constants from 'expo-constants';

const listOfType = [
  { label: 'Метри', value: '0' },
  { label: 'Кілометри', value: '1' },
  { label: 'Милі', value: '2' },
];

const listOfValues = [
  [1, 1000, 1609.34],
  [1000, 1, 1.60934], 
  [1609.34, 1.60934, 1], 
];

export default class App extends React.Component {
  state = {
    unitFrom: parseInt(listOfType[0].value),
    unitTo: parseInt(listOfType[1].value),
    unit1: 0,
    unit2: 0,
  };

  convertUnit1ToUnit2(value, type = this.state.unitFrom) {
    this.setState({
      unit1: value,
      unit2: this.convertedValue(type, value, this.state.unitTo),
    });
  }

  converUnit2ToUnit1(value, type = this.state.unitTo) {
    this.setState({
      unit1: this.convertedValue(type, value, this.state.unitFrom),
      unit2: value,
    });
  }

  setUnitFrom(value) {
    this.setState({ unitFrom: parseInt(value) });
    this.convertUnit1ToUnit2(this.state.unit1);
  }

  setUnitTo(value) {
    this.setState({ unitTo: parseInt(value) });
    this.converUnit2ToUnit1(this.state.unit2);
  }

convertedValue(currentMode, currentUnit, convertedType) { 
    return currentMode >= convertedType
        ? currentUnit * listOfValues[currentMode][convertedType]
        : currentUnit / listOfValues[currentMode][convertedType];
  }

  checkUnitMode(mode) {
    mode = parseInt(mode);
    if (listOfType[mode] !== undefined) {
      return listOfType[mode].label;
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <RNPickerSelect
              onValueChange={(value) => this.setUnitFrom(value)}
              items={listOfType}
              value = {this.state.unitFrom.toString()}
              style = {styles}
              placeholder = {{}}
            />

            <SimpleInput
              title={this.checkUnitMode(this.state.unitFrom)}
              onChangeText={(text) => this.convertUnit1ToUnit2(text)}
              value={this.state.unit1.toString()}
            />

            <RNPickerSelect
              onValueChange={(value) => this.setUnitTo(value)}
              items={listOfType}
              value = {this.state.unitTo.toString()}
              style = {styles}
              placeholder = {{}}
            />

            <SimpleInput
              title={this.checkUnitMode(this.state.unitTo)}
              onChangeText={(text) => this.converUnit2ToUnit1(text)}
              value={this.state.unit2.toString()}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  main: {
    paddingTop: 20,
  }
});
