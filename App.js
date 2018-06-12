import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Albums!'} />
        <Text numberOfLines={3}>
          "React Native is like React,
          but it uses native components instead of web components
          as building blocks. So to understand the basic structure 
          of a React Native app, you need to understand some of the basic
          React concepts, like JSX, components, state, and props. 
          If you already know React, you still need to learn some 
          React-Native-specific stuff, like the native components.
          This tutorial is aimed at all audiences, 
          whether you have React experience or not.
          {'\n'}{'\n'}Let's do this thing."</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  }
});
