import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

const Form = props => (
  <View style={styles.header}>
    <Text style={styles.title}>Open Weather App</Text>
    <TextInput
      style={styles.textInput}
      placeholder='Input a city name and country code'
      onChangeText={props.onChangeText}
      onEndEditing={props.onSubmit}
    />
    {/* onEndEditing is meant to pass the contents of the TextInput */}
    {/* App.js 의 onChangeText={text => this.setState({city:text})} 여기서 typing 한걸 이 파일 props 로 전달*/}
  </View>
)

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    width: '100%'
  },
  textInput: {
    width: 300,
    height: 40,
    borderColor: 'grey',
    borderWidth: 2,
    padding: 5
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 50
  }
})

export default Form
