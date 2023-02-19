import React, {FC, useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import DetailsView from './DetailsView';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Project1 } from '../../interfaces';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import {  project1Actions } from '../../redux/slices/myProject1';


type ParamList = {
  params: {
    project1: Project1
  }
}

const DetailsScreen: FC = () => {
  const dispatch = useDispatch();
  const {params: { project1 }} = useRoute<RouteProp<ParamList>>();

  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteProject1 = useSelector<RootState, Project1 | undefined>(state => {
    return state.project1.favoriteProject1 ? state.project1.favoriteProject1 : undefined;
  });

  useEffect(() => {
    if (favoriteProject1?.id === project1.id) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteProject1]);

  const onPressSelectFavoriteProject1 = () => {
    if (favoriteProject1?.id === project1?.id) {
      dispatch( project1Actions.selectFavoriteProject1(undefined));
    } else {
      dispatch( project1Actions.selectFavoriteProject1(project1));
    }
  };

  return (
    <DetailsView
      onPressSelectFavoriteProject1={onPressSelectFavoriteProject1}
      isFavorite={isFavorite}
      data={project1}
    />
  );
};

export default DetailsScreen;