import React, { FC } from 'react'
import HomeView from './HomeView'
import mockData from '../../MockData'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { Project1 } from '../../interfaces'
import { StackParamsList } from '../../navigation'

type NavigationProps = NavigationProp<StackParamsList>;

const HomeScreen: FC = () => {
  const { navigate } = useNavigation<NavigationProps>();

  const onPressViewProfile = (project1: Project1) => {
    return navigate( 'Details', {project1});
  }
  return (
    <HomeView
      data={mockData}
      onPressViewProfile={onPressViewProfile}
      />
  );
  };
export default HomeScreen
