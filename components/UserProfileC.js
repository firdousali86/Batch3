import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

class UserProfileC extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleButton: false,
      textInputValue: '',
    };
  }

  render() {
    const {viewBGColor, textColor} = this.props;
    const {toggleButton, textInputValue} = this.state;

    return (
      <View>
        <Text style={{color: textColor, backgroundColor: viewBGColor}}>
          Hello world!
        </Text>
        <Text style={{color: textColor, backgroundColor: viewBGColor}}>
          this is a class component
        </Text>
        <TextInput
          value={textInputValue}
          defaultValue="Enter text"
          onChangeText={changedText => {
            this.setState({textInputValue: changedText});
          }}
        />

        <Text>
          Button toggle state is: {toggleButton == true ? 'Yes' : 'No'}
        </Text>

        <Button
          onPress={() => {
            this.setState({toggleButton: !toggleButton});
          }}
          title="Tap Button"
          color="#841584"
        />
      </View>
    );
  }
}

export default UserProfileC;
