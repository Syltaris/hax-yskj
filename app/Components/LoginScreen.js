import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import {
    Button,
    Icon
} from 'react-native-elements';
import {
    NavigationActions
} from 'react-navigation';
import styles from '../styles';

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Home' })],
});

export default class LoginScreen extends Component {
    render() {
        return(
            <View style={styles.container_end}>
                <View style={styles.logo_container}>
                    <Image
                    style={styles.logo_style}
                    source={require('../res/img/logo.png')} />
                    <Text
                    style={styles.tagline}>
                        怕怕停车
                    </Text>
                </View>
                <View style={styles.button_container}>
                    <Button
                    large
                    color="#000000"
                    buttonStyle= {styles.register_button_style}
                    onPress={ () => {this.props.navigation.navigate('RegisterDetails')}}                          
                    title='注册' />
                </View>
                <View style={styles.button_container}>
                    <Button
                    large
                    buttonStyle= {styles.login_button_style}  
                    onPress={ () => {this.props.navigation.navigate('LoginDetails')}}      
                    title='登录' />
           
                    <Button
                    large
                    icon={{name: 'wechat', type: 'font-awesome'}}
                    iconLeft
                    buttonStyle= {styles.login_button_wechat_style}
                    onPress={ () => {this.props.navigation.dispatch(resetAction)}}                          
                    title='微信登录' />
                </View>
            </View>
        );
    }
}