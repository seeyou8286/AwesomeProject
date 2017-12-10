import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {textcontent: '',};

    }

    fetchDate = (enaleCallback) => {
        fetch('https://baidu.com/')
            .then((response) => response.text())
            .then((responseJson) => {
                this.setState(
                    {textcontent: responseJson}
                )
            })
    };
    render() {
        return (
            <View>
                <Text>{this.state.textcontent}</Text>
                <Button title='默认Button'  onPress={this.fetchDate} text="Submit"/>
            </View>
        );
    }

}