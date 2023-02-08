import React, {FC} from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import { styles } from "./styles";
import Card from "./Card"
import { Project1 } from "../../interfaces";

interface Props {
  data: Project1[]
  onPressViewProfile: (Project1: Project1) => void
}

const HomeView: FC<Props> = ({data, onPressViewProfile}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.screenContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: Project1) => item.id}
          data={data}
          renderItem={({item} : {item: Project1}) => {
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