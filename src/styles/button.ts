import {StyleSheet, Dimensions} from 'react-native'

export default function CalculatorStyle(colorButton: string) {
  return StyleSheet.create({
    Text: {
      fontSize: Dimensions.get('window').width / 10,
      textAlign: 'center',
      color: '#666',
    },
    Button: {
      width: Dimensions.get('window').width / 5,
      height: Dimensions.get('window').width / 5,
      backgroundColor: colorButton,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      margin: 5,
      borderStyle: 'solid',
      borderColor: '#000',
      borderRadius: Dimensions.get('window').width / 40,
    },
    ButtonLarge: {
      width: Dimensions.get('window').width / 2.5 + 10,
      height: Dimensions.get('window').width / 5,
      backgroundColor: colorButton,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      margin: 5,
      borderStyle: 'solid',
      borderColor: '#000',
      borderRadius: Dimensions.get('window').width / 40,
    },
  })
}
