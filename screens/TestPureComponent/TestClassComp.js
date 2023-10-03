import React from 'react';
import {Text, View, TextInput} from 'react-native';
import _ from 'lodash';

class TestClassComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      testvalue: '',
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    //     //return true, when current state is not equal to previous state
    //     //OR
    //     //return true, when current prop is not equal to previous props
    // return (
    //   !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state)
    // );

    // return true;
    return nextProps.errorMessage !== this.props.errorMessage;
  }

  render() {
    console.log('render of test class component');

    return (
      <View>
        <Text>test class comp</Text>
        <TextInput
          value={this.state.testvalue}
          onChangeText={changedText => {
            this.setState({testvalue: changedText});
          }}
          placeholder="class textinput"
          style={{backgroundColor: 'pink', height: 40, padding: 5, margin: 10}}
        />
      </View>
    );
  }
}

export default TestClassComp;
