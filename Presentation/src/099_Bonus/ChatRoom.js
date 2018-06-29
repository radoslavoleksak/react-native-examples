import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, TextInput } from 'react-native';

export default class ChatRoom extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            inputText: null
        };

        this.handleTextInputSubmitEditing = this.handleTextInputSubmitEditing.bind(this);
    }
    
    componentDidMount() {
        this.ws = new WebSocket('ws://192.168.1.21:1337');

        this.ws.onopen = () => {
            // connection opened
            // this.ws.send('someone connected'); // send a message
        };

        this.ws.onmessage = (e) => {
            try {
                var json = JSON.parse(e.data);
            } catch (e) {
                console.log('Invalid JSON: ', e.data);
                return;
            }

            if (json.type === 'history') { 
                //console.log("history", json.data)
                // entire message history
                this.setState({
                    messages: json.data
                })
            } else if (json.type === 'message') { 
                // console.log("json.data", json.data)
                this.setState(prevState => ({
                    messages: [ json.data, ...prevState.messages ]
                }))
            } else {
                console.log('Hmm..., I\'ve never seen JSON like this:', json);
            }
        };

        this.ws.onerror = (e) => {
            // an error occurred
            console.log(e.message);
        };

        this.ws.onclose = (e) => {
            // connection closed
            console.log(e.code, e.reason);
        };
    }

    handleTextInputSubmitEditing(event) {
        this.ws.send(event.nativeEvent.text)

        this.setState((prevState, props) => {
            return { inputText: null };
        });
    }

    componentWillUnmount() {
        this.ws.close()
    }

    render() {
        const sections = [{
            id: 0,
            data: this.state.messages,
        }]

        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Tu napíšte svoju správu!"
                    onChangeText={(inputText) => this.setState({inputText})}
                    value={this.state.inputText}
                    onSubmitEditing={this.handleTextInputSubmitEditing}
                />
                <SectionList
                    keyExtractor={(item, index) => index}
                    sections={sections}
                    renderItem={({item}) => <Text style={styles.item}>{item.text}</Text>}
                    renderSectionHeader={() => null}
                />
              
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})