export function clikedButton(
  value: string,
  label: string,
  setFirstValue: React.Dispatch<React.SetStateAction<string>>,
  setSecondValue: React.Dispatch<React.SetStateAction<string>>,
  setStep: React.Dispatch<React.SetStateAction<'first' | 'second'>>,
  setOperator: React.Dispatch<
    React.SetStateAction<'none' | 'divide' | 'multiply' | 'sub' | 'plus'>
  >,
  step: 'first' | 'second',
  firstValue: string,
  secondValue: string,
  operator: 'none' | 'divide' | 'multiply' | 'sub' | 'plus',
) {
  switch (value) {
    case 'clear':
      setFirstValue('')
      setSecondValue('')
      setStep('first')
      setOperator('none')
      break
    case 'undo':
      switch (step) {
        case 'first':
          setFirstValue(
            firstValue.replace(firstValue[firstValue.length - 1], ''),
          )
          break
        case 'second':
          if (secondValue === '') {
            setOperator('none')
            setStep('first')
          } else {
            setSecondValue(
              secondValue.replace(secondValue[secondValue.length - 1], ''),
            )
          }
          break
        default:
          break
      }
      break
    case 'percent':
      switch (step) {
        case 'first':
          setFirstValue(`${+firstValue / 100}`)
          break
        case 'second':
          setSecondValue(`${+secondValue / 100}`)
        default:
          break
      }
      break
    case '1dividedby':
      switch (step) {
        case 'first':
          setFirstValue(`${1 / +firstValue}`)
          break
        case 'second':
          setSecondValue(`${1 / +secondValue}`)
          break
        default:
          break
      }
      break
    case 'pow':
      switch (step) {
        case 'first':
          setFirstValue(`${Math.pow(+firstValue, 2)}`)
          break
        case 'second':
          setSecondValue(`${Math.pow(+secondValue, 2)}`)
        default:
          break
      }
      break
    case 'sqrt':
      switch (step) {
        case 'first':
          setFirstValue(`${Math.sqrt(+firstValue)}`)
          break
        case 'second':
          setSecondValue(`${Math.sqrt(+secondValue)}`)
        default:
          break
      }
      break
    case 'divide':
      if (step === 'second') {
        clikedButton(
          'equal',
          '=',
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
      setOperator('divide')
      setStep('second')
      setSecondValue('')
      break
    case 'multiply':
      if (step === 'second') {
        clikedButton(
          'equal',
          '=',
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
      setOperator('multiply')
      setStep('second')
      setSecondValue('')
      break
    case 'sub':
      if (step === 'second') {
        clikedButton(
          'equal',
          '=',
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
      setOperator('sub')
      setStep('second')
      setSecondValue('')
      break
    case 'plus':
      if (step === 'second') {
        clikedButton(
          'equal',
          '=',
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
      setOperator('plus')
      setStep('second')
      setSecondValue('')
      break
    case 'plusminus':
      switch (step) {
        case 'first':
          setFirstValue(`${-+firstValue}`)
          break
        case 'second':
          setSecondValue(`${-+secondValue}`)
          break

        default:
          break
      }
      break
    case 'equal':
      switch (operator) {
        case 'divide':
          setFirstValue(`${+firstValue / +secondValue}`)
          break
        case 'multiply':
          setFirstValue(`${+firstValue * +secondValue}`)
          break
        case 'sub':
          setFirstValue(`${+firstValue - +secondValue}`)
          break
        case 'plus':
          setFirstValue(`${+firstValue + +secondValue}`)
          break
        default:
          break
      }
      setSecondValue('')
      setOperator('none')
      setStep('first')
      break
    case 'dot':
      switch (step) {
        case 'first':
          if (!firstValue.includes('.')) {
            setFirstValue(firstValue + label)
          }
          break
        case 'second':
          if (!secondValue.includes('.')) {
            setSecondValue(secondValue + label)
          }
          break
        default:
          break
      }
      break
    default:
      switch (step) {
        case 'first':
          setFirstValue(firstValue + label)
          break
        case 'second':
          setSecondValue(secondValue + label)
          break
        default:
          break
      }
      break
  }
}
export function getOperator(
  operator: 'none' | 'divide' | 'multiply' | 'sub' | 'plus',
) {
  switch (operator) {
    case 'divide':
      return '÷'
    case 'multiply':
      return '×'
    case 'sub':
      return '-'
    case 'plus':
      return '+'
    default:
      return ''
  }
}

export function getParenthesis(type: 'first' | 'last', value: string) {
  switch (type) {
    case 'first':
      return Math.sign(+value) === -1 ? '(' : ''
    case 'last':
      return Math.sign(+value) === -1 ? ')' : ''
    default:
      return ''
  }
}
