import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return (
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          
          <Text style={{fontSize:96}}>If you like</Text>
      
          <Text style={{fontSize:96}}>Scrolling down</Text>
          
          <Text style={{fontSize:96}}>What's the best</Text>
       
          <Text style={{fontSize:96}}>Framework around?</Text>
         
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}