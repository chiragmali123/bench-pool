import React, { Component } from 'react';

class Notification extends Component{
    render() {

        const {notification} = this.props;
        return (<li className="sidebar-notification-item">
           <span className="notification-item-img-container">
             {notification.objectType === "CHALLENGES" && <img className="notification-item-img" src={require('assets/img/opp2.jpg')} />}
             {notification.objectType === "OPPORTUNITY" && <img className="notification-item-img" src={require('assets/img/challenge.jpg')} />}
               </span> <span>{notification.summary}</span>
    </li>)
    }
}
export default Notification;