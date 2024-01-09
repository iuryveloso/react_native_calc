import React, {createRef, useEffect, useState} from 'react'
import Style from '../styles/main'
import CalcButton from './Button'
import Display from './Display'
import DataButtons from '../data'
import {clikedButton} from '../functions'
import {SafeAreaView, View, ScrollView} from 'react-native'

function Calculator() {
  const buttons = DataButtons()
  const style = Style()
  const scrollRef = createRef<ScrollView>()
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')
  const [operator, setOperator] = useState<
    'divide' | 'multiply' | 'sub' | 'plus' | 'none'
  >('none')
  const [step, setStep] = useState<'first' | 'second'>('first')

  useEffect(() => {
    scrollRef.current?.scrollToEnd({animated: true})
  }, [firstValue, secondValue, operator])

  function onClick(value: string, label: string) {
    clikedButton(
      value,
      label,
      setFirstValue,
      setSecondValue,
      setStep,
      setOperator,
      step,
      firstValue,
      secondValue,
      operator,
    )
  }
  return (
    <SafeAreaView style={style.SafeArea}>
      <View style={style.View}>
        <Display
          firstValue={firstValue}
          operator={operator}
          scrollRef={scrollRef}
          secondValue={secondValue}
        />
        {buttons.map((data, key) => {
          return (
            <CalcButton
              onClick={onClick}
              size={data.size}
              color={data.color}
              label={data.label}
              value={data.value}
              key={key}
            />
          )
        })}
      </View>
    </SafeAreaView>
  )
}

export default Calculator
