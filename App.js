import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import Crashes from 'appcenter-crashes';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.checkPreviousSession();
  }

  async checkPreviousSession() {
    const didCrash = await Crashes.hasCrashedInLastSession();
    if (didCrash) {
      const report = await Crashes.lastSessionCrashReport();
      alert("Sorry about that crash, we're working on a solution");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Crash"
          onPress={() => {
            Crashes.generateTestCrash();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});
