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

  type Transport = 'Bus' | 'Car' | 'Bike' | 'Walk';

  type Car = 'ICE' | 'EV';
  type ChargeEV = (kws: number) => void;
  type FillPetrol = (type: string, liters: number) => void;
  type RefillHandler<A extends Car> = A extends 'ICE'
    ? FillPetrol
    : A extends 'EV'
    ? ChargeEV
    : never;

  const chargeTesla: RefillHandler<'EV'> = power => {
    // Implementation for charging electric cars (EV)
  };
  const refillToyota: RefillHandler<'ICE'> = (fuelType, amount) => {
    // Implementation for refilling internal combustion engine cars (ICE)
  };

  // const transport: Transport = 'Plane';

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
    {
      name: 'dfdf dgd ffg',
      xyz: 'f gdfg d',
      fullName: 'DSSDF',
      email: 'sdsdf',
    },
  ];

  const concatenate = (x: string, y: string): string => {
    return x + y;
  };

  const add = (x: number, y: number): number => {
    return x + y;
  };

  return (
    <View>
      <Text>index</Text>
      <Text>{concatenate('5', '6')}</Text>
      <Text>{add(5, 6)}</Text>
      <Text>{concatenate('5', '6')}</Text>
      <Text>{add(5, 6)}</Text>
    </View>
  );
}
