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

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>{'$450'}</Text>
        <Text>{'2024 donation goal'}</Text>

        <View style={{flexDirection: 'row'}}>
          <Text>{'$1,000'}</Text>
          <Image source={require('./assets/next_icon.png')} />
        </View>
      </View>

      <View style={{height: 5, backgroundColor: '#FFFFFF66'}}></View>

      <View style={{marginTop: 20}}></View>

      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{backgroundColor: '#FFF', flex: 1, flexDirection: 'row'}}>
          <View>
            <Text>{'Round up'}</Text>
            <Text>{'$25 round up last month'}</Text>
          </View>

          <Image source={require('./assets/round_up.png')} />
        </View>
        <View style={{marginLeft: 10}}></View>
        <View style={{backgroundColor: '#FFF', flex: 1, flexDirection: 'row'}}>
          <View>
            <Text>{'Round up'}</Text>
            <Text>{'$25 round up last month'}</Text>
          </View>

          <Image source={require('./assets/round_up.png')} />
        </View>
      </View>
    </ScrollView>
  );
}

export default App;
