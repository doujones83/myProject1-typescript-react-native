import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen/Index';
import DetailsScreen from '../screen/DetailsScreen/Index';
import { Project1 } from '../interfaces';

export type StackParamsList = {
  Home: undefined
  Details: {project1: Project1}
}

const Stack = createNativeStackNavigator<StackParamsList>();

function MainStack(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
        <Stack.Screen name="Home" component={ HomeScreen } options={{ title: 'MyProject1'}} />
        <Stack.Screen name="Details" component={ DetailsScreen } options={{ title: 'MyProject1 Details'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { MainStack };