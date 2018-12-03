import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import image from './assets/count.jpg';
import Button from './components/Button';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>The Count</Text>
        <Image source={image}/>
        <View style={styles.countContainer}>
          <Button
            backgroundColor='purple'
            symbol='-'
            underlayColor=''
            onPress=''
          />
          <Text style={styles.countText}>0</Text>
          <Button
            backgroundColor='purple'
            symbol='+'
            underlayColor=''
            onPress=''
          />
        </View>
        <Text style={styles.historyHeader}>History</Text>
        <Text>Lorem Ipsum</Text>
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
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  countContainer: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  countText: {
    fontSize: 35,
  },
  historyHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
