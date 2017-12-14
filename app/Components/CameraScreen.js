import React, { Component } from 'react';
import Camera from 'react-native-camera';
import {
    Text,
    View,
  } from 'react-native';


export default class CameraScreen extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        Camera: {
          captureTarget: Camera.constants.CaptureTarget.cameraRoll,
        }
      }
    }
  
    render() {
      return (
        <View style={styles.camera_container}>
          <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
            <Text
            style={styles.capture} 
            onPress={this.takePicture.bind(this)}>
              CAPTURE
            </Text>
          </Camera>
        </View>
      );
    }
    
    takePicture() {
      const options = {};
      //options.location = ...
      this.camera.capture({metadata: options})
        .then((data) => console.log(data))
        .catch(err => console.error(err));
    };
  }