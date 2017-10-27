import { Component } from 'react';
import { Platform } from 'react-native';

import FCM, { FCMEvent } from 'react-native-fcm';


export default class PushController extends Component {
  componentDidMount() {
    FCM.requestPermissions();

    FCM.getFCMToken().then((token) => {
      console.log('TOKEN (getFCMToken)', token);
      this.props.onChangeToken(token);
    });

    FCM.getInitialNotification().then((notif) => {
      console.log('INITIAL NOTIFICATION', notif);
    });
    this.notificationListner = FCM.on(FCMEvent.Notification, (notif) => {
      if (notif.local_notification) { return; }
      if (notif.opened_from_tray) { return; }
      this.showLocalNotification(notif);
    });

    this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, (token) => {
      console.log('TOKEN (refreshUnsubscribe)', token);
      this.props.onChangeToken(token);
    });
  }

  componentWillUnmount() {
    this.notificationListner.remove();
    this.refreshTokenListener.remove();
  }

  showLocalNotification(notif) {
    if (Platform.OS === 'android') {
      FCM.presentLocalNotification({
        title: notif.fcm.title,
        body: notif.fcm.body,
        priority: 'high',
        show_in_foreground: true,
        local: true,
      });
    } else {
      FCM.presentLocalNotification({
        title: notif.aps.alert.title,
        body: notif.aps.alert.body,
        priority: 'high',
        show_in_foreground: true,
        local: true,
      });
    }
  }

  render() {
    return null;
  }
}
