import React, { Component } from 'react';
import styles from './style.scss';

export default class PlayerProfile extends Component{

  state = {
    isExanded: false
  }

  handleBtnToggleClick = (event) => {
    this.setState({
      isExanded: !this.state.isExanded
    });
  }

  render(){
    const { picture, name, role } = this.props;
    const description = this.state.isExanded ? <p>{this.props.description}</p> : '';
    return (
      <div className={styles.userProfile}>
        <img
          src={picture}
          className={styles.picture}
        />
        <div>
          <h3>{name}</h3>
          <h4>{role}</h4>
          {description}
          <button onClick={this.handleBtnToggleClick}>Toggle</button>
        </div>
      </div>
    );
  }
}
