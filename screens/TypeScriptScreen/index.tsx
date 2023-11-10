import {View, Text} from 'react-native';
import React from 'react';

export default function TypeScriptScreen() {
  let myname: string;
  let myphone: number;
  let isDriving: boolean;
  let mycourses: string[];
  let dailyTemperatures: number[];
  let arryofbool: boolean[];

  myname = 'firdous';
  myphone = 32424242;
  isDriving = true;
  mycourses = ['math', 'english'];
  dailyTemperatures = [33, 34, 35, 46.3];
  arryofbool = [true, false, true];

  let person: {name: string; age: number; courses: string[]; phone: string};

  person = {
    name: 'firdous ali',
    age: 36,
    courses: ['physics', 'astronomy'],
    phone: '23234234',
  };

  let people: {
    name: string;
    age: number;
    courses: string[];
    phone?: string | number; //union
  }[];

  people = [
    {
      name: 'sdfsdfsdf',
      age: 23,
      courses: ['sdf', 'dfdf', 'gfg'],
      phone: '5645454',
    },
    {name: 'sdfsdfsdf', age: 23, courses: ['sdf', 'dfdf', 'gfg']},
    {
      name: 'sdfsdfsdf',
      age: 23,
      courses: ['sdf', 'dfdf', 'gfg'],
      phone: 456454,
    },
  ];

  return (
    <View>
      <Text>index</Text>
    </View>
  );
}
