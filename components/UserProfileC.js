import React from 'react';
import {View, Text, TextInput} from 'react-native';

class UserProfileC extends React.Component {
  render() {
    const {viewBGColor, textColor} = this.props;

    return (
      <View>
        <Text style={{color: textColor, backgroundColor: viewBGColor}}>
          Hello world!
        </Text>
        <Text style={{color: textColor, backgroundColor: viewBGColor}}>
          this is a class component
        </Text>
        <TextInput
          defaultValue="Enter text"
          onChangeText={changedText => {
            console.log(changedText);
          }}
        />
      </View>
    );
  }
}

export default UserProfileC;
