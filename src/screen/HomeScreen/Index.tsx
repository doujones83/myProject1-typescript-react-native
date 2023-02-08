import React, { FC, useState, useEffect } from 'react'
import HomeView from './HomeView'
import mockData from '../../MockData'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { Project1 } from '../../interfaces'
import { StackParamsList } from '../../navigation'
import { project1Actions } from '../../redux/slices/myProject1'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'


type NavigationProps = NavigationProp<StackParamsList>;

const HomeScreen: FC = () => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation<NavigationProps>();
  const project1s = useSelector<RootState, Project1[]>( state => state.project1.data);

  useEffect( () => {
    dispatch(project1Actions.getProject1(mockData));
  }, [])

  const onPressViewProfile = (project1: Project1) => {
    return navigate( 'Details', {project1});
  }
  return (
    <HomeView
      data={project1s}
      onPressViewProfile={onPressViewProfile}
      />
  );
  };
export default HomeScreen
