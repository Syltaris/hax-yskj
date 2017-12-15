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
import {
    NavigationActions
} from 'react-navigation';
import styles from '../styles';

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Home' })],
});

export default class LoginDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.validateInputsAndLogin = this.validateInputsAndLogin.bind(this);
    }

    validateInputsAndLogin() {
        this.props.navigation.dispatch(resetAction);        
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <FormLabel style={styles.label_text}>用户电邮</FormLabel>
                    <FormInput onChangeText={null} />

                    <FormLabel style={styles.label_text}>密码</FormLabel>
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