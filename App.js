/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const App = () => {
  const text = 'Friday Blockbuster\n        Deals (3)';
  const word = 'Community\n   Deals (4)';
  const texts = 'Logo\nMollyMoo Icecreams (Jaipur)';
  const words =
    'Tentative Savings: Rs. 125 Location: Click Here Deal\nType: Product/Service Store Timing: If added in\nbusiness profile';

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          backgroundColor: '#D83772',
          paddingBottom: wp('4%'),
          paddingTop: wp('4%'),
          paddingLeft: wp('2%'),
          flexDirection: 'row',
        }}>
        <Image source={require('./src/image/arrow.png')} />
        <View style={{alignItems: 'center', paddingLeft: wp('30%')}}>
          <Text style={{color: 'white'}}>Blockbuster Deals</Text>
        </View>
      </View>
      <View style={{marginLeft: wp('4%'), marginRight: wp('6%')}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            marginTop: wp('7%'),
          }}>
          <Text
            style={{
              backgroundColor: '#D83772',
              color: '#FFFFFF',
              
              borderRadius: wp('1%'),
             flex:1,
              marginRight:wp('2%'),
              textAlign:'center',
              padding:wp('4%')
            }}>
            {text}
          </Text>
          <Text
            style={{
              backgroundColor: '#0C7793',
              color: '#FFFFFF',
            
              borderRadius: wp('1%'),
              flex:1,
              textAlign:'center',
              padding:wp('4%')
            }}>
            {word}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#F5F6F9',
            height: wp('50%'),
            width: wp('90%'),
            marginTop: wp('4%'),
            borderRadius: wp('1%'),
          }}></View>

        <View
          style={{
            marginTop: wp('3%'),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#0C7793', fontWeight: 'bold'}}>{texts}</Text>
          <View style={{marginTop: wp('2%')}}>
            <Image
              source={require('./src/image/thumb.png')}
              style={{height: wp('5%'), width: wp('5%')}}
            />
            <Text
              style={{
                fontSize: wp('2.5%'),
                marginTop: wp('1%'),
                marginRight: wp('3%'),
              }}>
              500 Likes
            </Text>
          </View>
        </View>
        <View style={{marginTop: wp('3%')}}>
          <Text style={{color: '#000000'}}>{words}</Text>
        </View>

        <View style={{marginTop: wp('3%')}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Customer Care: 9837937838/898948948494
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            height: wp('80%'),
            alignItems: 'center',
            paddingTop: wp('20%'),
          }}>
          <Text
            style={{
              backgroundColor: '#D83772',
              width: wp('90%'),
              paddingBottom: wp('3%'),
              paddingTop: wp('3%'),
              paddingLeft: wp('35%'),
              borderRadius: wp('8%'),
              color:'white'
            }}>
            redeem now
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;
