import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-646e7.cloudfunctions.net'

export default class SignInForm extends React.Component {
    state = { 
        phone: '', 
        code: '' 
    }

    handleSignIn = async () => {
        const { phone, code } = this.state;

        try {
            let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone, code });
            firebase.auth().signInWithCustomToken(data.token);
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