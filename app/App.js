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
  TextInput
} from 'react-native';
import {
  Button,
  Icon,
  Card,
} from 'react-native-elements';
import MapView from 'react-native-maps';
import {
  Toast,
  Modal
} from 'antd-mobile';
import { StackNavigator } from 'react-navigation';

import styles from './styles';
import CameraScreen from './Components/CameraScreen';
import LoginScreen from './Components/LoginScreen';
import LoginDetailsScreen from './Components/LoginDetailsScreen';
import RegisterDetailsScreen from './Components/RegisterDetailsScreen';

const { width } = Dimensions.get('window')

START_POINT = {
  latitude: 31.1944118,
  longitude: 121.441287,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,
}

MIDDLE_POINT = {
  latitude: 31.1932927,
  longitude: 121.4395875,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,
}

END_POINT = {
  latitude: 31.19142,
  longitude: 121.445826,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,
}

state = []

RouteToShow = () => {
  if(this.state.showRoute == true && this.state.showDanger == false) {
      return (
        <View>
        <MapView.Circle
        center={START_POINT}
        radius={15}
        zIndex={100}
        strokeWidth={2}
        fillColor="#00EE33"/>
        <MapView.Polyline
        coordinates={this.state.coordinatesSelected}
      strokeWidth={10}
      strokeColor="#5588FF"/>
      <MapView.Circle
      center={END_POINT}
      radius={15}
      zIndex={100}
      strokeWidth={2}
      fillColor="#0033AA"/>
      </View>
    );
  } else if (this.state.showRoute == true && this.state.showDanger == true) {
    return <View><Text>Danger</Text></View>
  } else {
    return <View></View>
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      calloutHidden: true,
      showSearchBarRecco: false,
      showBottomBarRecco: false,
      coordinatesSelected: [],
      routeCoordinates: [[
        START_POINT,
        MIDDLE_POINT,
        {
          latitude: 31.193918,
          longitude: 121.4410087,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        },{
          latitude: 31.191418,
          longitude: 121.4422087,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        },{
          latitude: 31.192718,
          longitude: 121.445287,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        },
        END_POINT],[
          START_POINT,
          MIDDLE_POINT,
          {
            latitude: 31.193918,
            longitude: 121.4410087,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          },{
            latitude: 31.191418,
            longitude: 121.4422087,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          },{
            latitude: 31.192718,
            longitude: 121.445287,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          },
          END_POINT] ],
      showRoute: false,
      showDanger: false,
      showCards: false,
      showNextCard: false,
    };
  }



  toggleSearchBar= () => {
    this.setState((prevState) => ({
      showSearchBarRecco: !prevState.showSearchBarRecco
    }));
  }
  toggleWorkRoute= () => {
    this.setState((prevState) => {
      return {
      showRoute: true,
      showBottomBarRecco: true,
      coordinatesSelected: prevState.routeCoordinates[0]
    }
    });
  }

  toggleCards= () => {
    this.setState((prevState) => {
      return {
        showCards: !prevState.showCards,
        showBottomBarRecco: false,
      }
    })
  }

  toggleNextCard= () => {
    this.setState(() => {
      return {
        showCards: false,
        showNextCard: true,
      }
    })
  }

  closeCards= ()=> {
    this.setState(() => {
      return {
        showCards: false,
        showNextCard: false,
      }
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <MapView
        style={styles.map}
        region={START_POINT}>
          <View>
            <MapView.Circle
            center={START_POINT}
            radius={15}
            zIndex={100}
            strokeWidth={2}
            fillColor="#00EE33"/>
            <MapView.Polyline
            coordinates={this.state.coordinatesSelected}
            strokeWidth={10}
            strokeColor="#5588FF"/>
            <MapView.Circle
            center={END_POINT}
            radius={15}
            zIndex={100}
            strokeWidth={2}
            fillColor="#0033AA"/>
          </View>
        </MapView>
        <View >
          <View style={styles.search_container}>
            <View>
              <Icon
              raised
              name="person"
              type="material-icons"
              size={20}/>
            </View>
            <View style={styles.camera_container}>
              <TextInput 
              onFocus={this.toggleSearchBar.bind(this)}
              style={styles.search_input}/>
            </View>
            <Icon
            raised
            name="microphone"
            type="font-awesome"
            size={18}/>
          </View>
            <View style={styles.bottom_search_container}>
              <TouchableOpacity
              style={styles.bottom_search_button}
              onPress={this.toggleWorkRoute.bind(this)}>
                <Icon
                raised
                name="briefcase"
                type="feather"
                size={18}/>
                <Text
                style={styles.bottom_search_text}>公司</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.bottom_search_button}>
                <Icon
                raised
                name="home"
                type="feather"
                size={18}/>
                <Text
                style={styles.bottom_search_text}>回家</Text>
              </TouchableOpacity>
            </View>
            <Modal
            popup
            animationType="slide-up"
            maskClosable={true}
            visible={this.state.showBottomBarRecco}>
              <View style={styles.container_row_end}>
                <View style={styles.bottom_container_button}>
                  <Icon
                  raised
                  name="home"
                  type="feather"
                  size={25}/>
                </View>
                  <View style={styles.bottom_container_button}>
                  <TouchableOpacity
                  style={styles.bottom_container_button}
                  onPress={this.toggleCards.bind(this)}>
                    <Icon
                    raised
                    name="home"
                    type="feather"
                    size={25}/>
                  </TouchableOpacity>  
                  </View>
                <View style={styles.bottom_container_button}>
                  <Icon
                  raised
                  name="home"
                  type="feather"
                  size={25}/>
                </View>
              </View>
            </Modal>
            <Modal
            animationType="slide-up"
            maskClosable={true}
            closable={true}
            transparent={true}
            visible={this.state.showCards}>
              <Card
              style={styles.card}
              containerStyle={styles.card_container}>
                <Image
                style={styles.card_image}
                resizeMode="cover"
                source={require('./res/img/card1.jpg')}
                />
                <View style={styles.bottom_search_container}>
                  <View style={styles.card_container_button}>
                    <TouchableOpacity 
                    onPress={this.toggleNextCard.bind(this)}>
                      <Icon
                      raised
                      name="circle-with-cross"
                      type="entypo"
                      size={25}/>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.card_container_button}>
                    <TouchableOpacity
                    onPress={this.toggleCards.bind(this)}>
                      <Icon
                      raised
                      name="check-circle"
                      type="material-community-icons"
                      size={25}/>
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
            </Modal>
            <Modal
            animationType="slide-up"
            maskClosable={true}
            closable={true}
            transparent={true}
            visible={this.state.showNextCard}>
              <Card
              style={styles.card}
              containerStyle={styles.card_container}>
                <Image
                style={styles.card_image}
                resizeMode="cover"
                source={require('./res/img/card1.jpg')}
                />
                <View style={styles.bottom_search_container}>
                  <View style={styles.card_container_button}>
                    <TouchableOpacity>
                      <Icon
                      raised
                      name="circle-with-cross"
                      type="entypo"
                      size={25}/>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.card_container_button}>
                    <TouchableOpacity
                    onPress={this.closeCards.bind(this)}>
                      <Icon
                      raised
                      name="check-circle"
                      type="material-community-icons"
                      size={25}/>
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
            </Modal>
        </View>
      </View>
    );
  }

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All'
    })
    .then(r => this.setState({ photos: r.edges }))
  }

  renderNow() {
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
      header: null,
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
