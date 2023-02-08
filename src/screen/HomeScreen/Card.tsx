import React, { FC } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Project1 } from '../../interfaces'
import { styles } from './styles'

interface Props {
    data: Project1
    onPressViewProfile: () => void
}

const Card: FC<Props> = ({ data, onPressViewProfile }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPressViewProfile}>
        <Image source={{ uri: data.imageUrl}} style={styles.avatar} />
        <View style={styles.titleContainer}>
            <Text style={styles.name}>{data.fullName}</Text>
            <Text style={styles.title}>Project1</Text>
        </View>
      <Text style={styles.linkText}>View Profile</Text>
    </TouchableOpacity>
  )
}

export default Card