import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    Button,
    FormLabel, 
    FormInput 
} from 'react-native-elements';
import styles from '../styles';

export default class LoginDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.validateInputsAndLogin = this.validateInputsAndLogin.bind(this);
    }

    validateInputsAndLogin() {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <FormLabel>用户电邮</FormLabel>
                    <FormInput onChangeText={null} />

                    <FormLabel>密码</FormLabel>
                    <FormInput onChangeText={null} />
                </View>
                <View style={styles.button_container}>
                    <Button
                    large
                    buttonStyle= {styles.login_button_style}  
                    onPress={ () => {this.validateInputsAndLogin()}}      
                    title='登录' />
                </View>
            </View>
        );
    }
}