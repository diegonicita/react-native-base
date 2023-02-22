import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Skeleton } from '@rneui/themed'

export const ClubSkeleton = () =>   
    <View style={styles.viewSkeleton}>
      <Skeleton
        animation="pulse"
        style={styles.skeleton}
        width={150}
        height={15}
      />
      <Skeleton
        animation="pulse"
        style={styles.skeleton}
        width={80}
        heigt={80}
        circle={true}
      />
      <Skeleton
        animation="pulse"
        style={styles.skeleton}
        width={200}
        height={1}
      />
      <Skeleton
        animation="pulse"
        style={styles.skeleton}
        width={150}
        height={150}
        circle={true}
      />
      <Skeleton
        animation="pulse"
        style={styles.skeleton}
        width={150}
        heigt={15}
      />
      <Skeleton
        animation="pulse"
        style={styles.skeleton}
        width={150}
        height={15}
      />
      <Skeleton
        animation="pulse"
        style={styles.skeleton}
        width={150}
        heigt={15}
      />
      <Skeleton
        animation="pulse"
        style={styles.skeleton}
        width={150}
        height={15}
      />
    </View>

const styles = StyleSheet.create({    
    skeleton: {
      margin: 5
    },
    viewSkeleton: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      margin: 20,
      backgroundColor: 'white'
    }
  })
