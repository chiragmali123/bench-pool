import './Notifications.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';


import Notification from './Notification';
import { fetchNotification } from 'Actions/AuthenticationAction';
import { NOTIFICATION_THRESHOLD_COUNT } from 'constant/Constants';
import { checkValueNotEmpty } from 'utils';
import { isArrayEmpty } from 'utils';

class Notifications extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.getNotificationDetails(props),
            showPanel: false
        };
    }

    componentWillMount() {
        this.fetch();
    }

    fetch = () => {
        if (checkValueNotEmpty(this.props.userEmail)) {
            this.props.fetchNotifications({ userEmail: this.props.userEmail });
        }
    }

    componentWillUpdate() {
        //this.fetch();
    }

    getNotificationDetails = (props) => {
        return {
            notifications: props.notifications ? props.notifications : [],
            notificationsCount: props.notifications ? props.notifications.length : 0
        }
    }

    componentWillReceiveProps(nextProps) {
        let newStateObject = {};

        if (JSON.stringify(nextProps.notifications) !== JSON.stringify(this.state.notifications)) {
            newStateObject = { ...newStateObject, ...this.getNotificationDetails(nextProps) }
        }

        if (Object.keys(newStateObject).length > 0) {
            this.setState({ ...this.state, ...newStateObject })
        }
    }

    notificationsNotEmpty = () => {
        let notifications = this.state.notifications;
        if (notifications && notifications.length > 0) {
            return true;
        }
        return true;
    }

    showNotificationCount = () => {
        let notificationsCount = this.state.notificationsCount;
        if (notificationsCount && notificationsCount > 0) {
            return true;
        }
        return false;
    }

    showIcon = () => {
        return true;
    }


    toggleNotificationPanel = () => {
        if (this.state.notificationsCount > 0) {
            this.setState({
                showPanel: !this.state.showPanel
            });
        }
    }

    render() {
        const { notificationsCount } = this.state;
        const panelClassName = this.state.showPanel === true ? "dropdown open" : "dropdown";
        return (
            this.showIcon() ? <div className={panelClassName} id="waitlist-notification-nav">
                <a id="navDropDown" className="dropdown-toggle" onClick={this.toggleNotificationPanel}>
                    <span className="notification-icon"><img className="notification-img" src={require("assets/img/weblist_icon_notification.png")} />
                    </span>
                    {this.showNotificationCount() &&
                        <span className="notification-count">{notificationsCount > NOTIFICATION_THRESHOLD_COUNT ? `${NOTIFICATION_THRESHOLD_COUNT}+` : notificationsCount}</span>
                    }
                </a>
                {this.state.showPanel && <ul className="dropdown-menu" id="notification-dropdown">
                    <div>
                        {this.notificationsNotEmpty() && this.state.notifications.map(notification => {
                            return (<Notification notification={notification} key={notification.guid} />)
                        })
                        }
                    </div>
                </ul>
                }
            </div> : null
        )
    }
}

function mapStateToProps(state) {
    return {
        notifications: isArrayEmpty(state.appData.notifications) ? [] : state.appData.notifications,
        userEmail: state.appData.user ? state.appData.user.email:null
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchNotifications: (request) => dispatch(fetchNotification(request))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notifications);