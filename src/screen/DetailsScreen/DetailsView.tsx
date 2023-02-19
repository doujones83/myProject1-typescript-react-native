import React, {FC} from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Project1 } from '../../interfaces';
import styles from './styles';
import colors from '../../theme';

interface Props {
  data: Project1
  isFavorite: boolean
  onPressSelectFavoriteProject1: () => void
}

const DetailsView: FC<Props> = ({data, isFavorite, onPressSelectFavoriteProject1}) => {
  const backgroundColor = isFavorite ? colors.BLUE : 'transparent';
  return (
    <View style={styles.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <View style={styles.favoriteContainer}>
          <TouchableOpacity
            style={[styles.favoriteButton, {backgroundColor}]}
            onPress={onPressSelectFavoriteProject1}
          />
          <Text style={styles.favoriteText}>Favorite Project1</Text>
        </View>
        <Image source={{ uri: data.imageUrl }} style={styles.avatar} />
        <Text style={styles.name}>{data.fullName}</Text>
        <Text style={styles.contactInformation}>{data.phone}</Text>
        <Text style={styles.contactInformation}>{data.email}</Text>
        <Text>{`\n ${data.bio}`}</Text>
      </ScrollView>
    </View>
  );
};

export default DetailsView;