import { View, Text, Platform, StyleSheet } from 'react-native'
import React from 'react'

const HeadBar = () => {
  return (
    <View style={styles.container}>
      <Text>HeadBar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        ...Platform.select({
          ios:{},
          android:{},
          web:{
            backgroundColor:'black'
          },
        }),

      },
    })
    export default HeadBar