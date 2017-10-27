import I18n from 'react-native-i18n';
import { Icons } from '@theme';

const constants = {
  

  START_DAY: new Date(2017,7,8),
  AVATAR_PLACEHOLDER: 'https://firebasestorage.googleapis.com/v0/b/ducketapp.appspot.com/o/avatar%2FimgAvatar.png?alt=media&token=03d16d09-ade5-4176-a994-46cfee6b5727',
  SERVER_URL: 'http://192.168.1.125:7276',
  IP_BUTTONS: [
    { key: 0, label: 'Send Post' },
    { key: 1, label: 'Schedule Post'},
    { key: 2, label: 'Cancel' },
  ],
  HOME_TABS: [
    { id: 0, title: 'WHO', icon: 'who' },
    { id: 1, title: 'WHAT', icon: 'what' },
    { id: 2, title: 'AN10NA', icon: 'an10na' },
    { id: 3, title: 'WATCH', icon: 'watch' },
    { id: 4, title: 'SHARE', icon: 'share' },
  ],
  FLAG_REASONS: [
    { id: 0, name: I18n.t('SPAM') },
    { id: 1, name: I18n.t('FRAUD') },
    { id: 2, name: I18n.t('ABUSIVE') },
    { id: 3, name: I18n.t('PROBLEMATIC') },
    { id: 4, name: I18n.t('OTHER') },
  ],
  AGE: {
    MIN: 1,
    MAX: 30,
  },
  GRADE: {
    MIN: 1,
    MAX: 30,
  },
   
 
};

export default constants;
