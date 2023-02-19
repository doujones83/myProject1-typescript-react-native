import React, {useState, useEffect } from 'react';
import {Alert} from 'react-native';
import LoginView from './LoginView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { authActions } from '../../redux/AuthSlice';
import Geolocation from '@react-native-community/geolocation';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');

  useEffect(() => {
    Geolocation.requestAuthorization();
  }, []);

  const onPressLogin = async () => {
    try {
      await AsyncStorage.setItem(
        'token',
        '1234',
      );
      dispatch(authActions.authenticateUser(true));
    } catch (error) {
      Alert.alert(
        'Login failed',
        `${error}`,
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      );
    }
  };

  return (
    <LoginView
      onChangeUsername={onChangeUsername}
      onChangePassword={onChangePassword}
      onPressLogin={onPressLogin}
    />
  );
};

export default LoginScreen;