import * as React from 'react';
import { Text, View, StyleSheet,TextInput} from 'react-native';
import Constants from 'expo-constants';

export default class NumberInput extends React.Component {
	state = {};


	render() {
		return (
			<View style={styles.container}>
				<TextInput 
        style={styles.number}
				keyboardType="numeric"
				onChangeText={this.props.onChangeText}
				value={this.props.value}/>
				<Text style={styles.paragraph}> {this.props.title}</Text>
			</View>
		);
	}

}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    fontWeight: 500,
    padding: 8,
    margin: 4,
  },
  number:{    
    fontSize: 26,
    textAlign: 'right',
    alignSelf: "flex-end",
    width: "90%",
    borderBottomWidth: "1px",
  },
  paragraph: {
    margin: 4,
    fontSize: 22,    
    textAlign: 'right',
  },
  });