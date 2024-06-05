/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, Image, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <ScrollView style={{backgroundColor: '#EF7D00'}}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image source={require('./assets/bar_image.png')} />

          <Text style={{position: 'absolute'}}>
            {'penny \n'}
            <Text>{'appeal'}</Text>
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text>{'Salam, Ahmed'}</Text>
          <Image source={require('./assets/search_image.png')} />
        </View>
      </View>

      <View></View>
    </ScrollView>
  );
}

export default App;
