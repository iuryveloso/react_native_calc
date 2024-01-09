import { StyleSheet, Dimensions } from 'react-native'

export default function CalculatorStyle() {
  return StyleSheet.create({
    SafeArea: {
      backgroundColor: '#eee',
      flexGrow: 1,
    },
    Title: {
      marginTop: 20,
      fontSize: 35,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#666'
    },
    View: {
      flexGrow: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center'
    },
  })
}
