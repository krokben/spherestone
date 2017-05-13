import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';
import lion from '../img/maximshkret-lion.jpg';

export default class spherestone extends Component {
  render() {
    return (
      <View style={styles.cardBrowser}>
        <View style={styles.cards}>
          {this.props.deck.map(x => <TouchableHighlight key={`deck-${x}`} onPress={() => this.props.putCardOnBoard(x)}><Image source={this.props.cards[x].img} style={styles.card} /></TouchableHighlight>)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardBrowser: {
    padding: 10,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#000',
  },
  card: {
    height: Dimensions.get('window').width / 5,
    width: Dimensions.get('window').width / 5,
    borderRadius: Dimensions.get('window').width / 10
  }
});