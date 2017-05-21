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
import lion from './../img/maximshkret-lion.jpg';

export default class Minion extends Component {
  render() {
    return (
      <TouchableHighlight
        style={this.props.minion.style.highlight}
        onPress={this.props.hero.playing && !this.props.minion.id ? () => this.props.chooseCard(this.props.minion.type, this.props.idx) : null}>
        <Image
          source={this.props.minion.id ? this.props.cards[this.props.minion.id].img : lion}
          style={[this.props.minion.style.img, this.props.minion.chosen && styles.chosen]} />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  chosen: {
    borderWidth: 2,
    borderColor: 'red'
  }
});