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
          {
            this.props.deck.map(x =>
            <View key={`deck-${x}`}>
              <TouchableHighlight
                onPress={() => this.props.putCardOnBoard(x)}
              >
                <Image
                  source={this.props.cards[x].img}
                  style={styles.card}
                />
              </TouchableHighlight>
              <View style={styles.cost}>
                <Text style={styles.text}>{this.props.cards[x].cost}</Text>
              </View>
              <View style={styles.atk}>
                <Text style={styles.text}>{this.props.cards[x].atk}</Text>
              </View>
              <View style={styles.hp}>
                <Text style={styles.text}>{this.props.cards[x].hp}</Text>
              </View>
            </View>
            )
          }
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
    right: 0,
    backgroundColor: '#2c3e50'
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  card: {
    height: Dimensions.get('window').width / 5,
    width: Dimensions.get('window').width / 5,
    borderRadius: Dimensions.get('window').width / 10,
    marginBottom: 12
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  },
  cost: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    height: 20,
    width: 20,
    position: 'absolute',
    top: -10,
    left: (Dimensions.get('window').width / 5) / 2 - 10
  },
  atk: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    height: 20,
    width: 20,
    position: 'absolute',
    bottom: 15,
    left: 0
  },
  hp: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    height: 20,
    width: 20,
    position: 'absolute',
    bottom: 15,
    right: 0
  }
});