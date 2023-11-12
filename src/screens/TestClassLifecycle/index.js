import React from 'react';
import {Text, View, TextInput} from 'react-native';
import LocalClassComponent from './localClassComponent';

class TestClassLifecycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textInputValue: '',
    };
  }

  componentWillUnmount() {
    console.log('component is getting unmounted');
  }

  render() {
    return (
      <View>
        <Text>test</Text>
        <TextInput
          value={this.state.textInputValue}
          onChangeText={changedText => {
            this.setState({textInputValue: changedText});
          }}
          style={{backgroundColor: 'pink', height: 40}}
        />

        <LocalClassComponent writtenText={this.state.textInputValue} />
        <Text>some text</Text>
        <LocalClassComponent writtenText={this.state.textInputValue} />
        <Text>some text</Text>
        <LocalClassComponent writtenText={this.state.textInputValue} />
        <Text>some text</Text>
      </View>
    );
  }
}

export default TestClassLifecycle;
