import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-646e7.cloudfunctions.net'

export default class SignInForm extends React.Component {
    state = { 
        phone: '', 
        code: '' 
    }

    handleSignIn = async () => {
        try {
            await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone: this.state.phone, code: this.state.code });
        } catch (err) {
            // this.setState({ error: 'Something went wrong again little bit later' });
            console.log(err);
        }

    }

    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }} >
                    <Input 
                        label="Enter you phone number here" 
                        onChangeText={ phone => this.setState({ phone })}
                    >
                        {this.state.phone}
                    </Input>
                </View>

                <View style={{ marginBottom: 10 }} >
                    <Input 
                        label="Enter your code here" 
                        onChangeText={ code => this.setState({ code })}
                    >
                        {this.state.code}
                    </Input>
                </View>
                
                <Button 
                    title="Sign In" 
                    onPress={this.handleSignIn}
                />
            </View>
        );
    }
}