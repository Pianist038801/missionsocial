import I18n from 'react-native-i18n';
import { Metrics, Styles, Images, Colors, Fonts } from '@theme/';
import { NavigationActions } from 'react-navigation';
import moment from 'moment';
import CT from '@src/constants';

const Utils = {
  getDiffString(date) {
    const day = moment(date);
    return day.fromNow();
    const sec = parseInt((new Date() - new Date(date)) / 1000);
    const now = new Date();
    console.log(`now=${now}`);
    const old = new Date(date);
    console.log(`old=${old}`);
    if (sec < 60) { return `${sec} seconds ago`; }
    if (sec < 60 * 60) { return `${parseInt(sec / 60)} minutes ago`; }
    if (sec < 60 * 60 * 24) { return `${parseInt(sec / 60 / 60)} hours ago`; }
    if (sec < 60 * 60 * 24 * 31) { return `${parseInt(sec / 60 / 60 / 24)} days ago`; }
    return new Date(date).toLocaleString();
  },
  getResetAction(routeName, params = null) {
    let action = NavigationActions.reset({
      index: 0,
      params,
      actions: [NavigationActions.navigate({ routeName })],
    });
    action.direction='forward';
    return action;
  },
  getWeekNumber(date) {
    const tgt = moment(new Date(date));

    const startDay = moment(CT.START_DAY);
    console.log(tgt);
    console.log(startDay);
    console.log(tgt.diff(startDay, 'weeks') + 1);
    return tgt.diff(startDay, 'weeks') + 1;
  },
  getRankString(rank) {
    const tRank = rank;
    if (tRank === 1) {
      return `${tRank}ST`;
    } else if (tRank === 2) {
      return `${tRank}ND`;
    } else if (tRank === 3) {
      return `${tRank}RD`;
    }
    return `${tRank}TH`;
  },
  replaceRoute(navigation, routeName) {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName }),
      ],
    });
    resetAction.direction='forward'
    navigation.dispatch(resetAction);
  },
  pushRoute(navigation, routeName) {
    navigation.navigate(routeName);
  },
  getSocialColor(socialType){
    switch(socialType)
    {
      case 'facebook':
        return '#3b5998';
      case 'twitter':
        return '#55acee';
      case 'instagram':
        return '#e4405f';
      case 'linkedin':
        return '#0077b5';
      case 'google-plus':
        return '#dd4b39';
    }
  },
  getSocialText(socialType){
    switch(socialType)
    {
      case 'facebook':
        return 'Facebook';
      case 'twitter':
        return 'Twitter';
      case 'instagram':
        return 'Instagram';
      case 'linkedin':
        return 'LinkedIn';
      case 'google-plus':
        return 'Google Plus';
    }
  },
  getKeywordList(keyword, keywordList, hintList) {
    const result = [];
    const findMatch = (term1, term2) => term1.toLowerCase().indexOf(term2.toLowerCase()) > -1;
    let results = keywordList.filter(((eachTerm) => {
      if (findMatch(eachTerm, keyword)) return eachTerm;
    }));
    results = results.filter(x => hintList.indexOf(x) === -1);
    const inputIsEmpty = !!(keyword.length <= 0);
    return inputIsEmpty ? [] : results;
  },
  getTextInputBorderColor(state) {
    return state ? Colors.borderFocused : Colors.txtWhite;
  },
  getFieldInputBorderColor(state) {
    return state ? Colors.borderThird : Colors.borderPrimary;
  },
  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  clone(obj) {
    if (obj == null || typeof obj !== 'object') return obj;
    const copy = obj.constructor();
    for (const attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
  },
  getStringFromDate(date) {
    date = new Date(date);
    const month = (date.getMonth() + 1);
    const day = date.getDate();
    const year = date.getFullYear();
    // if (month.length < 2) month = '0' + month;
    // if (day.length < 2) day = '0' + day;
    return `${month}-${day}-${year}`;
  },
  getAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours || 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const strTime = `${hours}:${minutes} ${ampm}`;
    return strTime;
  },
  getTimeString(hours, minutes) {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours || 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const strTime = `${hours}:${minutes} ${ampm}`;
    return strTime;
  },
  getDateString(date) {
    date = new Date(date);
    console.log(date);
    console.log('--------------@@@@@@');
    console.log(date.getDate());
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return (`${day[date.getDay()]} ${month[date.getMonth()]},${this.getRankString(date.getDate())}`);
  },
  todayOrYesterday(date) {
    const today = new Date();
    const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
    const isToday = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
    const isYesterday = date.getDate() === yesterday.getDate() && date.getMonth() === yesterday.getMonth() && date.getFullYear() === yesterday.getFullYear();
    if (isToday) return 0;
    if (isYesterday) return 1;
    return 2;
  },
  isSameDate(date1, date2) {
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
  },
  getHeaderString(abbText) {
    if (abbText === 'IP') {
      return I18n.t('IN_PROGRESS');
    } else if (abbText === 'TD') {
      return I18n.t('TODO');
    } else if (abbText === 'DN') {
      return I18n.t('DONE');
    } else if (abbText === 'RR') {
      return I18n.t('REVIEW_READY');
    }
    return '';
  },
};

export default Utils;
