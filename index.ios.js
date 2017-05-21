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
          playing: true,
          chosen: false,
          mana: 1,
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
          playing: false,
          chosen: false,
          mana: 1,
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
          cost: 1,
          played: false
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
          cost: 1,
          played: false
        },
        {
          id: 3,
          title: 'Brown Bear',
          img: brownbear,
          hp: 10,
          atk: 4,
          cost: 1,
          played: false
        },
        {
          id: 4,
          title: 'Bull',
          img: bull,
          hp: 2,
          atk: 1,
          cost: 2,
          played: false
        },
        {
          id: 5,
          title: 'Elephant',
          img: elephant,
          hp: 4,
          atk: 4,
          cost: 2,
          played: false
        },
        {
          id: 6,
          title: 'Fish Skull',
          img: fishskull,
          hp: 4,
          atk: 4,
          cost: 2,
          played: false
        },
        {
          id: 7,
          title: 'Flower Girl',
          img: flowergirl,
          hp: 4,
          atk: 4,
          cost: 3,
          played: false
        },
        {
          id: 8,
          title: 'Fox',
          img: fox,
          hp: 4,
          atk: 4,
          cost: 3,
          played: false
        },
        {
          id: 9,
          title: 'Gorilla',
          img: gorilla,
          hp: 4,
          atk: 4,
          cost: 3,
          played: false
        },
        {
          id: 10,
          title: 'Leopard',
          img: leopard,
          hp: 4,
          atk: 4,
          cost: 4,
          played: false
        },
        {
          id: 11,
          title: 'Orange Girl',
          img: orangegirl,
          hp: 4,
          atk: 4,
          cost: 4,
          played: false
        },
        {
          id: 12,
          title: 'Owl',
          img: owl,
          hp: 4,
          atk: 4,
          cost: 4,
          played: false
        },
        {
          id: 13,
          title: 'Polar Bear',
          img: polarbear,
          hp: 4,
          atk: 4,
          cost: 5,
          played: false
        },
        {
          id: 14,
          title: 'Puma',
          img: puma,
          hp: 4,
          atk: 4,
          cost: 5,
          played: false
        },
        {
          id: 15,
          title: 'Purple Snake',
          img: purplesnake,
          hp: 4,
          atk: 4,
          cost: 6,
          played: false
        },
        {
          id: 16,
          title: 'Ram',
          img: ram,
          hp: 4,
          atk: 4,
          cost: 6,
          played: false
        },
        {
          id: 17,
          title: 'Reindeer',
          img: reindeer,
          hp: 4,
          atk: 4,
          cost: 7,
          played: false
        },
        {
          id: 18,
          title: 'White Horse',
          img: whitehorse,
          hp: 4,
          atk: 4,
          cost: 7,
          played: false
        },
        {
          id: 19,
          title: 'White Wolf',
          img: whitewolf,
          hp: 4,
          atk: 4,
          cost: 8,
          played: false
        },
        {
          id: 20,
          title: 'Wolf Girl',
          img: wolfgirl,
          hp: 4,
          atk: 4,
          cost: 8,
          played: false
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

  componentDidMount() {
    setInterval(() => {
      this.endTurn();
    }, 10000);
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
    const cards = this.state.cards;
    const chosenMinion = minions.find(x => x.chosen);
    let cardBrowser = this.state.cardBrowser;

    if (chosenMinion !== undefined) { // See if a minion slot is chosen on the board
      chosenMinion.id = id; // Put card in minion slot
      cards[id].played = true; // Make card disabled in card browser
      this.setState({minions});
      this.setState({cards});
    }

    cardBrowser = false;
    this.setState({cardBrowser});
  };

  endTurn = () => {
    const hero = this.state.players.hero;
    const opponent = this.state.players.opponent;

    if (hero.playing) {
      hero.playing = false;
      opponent.playing = true;
      opponent.mana += 1;
    } else {
      opponent.playing = false;
      hero.playing = true;
      hero.mana += 1;
    }
    this.setState({hero});
    this.setState({opponent});
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={[styles.opponent, this.state.players.opponent.playing ? styles.playing : null]} onPress={this.state.players.hero.playing ? () => this.chooseCard('opponent') : null}>
          <Image source={lion} style={[styles.opponentImg, this.state.players.opponent.chosen && styles.chosen]} />
        </TouchableHighlight>
        
        {this.state.players.opponent.playing && <View style={styles.playingOpponent}></View>}

        {this.state.players.opponent.minions.map((x, i) => <Minion key={'minionOpponent-' + i} cards={this.state.cards} chooseCard={this.chooseCard} idx={i} minion={this.state.players.opponent.minions[i]} hero={this.state.players.hero} />)}

        <TouchableHighlight style={[styles.hero, this.state.players.hero.playing ? styles.playing : null]} onPress={this.state.players.hero.playing ? () => this.chooseCard('hero') : null} onLongPress={this.state.players.hero.playing ? this.endTurn : null}>
          <Image source={lion} style={[styles.opponentImg, this.state.players.hero.chosen && styles.chosen]} />
        </TouchableHighlight>
        
        {this.state.players.hero.playing && <View style={styles.playingHero}></View>}
        
        {this.state.players.hero.minions.map((x, i) => <Minion key={'minionHero-' + i} cards={this.state.cards} chooseCard={this.chooseCard} idx={i} minion={this.state.players.hero.minions[i]} hero={this.state.players.hero} />)}

        <View>
          <ListView
            horizontal
            showsHorizontalScrollIndicator={false}
            dataSource={this.state.choices}
            renderRow={(x) => <TouchableHighlight style={styles[x.styleContainer]}><Image source={x.img} style={styles[x.style]} /></TouchableHighlight>}
          >
          </ListView>
        </View>
        {this.state.cardBrowser && <CardBrowser cards={this.state.cards} deck={this.state.deck} putCardOnBoard={this.putCardOnBoard} hero={this.state.players.hero} />}
        
        <Text style={styles.manaOpponent}>{this.state.players.opponent.mana}</Text>
        <Text style={styles.manaHero}>{this.state.players.hero.mana}</Text>
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
  },
  manaHero: {
    color: '#fff',
    fontSize: 20,
    position: 'absolute',
    right: 10,
    bottom: 10
  },
  manaOpponent: {
    color: '#fff',
    fontSize: 20,
    position: 'absolute',
    left: 10,
    top: 10
  },
  playingHero: {
    backgroundColor: '#BADA55',
    borderWidth: 1,
    borderColor: '#BADA55',
    borderRadius: 20,
    height: 40,
    width: 40,
    position: 'absolute',
    bottom: 125,
    left: Dimensions.get('window').width / 2 - 23
  },
  playingOpponent: {
    backgroundColor: '#BADA55',
    borderWidth: 1,
    borderColor: '#BADA55',
    borderRadius: 20,
    height: 40,
    width: 40,
    position: 'absolute',
    top: 5,
    left: Dimensions.get('window').width / 2 - 23
  }
});

AppRegistry.registerComponent('spherestone', () => spherestone);
