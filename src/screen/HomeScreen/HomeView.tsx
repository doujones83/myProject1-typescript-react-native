import React, { FC } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles';
import Card from './Card';
import { Project1 } from '../../interfaces';
import FavoriteProject1 from "./FavoriteProject1";

interface Props {
  data: Project1[];
  onPressViewProfile: (project1: Project1) => void;
  favoriteProject1: Project1 | undefined
}

const HomeView: FC<Props> = ({ data, onPressViewProfile, favoriteProject1 }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.screenContainer}>
        {favoriteProject1 !== undefined && (
          <FavoriteProject1
            onPressViewProfile={onPressViewProfile}
            favoriteProject1={favoriteProject1}
          />
        )}
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: Project1) => item.id}
          data={data}
          renderItem={({ item }: { item: Project1 }) => {
            return (
              <Card
                data={item}
                onPressViewProfile={() => onPressViewProfile(item)}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeView;