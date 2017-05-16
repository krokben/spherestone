/**
 * Spherestone
 * http://krokben.se
 */

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
import CardBrowser from './components/CardBrowser';
import Minion from './components/Minion';

import lion from './img/maximshkret-lion.jpg';
import blackbear from './img/maximshkret-blackbear.png';
import blackhorse from './img/maximshkret-blackhorse.png';
import blackwolf from './img/maximshkret-blackwolf.png';
import brownbear from './img/maximshkret-brownbear.png';
import bull from './img/maximshkret-bull.png';
import elephant from './img/maximshkret-elephant.png';
import fishskull from './img/maximshkret-fishskull.png';
import flowergirl from './img/maximshkret-flowergirl.png';
import fox from './img/maximshkret-fox.png';
import gorilla from './img/maximshkret-gorilla.png';
import leopard from './img/maximshkret-leopard.png';
import orangegirl from './img/maximshkret-orangegirl.png';
import owl from './img/maximshkret-owl.png';
import polarbear from './img/maximshkret-polarbear.png';
import puma from './img/maximshkret-puma.png';
import purplesnake from './img/maximshkret-purplesnake.png';
import ram from './img/maximshkret-ram.png';
import reindeer from './img/maximshkret-reindeer.png';
import whitehorse from './img/maximshkret-whitehorse.png';
import whitewolf from './img/maximshkret-whitewolf.jpg';
import wolfgirl from './img/maximshkret-wolfgirl.png';

