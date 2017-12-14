/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Dimensions,
  Text,
  View,
  FlatList,
  Image,
  CameraRoll,
  TouchableOpacity,
} from 'react-native';
import {
  Button,
  Icon
} from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import styles from './styles';
import CameraScreen from './Components/CameraScreen';
import LoginScreen from './Components/LoginScreen';
import LoginDetailsScreen from './Components/LoginDetailsScreen';
import RegisterDetailsScreen from './Components/RegisterDetailsScreen';

const { width } = Dimensions.get('window')

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  state = {
    photos: [],
  }

  constructor(props) {
    super(props);
  }

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All'
    })
    .then(r => this.setState({ photos: r.edges }))
  }

  render() {
    this.getPhotos();
    return (
      <View style={styles.container}>
        <FlatList
        style={styles.camera_picker_container}
        data={
          this.state.photos
        }
        keyExtractor={item => item.node.image.uri}
        renderItem={ ({item}) => {
          return(
            <Image
            style={{
              width: width/3,
              height: width/3,
              flexDirection: 'column'
            }}
            source={{uri: item.node.image.uri}} />
          );
          }
        } />

        <TouchableOpacity
        onPress={ () => {this.props.navigation.navigate('Camera')}}>
          <Text
          style = {styles.button_to_camera}>
            TAKE PHOTO
          </Text>
        </TouchableOpacity>

        <Button
        onPress={ () => {this.props.navigation.navigate('Camera')}}        
        icon={{name: 'camera-alt'}}        
        title="SURE"/>

        <Icon
        raised
        name='heartbeat'
        type='font-awesome'
        color='#f50'
        onPress={() => console.log('hello')} />
      </View>
    );
  }
}

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    }
  },
  LoginDetails: {
    screen: LoginDetailsScreen,
    navigationOptions: {
      header: null,
    }
  },
  RegisterDetails: {
    screen: RegisterDetailsScreen,
    navigationOptions: {
      header: null,
    }
  },
  Home: {
    screen: App,
    navigationOptions: {
      headerTitle: 'Main'
    }
  },
  Camera: {
    screen: CameraScreen,
    navigationOptions: {
      header: null,
    }
  }
});

export default RootNavigator;
