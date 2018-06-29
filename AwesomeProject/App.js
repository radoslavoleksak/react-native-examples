import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Alert, Button } from 'react-native';

export default class App extends React.Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
      
        </View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}}>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => console.log(text)}
          />

          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />

        </View>
        <View style={{flex: 3, backgroundColor: 'steelblue'}}>
          <Text>Lorem ipsum</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
