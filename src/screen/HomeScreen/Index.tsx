import React, { FC, useState, useEffect } from 'react'
import HomeView from './HomeView'
import mockData from '../../MockData'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { Project1 } from '../../interfaces'
import { StackParamsList } from '../../navigation'
import { project1Actions } from '../../redux/slices/myProject1'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Geolocation from '@react-native-community/geolocation';


type NavigationProps = NavigationProp<StackParamsList>;

const HomeScreen: FC = () => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation<NavigationProps>();
  const project1s = useSelector<RootState, Project1[]>( state => state.project1.data);
  const favoriteProject1 = useSelector<RootState, Project1 | undefined>(state => {
    return state.project1.favoriteProject1 ? state.project1.favoriteProject1 : undefined;
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [userLocation, setUserLocation] = useState<UserLocation | undefined>(undefined);



  useEffect( () => {
    dispatch(project1Actions.getProject1(mockData));
    Geolocation.getCurrentPosition(info => console.log(info));
  }, [])

  const onPressViewProfile = (project1: project1) => {
    return navigate('Details', {project1});
  };

  const onPressShowAll = () => {
    dispatch(project1Actions.getProject1(mockData));
    setModalVisible(!modalVisible);
  };

  const onPressFilterByLocation = () => {
    const longitude: number  = userLocation?.coords.longitude;
    const latitude: number  = userLocation?.coords.latitude;
    const nearLocations: project1[] = [];

    project1s.map(async project1 => {
      let location = JSON.parse(project1.location);

      const pointIn = {
        latitude: parseFloat(location[0]),
        longitude: parseFloat(location[1]),
      };

      const distance = calculateDistance(latitude, longitude, pointIn.latitude, pointIn.longitude, 'K');

      if (distance < 3000) {
        nearLocations.push(project1);
      }
    });

    dispatch(project1Actions.getProject1(nearLocations));
    setModalVisible(!modalVisible);
  };

  function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number, unit: string) {
    const radlat1 = Math.PI * lat1 / 180;
    const radlat2 = Math.PI * lat2 / 180;
    const theta = lon1 - lon2;
    const radtheta = Math.PI * theta / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === 'K') {
      dist = dist * 1.609344;
    }
    if (unit === 'N') {
      dist = dist * 0.8684;
    }
    return parseInt(dist + unit);
  }
  return (
    <HomeView
      onPressShowAll={onPressShowAll}
      onPressFilterByLocation={onPressFilterByLocation}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      data={project1s}
      onPressViewProfile={onPressViewProfile}
      favoriteProject1={favoriteProject1}
      />
  );
  };
export default HomeScreen
