import React, { Component } from 'react';

class Notification extends Component{
  render() {

    const { notification } = this.props;
    return (<li className="sidebar-notification-item">
      <span className="notification-item-img-container">
        {notification.objectType === "CHALLENGES" && <img className="notification-item-img" src={require('assets/img/opp2.jpg')} />}
        {notification.objectType === "OPPORTUNITY" && <img className="notification-item-img" src={require('assets/img/challenge.jpg')} />}
      </span> {notification.objectType === "OPPORTUNITY" && <span>{notification.actionPerformedByUser ? notification.actionPerformedByUser.firstName + ' user intrested in ' : ''}{notification.summary} opportunity</span>}
      {notification.objectType === "CHALLENGES" && <span>{notification.actionPerformedByUser ? notification.actionPerformedByUser.firstName + ' user submitted solution for challenge: ' : ''}{notification.summary}</span>}
    </li>)
  }
}
export default Notification;