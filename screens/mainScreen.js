import * as React from 'react';
import { Text, View, StyleSheet, Image, Button,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity
          style={styles.toucher}
          onPress={() => {
            navigation.navigate('Length');
          }}>
          <Image style={styles.image} source={require("../ruler.png")}></Image>
          <Text style={styles.text}>Довжина</Text>
        </TouchableOpacity>
     <TouchableOpacity
          style={styles.toucher}
          onPress={() => {
            navigation.navigate('Time');
          }}>
          <Image style={styles.image} source={require("../timer.png")}></Image>
          <Text style={styles.text}>Час</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    color: "yellow",
    backgroundColor: 'bisque',
    padding: 10,
  },
  toucher: {
    flexGrow:1,
    width:"50%", 
    height: "30%",
    margin: 2,
    textAlign: "center",
    justifyContent: "center"
  },
  image: {
    flex: 1,
    width: "50%",
    height: null,
    alignSelf: "center",
    resizeMode: 'contain'
  },
  text:{
    fontSize: 16,
  }
  
});

export default MainScreen;
