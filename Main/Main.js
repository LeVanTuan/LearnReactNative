import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, ActivityIndicator } from 'react-native';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      title: '',
      description: ''
    };
  }

  componentDidMount() {
    const link = 'https://facebook.github.io/react-native/movies.json';
    this.fetchDataFromInternet(link);
  }
  
  //Fetch data
  fetchDataFromInternet(link) {
    return fetch(link)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        title: responseJson.title,
        description: responseJson.description,
        dataSource: responseJson.movies,
      }, () => {

      });
    })
    .catch((error) => {
      console.error(error);
    }); 
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.item}>{this.state.title}</Text>
        <Text style={styles.item}>{this.state.description}</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
