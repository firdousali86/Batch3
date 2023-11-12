import React from 'react';
import {Text, View} from 'react-native';

class LocalClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textState: props.writtenText,
    };
  }

  componentDidUpdate(prevProps) {
    console.log('previous props');

    console.log(prevProps);

    console.log('current props');

    console.log(this.props);

    if (prevProps.writtenText !== this.props.writtenText) {
      this.setState({textState: this.props.writtenText});
    }
  }

  render() {
    return (
      <View>
        <Text>local class comp</Text>
        <Text>{this.state.textState}</Text>
      </View>
    );
  }
}

export default LocalClassComponent;
