import React, { Component } from 'react';
import styles from './app.scss';
import PlayerProfile from './PlayerProfile/PlayerProfile';
import PlayerData from '../data/players.js';

export default class App extends Component{

  generatePlayerList(data){
    return data.map(function(playerData, index){
      return (
        <PlayerProfile
          key={index}
          picture={playerData.picture}
          name={playerData.name}
          role={playerData.role}
          description={playerData.description}
        />
      );
    });
  }

  render(){
    return (
      <div>
        <h1>UEFA Euro 2016</h1>
        <div className={styles.playerList}>
          {this.generatePlayerList(PlayerData)}
        </div>
      </div>
    );
  }

}
