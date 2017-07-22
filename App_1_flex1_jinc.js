//
// ─── STYLE EXERCISE 1 ───────────────────────────────────────────────────────────
//

// Students: Make this app's layout
// reflect the design in layout1.jpg
// =================================

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Flex1 extends Component {
  render() {
    return (
      // TODO
      // ====
      // Place the proper style objects in the style prop.
      // Keep in mind that View will need two style objects.
      // Use an array to select multiple styles!
      <View style={styles.container}>
        <View style={[styles.header, styles.box]}>
          <Text style={styles.text}>Header</Text>
        </View>
        <View style={[styles.body, styles.box]}>
          <Text style={styles.text}>Body</Text>
        </View>
        <View style={[styles.footer, styles.box]}>
          <Text style={styles.text}>Footer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  // Container Element
  container: {
    // We set flex to 1 since it's taking up the whole screen
    flex: 1
  },

  // All boxes get crimson colors.
  box: {
    backgroundColor: 'crimson'
  },

  // NOTE: Flex works on a ratio system.
  // All of the child flex elements add up to eight,
  // so all elements will take up a portion of the screen
  // equal to their flex value divided by the total.
  // In this case: 2/8, 5/8 and 1/8.

  // Header styles
  header: {

    // TODO:
    // ====
    // Set the proper flex and margin values
    flex: 2,
    margin: 10,
    alignItems: 'center', // Center elements horizontally.
    justifyContent: 'center' // Center elements vertically.
  },

  // Body styles
  body: {

    // TODO:
    // ====
    // Set the proper flex and margin values
    flex: 10,
    margin: 10,
    alignItems: 'center', // Center elements horizontally.
    justifyContent: 'center' // Center elements vertically.
  },

  // Footer styles
  footer: {

    // TODO:
    // ====
    // Set the proper flex and margin values
    flex: 1,
    margin: 10,
    alignItems: 'center', // Center elements horizontally.
    justifyContent: 'center' // Center elements vertically.
  },

  // Text styles
  text: {
    color: 'white',
    fontSize: 24
  }
});

AppRegistry.registerComponent('flex1', () => Flex1);
