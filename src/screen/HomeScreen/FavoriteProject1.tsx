import React, {FC} from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Card from './Card';
import { Project1 } from '../../interfaces';

interface Props {
  onPressViewProfile: (project1: Project1) => void
  favoriteProject1: Project1
}

const FavoriteProject1: FC<Props> = ({onPressViewProfile, favoriteProject1}) => {
  return (
    <>
      <View>
        <Text style={styles.favoriteText}>Favorite Project1</Text>
        <Card
          data={favoriteProject1}
          onPressViewProfile={() => onPressViewProfile(favoriteProject1)}
        />
      </View>
      <View style={styles.divider} />
    </>
  );
};

export default FavoriteProject1;