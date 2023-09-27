import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

class UserProfileC extends React.Component {
  constructor(props) {
    super(props);

    const {viewBGColor, textColor} = props;

    this.state = {
      toggleButton: false,
      textInputValue: '',
      viewBGColorState: viewBGColor,
      viewTextColorState: textColor,
    };
  }

  render() {
    const {toggleButton, textInputValue, viewBGColorState, viewTextColorState} =
      this.state;

    return (
      <View>
        <Text
          style={{
            color: viewTextColorState,
            backgroundColor: viewBGColorState,
          }}>
          Hello world!
        </Text>
        <Text
          style={{
            color: viewTextColorState,
            backgroundColor: viewBGColorState,
          }}>
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

        <Button
          onPress={() => {
            this.setState({viewBGColorState: 'red'});
          }}
          title="SET TO RED"
          color="#841584"
        />
        <Button
          onPress={() => {
            this.setState({viewBGColorState: 'blue'});
          }}
          title="SET TO BLUE"
          color="#841584"
        />
        <Button
          onPress={() => {
            this.setState({viewBGColorState: 'orange'});
          }}
          title="SET TO ORANGE"
          color="#841584"
        />
        <Button
          onPress={() => {
            this.setState({viewBGColorState: 'black'});
          }}
          title="SET TO BLACK"
          color="#841584"
        />
        <Button
          onPress={() => {
            this.setState({viewBGColorState: 'yellow'});
          }}
          title="SET TO YELLOW"
          color="#841584"
        />
      </View>
    );
  }
}

export default UserProfileC;
