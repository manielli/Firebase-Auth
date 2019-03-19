import React, { Component } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-646e7.cloudfunctions.net';

class SignUpForm extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         phone: ''
    //     };
    // }
    // This is ES7 (ES 2017) shorthand for the above
    // They are identical

    state = { phone: '' };

    // ES7 or ES 2017 for using it without .bind(this)
    // as opposed to handleSubmit() { }
    // handleSubmit = () => {
    //     axios.post(`${ROOT_URL}/createUser`, {
    //         phone: this.state.phone
    //     })
    //     .then(() => {
    //         axios.post(`${ROOT_URL}/requestOneTimePassword`, {
    //             phone: this.state.phone
    //         });
    //     });
    // }
    
    // ES7 Async Await Syntactic shorthand
    handleSubmit = async () => {
        // try { } catch (err) {} is not something new, it is very old
        try {
            await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
            await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }} >
                    <Input 
                        label="Enter your phone number"
                        onChangeText={phone => this.setState({ phone })}    
                    >
                        {this.state.phone}
                    </Input>
                </View>
                <Button 
                    onPress={this.handleSubmit}
                    title="Submit" 
                />
            </View>
        );
    }
}

export default SignUpForm;
