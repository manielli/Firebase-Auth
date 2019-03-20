import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { constants } from './constants';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: constants.apiKey,
      authDomain: constants.authDomain,
      databaseURL: constants.databaseURL,
      projectId: constants.projectId,
      storageBucket: constants.storageBucket,
      messagingSenderId: constants.messagingSenderId
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'space-around'
  },
});
