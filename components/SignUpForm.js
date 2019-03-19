import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, Input, Button } from 'react-native-elements';

class SignUpForm extends Component {
    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }} >
                    <Input label="Enter your phone number" />
                </View>
                <Button title="Submit" />
            </View>
        );
    }
}

export default SignUpForm;
