import { StyleSheet, Dimensions } from 'react-native'

export default function CalculatorStyle() {
  return StyleSheet.create({
    ViewDisplay: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      width: (Dimensions.get('window').width / 1.25) + 30,
      height: Dimensions.get('window').width / 5,
      borderWidth: 2,
      margin: 5,
      padding: 5,
      paddingHorizontal: 10,
      backgroundColor: '#ddd',
      borderStyle: 'solid',
      borderColor: '#000',
      borderRadius: Dimensions.get('window').width / 40
    },
    TextDisplay: {
      fontSize: Dimensions.get('window').width / 8,
      color: '#666'
    },
  })
}
