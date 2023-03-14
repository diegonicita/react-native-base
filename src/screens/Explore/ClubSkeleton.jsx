import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Skeleton } from '@rneui/themed'

export const ClubSkeleton = ({ancho}) => (
  <View style={styles.viewSkeleton}>
    <Skeleton
      animation="pulse"
      style={styles.skeleton}
      width={ancho}
      height={30}
    />
    <Skeleton
      animation="pulse"
      style={styles.skeleton}
      width={ancho}
      height={150}
    />
    <Skeleton
      animation="pulse"
      style={styles.skeleton}
      width={ancho}
      height={15}
    />
    <Skeleton
      animation="pulse"
      style={styles.skeleton}
      width={ancho}
      height={150}
    />
    <Skeleton
      animation="pulse"
      style={styles.skeleton}
      width={ancho}
      heigt={15}
    />
    <Skeleton
      animation="pulse"
      style={styles.skeleton}
      width={ancho}
      height={150}
    />
    <Skeleton
      animation="pulse"
      style={styles.skeleton}
      width={ancho}
      heigt={15}
    />
     <Skeleton
      animation="pulse"
      style={styles.skeleton}
      width={ancho}
      height={150}
    />
    <Skeleton
      animation="pulse"
      style={styles.skeleton}
      width={ancho}
      heigt={15}
    />
     <Skeleton
      animation="pulse"
      style={styles.skeleton}
      width={ancho}
      height={150}
    />
    <Skeleton
      animation="pulse"
      style={styles.skeleton}
      width={ancho}
      heigt={15}
    />
  </View>
)

const styles = StyleSheet.create({
  skeleton: {
    margin: 5
  },
  viewSkeleton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 20
  }
})
