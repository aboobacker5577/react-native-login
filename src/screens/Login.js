import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

export default class Login extends Component {
    userLogin() {
        if (!this.state.username || !this.state.password) return;
        // TODO: localhost doesn't work because the app is running inside an emulator. Get the IP address with ifconfig.
        fetch('http://192.168.1.72:2000/user/moblogin', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.error){
                    alert(response.error)
                    proceed=false;
                }
                else{
                    alert(response.message);
                    proceed=true;
                }
            })
            .then(() => {
                this.setState({isLoggingIn: false})
                if (proceed) {
                    this.props.onLoginPress();
                }
            })
            .done();
    }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text
                    style={{fontSize: 27}}>
                    Login
                </Text>
                <TextInput
                    editable={true}
                    onChangeText={(username) => this.setState({username})}
                    placeholder='Username'
                    ref='username'
                    returnKeyType='next'
                    value={this.username}
                />
                <TextInput
                    editable={true}
                    onChangeText={(password) => this.setState({password})}
                    placeholder='Password'
                    ref='password'
                    returnKeyType='next'
                    secureTextEntry={true}
                    value={this.password}
                />
                <View style={{margin:7}} />
                <Button
                    onPress={this.userLogin.bind(this)}
                    title="Submit"
                />
            </ScrollView>
        )
    }
}