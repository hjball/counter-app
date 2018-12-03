import React from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';

const Button = ({ backgroundColor, underlayColor, symbol, onPress }) => (
	<TouchableHighlight style={[styles.button, { backgroundColor: backgroundColor }]} underlayColor={ underlayColor } onPress={ onPress }>
	    <Text style={styles.buttonLabel}>{ symbol }</Text>
	</TouchableHighlight>
);

export default Button;


const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});