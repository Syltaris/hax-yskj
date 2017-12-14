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

export default class RegisterDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.validateInputsAndRegister = this.validateInputsAndRegister.bind(this);
    }

    validateInputsAndRegister() {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <FormLabel>用户电邮</FormLabel>
                    <FormInput onChangeText={null} />
                </View>
                <View style={styles.container}>
                    <FormLabel>密码</FormLabel>
                    <FormInput onChangeText={null} />
                </View>
                <View style={styles.container}>
                    <FormLabel>确认密码</FormLabel>
                    <FormInput onChangeText={null} />
                </View>
                <View style={styles.container}>
                    <FormLabel>电话号</FormLabel>
                    <FormInput onChangeText={null} />
                </View>
                <View style={styles.button_container}>
                    <Button
                    large
                    buttonStyle= {styles.login_button_style}  
                    onPress={ () => {this.validateInputsAndRegister()}}      
                    title='确认' />
                </View>
            </View>
        );
    }
}