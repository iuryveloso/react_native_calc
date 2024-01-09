import React from 'react'
import Style from '../styles/display'
import {getOperator, getParenthesis} from '../functions'
import {Text, View, ScrollView} from 'react-native'

interface CalculatorInterface {
  scrollRef: React.RefObject<ScrollView>
  firstValue: string
  operator: 'none' | 'divide' | 'multiply' | 'sub' | 'plus'
  secondValue: string
}

function Calculator({
  firstValue,
  operator,
  scrollRef,
  secondValue,
}: CalculatorInterface) {
  const style = Style()

  return (
    <View style={style.ViewDisplay}>
      <ScrollView horizontal={true} ref={scrollRef}>
        <Text style={style.TextDisplay}>
          {`${firstValue}${getOperator(operator)}${getParenthesis(
            'first',
            secondValue,
          )}${secondValue}${getParenthesis('last', secondValue)}`}
        </Text>
      </ScrollView>
    </View>
  )
}

export default Calculator
