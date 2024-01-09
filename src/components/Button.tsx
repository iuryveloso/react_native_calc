import React from 'react'
import Style from '../styles/button'
import { Text, TouchableHighlight} from 'react-native'

interface ButtonInterface {
  onClick: (value: string, label: string) => void
  label: string
  value: string
  color: string
  size: 'normal' | 'large'
}

function Button({onClick, label, value, color, size}: ButtonInterface) {
  const style = Style(color)

  return (
    <TouchableHighlight
      onPress={() => onClick(value, label)}
      style={size === 'large' ? style.ButtonLarge : style.Button}>
      <Text style={style.Text}>{label}</Text>
    </TouchableHighlight>
  )
}

export default Button
