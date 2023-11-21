import {View, Text, Button} from 'react-native';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {InputControl, GenderSelector} from '../../components';
import * as yup from 'yup';
import {LogHelper} from '../../helpers';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('First Name is required')
    .matches(/^[a-zA-Z\s]+$/, 'First name must contain only letters'),
  lastName: yup
    .string()
    .required('Last Name is required')
    .matches(/^[a-zA-Z\s]+$/, 'Last name must contain only letters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email')
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email'),
});

export default function UserProfileEdit() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  return (
    <View>
      <InputControl
        control={control}
        name={'firstName'}
        placeholder={'Enter First name'}
        error={errors?.firstName}
      />
      <InputControl
        control={control}
        name={'lastName'}
        placeholder={'Enter last name'}
        error={errors?.lastName}
      />
      <InputControl
        control={control}
        name={'email'}
        placeholder={'Enter email'}
        error={errors?.email}
      />
      <Controller
        name={'gender'}
        control={control}
        rules={{required: true, validate: true}}
        render={({field: {onChange, value}}) => {
          return <GenderSelector value={value} onGenderSelected={onChange} />;
        }}
      />

      <Button
        title={'Submit'}
        onPress={handleSubmit(formData => {
          console.log(formData);

          LogHelper.localServerLogging(
            'form submit',
            'form submit is clicked',
            formData,
          );
        })}
      />
    </View>
  );
}
