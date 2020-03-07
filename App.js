import React from 'react';
import {StyleSheet, View, Button, Alert} from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.checkPreviousSession();
  }

  async checkPreviousSession() {
    const didCrash = await Crashes.hasCrashedInLastSession();
    if (didCrash) {
      const report = await Crashes.lastSessionCrashReport();
      Alert.alert(
        'Sorry',
        "Sorry about that crash, we're working on a solution",
        [{text: 'Okay', onPress: () => console.log('pressed')}],
      );
      // console.log(report);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Button
          title="Crash"
          onPress={() => {
            Crashes.generateTestCrash();
          }}
        /> */}
        <Button
          title="Calculate inflation"
          onPress={() => {
            Analytics.trackEvent('calculate_inflation', {
              Internet: 'Cellular',
              GPS: 'On',
            });
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
