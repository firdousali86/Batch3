import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../features/counter/counterSlice';
import {addCar} from '../../features/cars/carSlice';

const TestReduxScreen = () => {
  const [inputval, setinputval] = useState('');
  const [currentCar, setCurrentCar] = useState('');
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  const cars = useSelector(state => state.car);

  return (
    <View>
      <Text>test redux</Text>

      <Text testID="text_counter">0</Text>

      <TouchableOpacity
        testID="button_increment"
        onPress={() => {
          dispatch(increment());
        }}>
        <Text>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID="button_decrement"
        onPress={() => {
          dispatch(decrement());
        }}>
        <Text>Decrement</Text>
      </TouchableOpacity>

      <TextInput
        testID="input_amount"
        value={inputval}
        onChangeText={changedText => {
          setinputval(changedText);
        }}
        keyboardType="numeric"
        style={{height: 40, backgroundColor: 'yellow', padding: 5, margin: 10}}
      />

      <TouchableOpacity
        testID="button_incrementByAmount"
        onPress={() => {
          dispatch(incrementByAmount(parseInt(inputval)));
        }}>
        <Text>Increment by value</Text>
      </TouchableOpacity>

      <FlatList
        data={cars}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text>{item}</Text>
            </View>
          );
        }}
      />

      <TextInput
        value={currentCar}
        onChangeText={changedText => {
          setCurrentCar(changedText);
        }}
        style={{backgroundColor: 'pink', height: 40, padding: 5, margin: 10}}
      />

      <TouchableOpacity
        onPress={() => {
          dispatch(addCar(currentCar));
        }}>
        <Text>Add Car</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestReduxScreen;

// import {Formik} from 'formik';

// describe('search', () => {
//   it('should render the component fields', () => {
//     const {getByTestId} = render(
//       <Formik>
//         <CreateAxeForm
//           setOpen={() => {
//             true;
//           }}
//           isMutationInFlight={false}
//           formRef={formRef} // Pass the ref
//           validateForm={() => Promise.resolve({})}
//         />
//       </Formik>,
//     );

//     const mylabeldiv = getByTestId('legheader');

//     expect(mylabeldiv.textContent).toBe('Leg 1');
//   });
// });

// describe('table test', () => {
//   it('should render the component fields', () => {
//     const {getByText} = render(
//       <Formik>
//         <Table rows={[]} header="Leg 1" hasButton={true} />
//       </Formik>,
//     );

//     const mylabeldiv = getByText('Leg 1');

//     expect(mylabeldiv.textContent).toBe('Leg 1');
//   });
// });
