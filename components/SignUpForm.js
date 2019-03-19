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
    // This is ES7 (ES 2017) shorthand for the above
    // They are identical

    state = { phone: '' };

    // ES7 or ES 2017 for using it without .bind(this)
    // as opposed to handleSubmit() { }
    handleSubmit = () => {
        
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
