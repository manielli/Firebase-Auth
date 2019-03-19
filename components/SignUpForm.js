import React, { Component } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';

class SignUpForm extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         phone: ''
    //     };
    // }

    state = { phone: '' };

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
