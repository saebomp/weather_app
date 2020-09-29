import React from 'react'
import { View, Text, StyleSheet, ImagePropTypes } from 'react-native'

const Content = props => (
  <View style={styles.content}>
    <View>
      {props.temp ? 
      <Text style={styles.info}>{Math.round(props.temp)}&#8451;
      </Text> : null}
    </View>
    <View>
      {props.weather ? <Text style={styles.info}>{props.weather}</Text> : null}
    </View>
    <View>
      <Text style={styles.cityName}>{props.city}</Text>
    </View>
  </View>
)

export default Content

const styles = StyleSheet.create({
    content: {
      flex: 1,
      width: '100%',
      backgroundColor: 'transparent'
    },
    info: {
      fontSize: 30,
      color: 'black',
      paddingLeft: 20,
      paddingTop: 10
    },
    countryName: {
      color: 'black',
      fontSize: 25,
      paddingLeft: 20
    },
    cityName: {
      fontSize: 30,
      paddingLeft: 20,
      paddingTop: 5,
      paddingBottom: 25
    }
  })