export default class spherestone extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      players: {
        hero: {
          chosen: false,
          minions: [
            {
              type: 'hero',
              id: false,
              chosen: false,
              style: StyleSheet.create({
                highlight: {
                  borderRadius: 37.5,
                  height: 75,
                  width: 75,
                  position: 'absolute',
                  bottom: 50,
                  left: 10
                },
                img: {
                  borderRadius: 37.5,
                  height: 75,
                  width: 75
                }
              })
            },
            {
              type: 'hero',
              id: false,
              chosen: false,
              style: StyleSheet.create({
                highlight: {
                  borderRadius: 37.5,
                  height: 75,
                  width: 75,
                  position: 'absolute',
                  bottom: 125,
                  left: 55
                },
                img: {
                  borderRadius: 37.5,
                  height: 75,
                  width: 75
                }
              })
            },
            {
              type: 'hero',
              id: false,
              chosen: false,
              style: StyleSheet.create({
                highlight: {
                  borderRadius: 50,
                  height: 100,
                  width: 100,
                  position: 'absolute',
                  bottom: 170,
                  left: 135
                },
                img: {
                  borderRadius: 50,
                  height: 100,
                  width: 100
                }
              })
            },
            {
              type: 'hero',
              id: false,
              chosen: false,
              style: StyleSheet.create({
                highlight: {
                  borderRadius: 37.5,
                  height: 75,
                  width: 75,
                  position: 'absolute',
                  bottom: 125,
                  right: 55
                },
                img: {
                  borderRadius: 37.5,
                  height: 75,
                  width: 75
                }
              })
            },
            {
              type: 'hero',
              id: false,
              chosen: false,
              style: StyleSheet.create({
                highlight: {
                  borderRadius: 37.5,
                  height: 75,
                  width: 75,
                  position: 'absolute',
                  bottom: 50,
                  right: 10
                },
                img: {
                  borderRadius: 37.5,
                  height: 75,
                  width: 75
                }
              })
            }
          ]
        },
        opponent: {
          chosen: false,
          minions: [
            {
              type: 'opponent',
              id: false,
              chosen: false,
              style: StyleSheet.create({
                highlight: {
                  borderRadius: 37.5,
                  height: 75,
                  width: 75,
                  position: 'absolute',
                  top: 50,
                  left: 10
                },
                img: {
                  borderRadius: 37.5,
                  height: 75,
                  width: 75
                }
              })
            },
            {
              type: 'opponent',
              id: false,
              chosen: false,
              style: StyleSheet.create({
                highlight: {
                  borderRadius: 37.5,
                  height: 75,
                  width: 75,
                  position: 'absolute',
                  top: 125,
                  left: 55
                },
                img: {
                  borderRadius: 37.5,
                  height: 75,
                  width: 75
                }
              })
            },
            {
              type: 'opponent',
              id: false,
              chosen: false,
              style: StyleSheet.create({
                highlight: {
                  borderRadius: 50,
                  height: 100,
                  width: 100,
                  position: 'absolute',
                  top: 170,
                  left: 135
                },
                img: {
                  borderRadius: 50,
                  height: 100,
                  width: 100
                }
              })
            },
            {
              type: 'opponent',
              id: false,
              chosen: false,
              style: StyleSheet.create({
                highlight: {
                  borderRadius: 37.5,
                  height: 75,
                  width: 75,
                  position: 'absolute',
                  top: 125,
                  right: 55
                },
                img: {
                  borderRadius: 37.5,
                  height: 75,
                  width: 75
                }
              })
            },
            {
              type: 'opponent',
              id: false,
              chosen: false,
              style: StyleSheet.create({
                highlight: {
                  borderRadius: 37.5,
                  height: 75,
                  width: 75,
                  position: 'absolute',
                  top: 50,
                  right: 10
                },
                img: {
                  borderRadius: 37.5,
                  height: 75,
                  width: 75
                }
              })
            }
          ]
        }
      },
      cards: [
        {
          id: 0,
          title: 'Black Bear',
          img: blackbear,
          hp: 3,
          atk: 2,
          cost: 1
        },
        {
          id: 1,
          title: 'Black Horse',
          img: blackhorse,
          hp: 5,
          atk: 3,
          cost: 9
        },
        {
          id: 2,
          title: 'Black Wolf',
          img: blackwolf,
          hp: 1,
          atk: 4,
          cost: 1
        },
        {
          id: 3,
          title: 'Brown Bear',
          img: brownbear,
          hp: 10,
          atk: 4,
          cost: 1
        },
        {
          id: 4,
          title: 'Bull',
          img: bull,
          hp: 2,
          atk: 1,
          cost: 2
        },
        {
          id: 5,
          title: 'Elephant',
          img: elephant,
          hp: 4,
          atk: 4,
          cost: 2
        },
        {
          id: 6,
          title: 'Fish Skull',
          img: fishskull,
          hp: 4,
          atk: 4,
          cost: 2
        },
        {
          id: 7,
          title: 'Flower Girl',
          img: flowergirl,
          hp: 4,
          atk: 4,
          cost: 3
        },
        {
          id: 8,
          title: 'Fox',
          img: fox,
          hp: 4,
          atk: 4,
          cost: 3
        },
        {
          id: 9,
          title: 'Gorilla',
          img: gorilla,
          hp: 4,
          atk: 4,
          cost: 3
        },
        {
          id: 10,
          title: 'Leopard',
          img: leopard,
          hp: 4,
          atk: 4,
          cost: 4
        },
        {
          id: 11,
          title: 'Orange Girl',
          img: orangegirl,
          hp: 4,
          atk: 4,
          cost: 4
        },
        {
          id: 12,
          title: 'Owl',
          img: owl,
          hp: 4,
          atk: 4,
          cost: 4
        },
        {
          id: 13,
          title: 'Polar Bear',
          img: polarbear,
          hp: 4,
          atk: 4,
          cost: 5
        },
        {
          id: 14,
          title: 'Puma',
          img: puma,
          hp: 4,
          atk: 4,
          cost: 5
        },
        {
          id: 15,
          title: 'Purple Snake',
          img: purplesnake,
          hp: 4,
          atk: 4,
          cost: 6
        },
        {
          id: 16,
          title: 'Ram',
          img: ram,
          hp: 4,
          atk: 4,
          cost: 6
        },
        {
          id: 17,
          title: 'Reindeer',
          img: reindeer,
          hp: 4,
          atk: 4,
          cost: 7
        },
        {
          id: 18,
          title: 'White Horse',
          img: whitehorse,
          hp: 4,
          atk: 4,
          cost: 7
        },
        {
          id: 19,
          title: 'White Wolf',
          img: whitewolf,
          hp: 4,
          atk: 4,
          cost: 8
        },
        {
          id: 20,
          title: 'Wolf Girl',
          img: wolfgirl,
          hp: 4,
          atk: 4,
          cost: 8
        }
      ],
      deck: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      choices: ds.cloneWithRows([
        {
          img: lion,
          styleContainer: 'choiceLeft',
          style: 'choiceImg'
        },
        {
          img: lion,
          styleContainer: 'choiceRight',
          style: 'choiceImg'
        },
        {
          img: lion,
          styleContainer: 'choiceRight',
          style: 'choiceImg'
        },
        {
          img: lion,
          styleContainer: 'choiceRight',
          style: 'choiceImg'
        }
      ]),
      cardBrowser: false
    };
  }

  chooseCard = (player, minion) => {
    const players = this.state.players;
    let cardBrowser = this.state.cardBrowser;

    // Reset all chosen states
    players.hero.chosen = false;
    players.opponent.chosen = false;
    players.hero.minions.forEach(x => x.chosen = false);
    players.opponent.minions.forEach(x => x.chosen = false);

    if (minion === undefined) {
      players[player].chosen = !players[player].chosen;
    } else {
      players[player].minions[minion].chosen =
      !players[player].minions[minion].chosen;
    }
    this.setState({players});

    // If pressed minion is hero's, open Card Browser
    if (player === 'hero') {
      cardBrowser = true;
      this.setState({cardBrowser});
    }
  }

  putCardOnBoard = (id) => {
    const minions = this.state.players.hero.minions;
    const chosenMinion = minions.find(x => x.chosen);
    let cardBrowser = this.state.cardBrowser;

    if (chosenMinion !== undefined) {
      chosenMinion.id = id;
      this.setState({minions});
      console.log(this.state.players.hero.minions);
    }

    cardBrowser = false;
    this.setState({cardBrowser});
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.opponent} onPress={() => this.chooseCard('opponent')}>
          <Image source={lion} style={[styles.opponentImg, this.state.players.opponent.chosen && styles.chosen]} />
        </TouchableHighlight>
        
        {this.state.players.opponent.minions.map((x, i) => <Minion key={'minionOpponent-' + i} cards={this.state.cards} chooseCard={this.chooseCard} idx={i} minion={this.state.players.opponent.minions[i]} />)}

        <TouchableHighlight style={styles.hero} onPress={() => this.chooseCard('hero')}>
          <Image source={lion} style={[styles.opponentImg, this.state.players.hero.chosen && styles.chosen]} />
        </TouchableHighlight>
        
        {this.state.players.hero.minions.map((x, i) => <Minion key={'minionHero-' + i} cards={this.state.cards} chooseCard={this.chooseCard} idx={i} minion={this.state.players.hero.minions[i]} />)}

        <View>
          <ListView
            horizontal
            showsHorizontalScrollIndicator={false}
            dataSource={this.state.choices}
            renderRow={(x) => <TouchableHighlight style={styles[x.styleContainer]}><Image source={x.img} style={styles[x.style]} /></TouchableHighlight>}
          >
          </ListView>
        </View>
        {this.state.cardBrowser && <CardBrowser cards={this.state.cards} deck={this.state.deck} putCardOnBoard={this.putCardOnBoard} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chosen: {
    borderWidth: 2,
    borderColor: 'red'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#34495e',
  },
  choiceLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    width: Dimensions.get('window').width / 2
  },
  choiceRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
    width: Dimensions.get('window').width / 2
  },
  choiceImg: {
    borderRadius: 62.5,
    height: 125,
    width: 125,
  },
  opponent: {
    borderRadius: 75,
    height: 150,
    width: 150,
    position: 'absolute',
    top: 10,
    left: 110
  },
  opponentImg: {
    borderRadius: 75,
    height: 150,
    width: 150
  },
  hero: {
    borderRadius: 75,
    height: 150,
    width: 150,
    position: 'absolute',
    bottom: 10,
    left: 110
  }
});

AppRegistry.registerComponent('spherestone', () => spherestone);
