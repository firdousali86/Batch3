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

  type Person = {
    name: string;
    age: number;
    courses: string[];
    phone?: string | number;
  };

  type Person2 = {
    fullName: string;
    email: string;
    phoneNo?: string | number;
    xyz?: any;
  };

  type CommonPerson = Person | Person2; //union

  // let person: {name: string; age: number; courses: string[]; phone: string};
  let person: CommonPerson;

  person = {
    name: 'firdous ali',
    age: 36,
    courses: ['physics', 'astronomy'],
    phone: '23234234',
  };

  // let people: {
  //   name: string;
  //   age: number;
  //   courses: string[];
  //   phone?: string | number; //union
  // }[];
  let people: CommonPerson[];

  people = [
    {
      name: 'sdfsdfsdf',
      age: 23,
      courses: ['sdf', 'dfdf', 'gfg'],
      phone: '5645454',
      xyz: 'sdfgsdf',
    },
    {name: 'sdfsdfsdf', age: 23, courses: ['sdf', 'dfdf', 'gfg'], xyz: 345345},
    {
      name: 'sdfsdfsdf',
      age: 23,
      courses: ['sdf', 'dfdf', 'gfg'],
      phone: undefined,
      xyz: true,
    },
    {
      fullName: 'ssdsdf df',
      email: 'ddfgdf@dfdf.df',
      phoneNo: '34534534',
      xyz: [],
    },
    {fullName: ' fghfg fh ', email: 'dfgdf@gffg.gg', name: 'hgfh rt r'},
    {name: 'sdfds sdfsd', age: 55},
    {fullName: ' sdf sdfds '},
    {
      name: 'dfdf dgd ffg',
      xyz: 'f gdfg d',
      fullName: 'DSSDF',
      email: 'sdsdf',
      abc: 4554,
    },
  ];

  return (
    <View>
      <Text>index</Text>
    </View>
  );
}
