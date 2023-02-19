import React, { FC } from 'react';
import { View, FlatList, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import Card from './Card';
import { Project1 } from '../../interfaces';
import FavoriteProject1 from "./FavoriteProject1";
import FilterModal from "./FilterModal";


interface Props {
  data: Project1[];
  onPressViewProfile: (project1: Project1) => void;
  favoriteProject1: Project1 | undefined
  modalVisible: boolean;
  setModalVisible: (val: boolean) => void;
  onPressShowAll: () => void
  onPressFilterByLocation: () => void
}

const HomeView: FC<Props> = ({ data, 
  onPressViewProfile, 
  favoriteProject1,
  modalVisible,
  setModalVisible,
  onPressFilterByLocation,
  onPressShowAll
  }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.screenContainer}>
      <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.filterButton}
          >
          <Text style={styles.filterText}>FILTER</Text>
          </TouchableOpacity>
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
      <FilterModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        onPressShowAll={onPressShowAll}
        onPressFilterByLocation={onPressFilterByLocation}
      />
    </SafeAreaView>
  );
};

export default HomeView;