import React from 'react'
import {Text, SafeAreaView} from 'react-native'
import Style from './styles/app'
import Main from './components/Main'
function Calculator() {
  const style = Style()

  return (
    <SafeAreaView style={style.SafeArea}>
      <Text style={style.Title}>CALCULATOR</Text>
      <Main />
    </SafeAreaView>
  )
}

export default Calculator
