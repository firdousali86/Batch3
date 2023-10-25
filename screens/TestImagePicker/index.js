import {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const TestImagePicker = () => {
  const [imageArray, setImageArray] = useState([]);

  return (
    <View>
      <ScrollView
        horizontal
        style={{
          height: 100,
          width: Dimensions.get('window').width,
          borderWidth: 0.5,
          borderColor: 'gray',
        }}>
        {imageArray.map(thisElement => {
          return (
            <Image
              style={{height: 100, width: 100}}
              source={{uri: thisElement.path}}
            />
          );
        })}
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
            if (image) {
              setImageArray([...imageArray, image]);
            }
          });
        }}>
        <Text>pick from gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
            if (image) {
              setImageArray([...imageArray, image]);
            }
          });
        }}>
        <Text>pick from camera</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestImagePicker;
