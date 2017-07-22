//
// ─── STYLE 2 ────────────────────────────────────────────────────────────────────
//

// Students: Make this app's layout
// reflect the design in layout2.jpg
// =================================

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Flex2 extends Component {


  // TODO
  // ====
  // Complete the following render method
  // by nesting View components with 'row' and 'box' styles.

  render() {
    return (
      /* Container for all rows */
      <View style={styles.container}>

        {/* Row 1 */}
        {/* Four boxes */}
        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={styles.text}>r1c1</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r1c2</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r1c3</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r1c4</Text>
          </View>
        </View>

        {/* Row 2 */}
        {/* Four boxes */}
        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={styles.text}>r2c1</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r2c2</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r2c3</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r2c4</Text>
          </View>
        </View>

        {/* Row 3 */}
        {/* Four boxes */}
        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={styles.text}>r3c1</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r3c2</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r3c3</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r3c4</Text>
          </View>
        </View>

        {/* Row 4 */}
        {/* Four boxes */}
        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={styles.text}>r3c1</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r3c2</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r3c3</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r3c4</Text>
          </View>
        </View>

        {/* Row 5 */}
        {/* Four boxes */}
        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={styles.text}>r3c1</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r3c2</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r3c3</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r3c4</Text>
          </View>
        </View>

        {/* Row 6 */}
        {/* Four boxes */}
        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={styles.text}>r3c1</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r3c2</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r3c3</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r3c4</Text>
          </View>
        </View>

        {/* Row 7 */}
        {/* Four boxes */}
        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={styles.text}>r3c1</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r3c2</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r3c3</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>r3c4</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  // We set flex to 1 since it's taking up the whole screen.
  container: {
    flex: 1
  },

  row: {
    // TODO:
    // ====
    // Set flex and flex direction to their proper values.
    flexDirection: 'row',
    flex: 1
  },

  // Box styles.
  box: {
    backgroundColor: 'crimson',
    // TODO:
    // ====
    // Set the proper values for flex, margin, 
    // alignItems and justifyContent.
    margin: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },

  // Text styles.
  text: {
    color: 'white',
    fontSize: 24
  }
});

AppRegistry.registerComponent('flex2', () => Flex2);
