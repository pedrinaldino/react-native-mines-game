import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {
  return (
    <View style={styles.container}>
      <Icon name='flag' size={20} color='#F22'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flagpole: {
    position: 'absolute',
    height: 14,
    width: 2,
    backgroundColor: '#222',
    marginLeft: 9
  },
  flag: {
    position: 'absolute',
    height: 5,
    width: 6,
    backgroundColor: '#F22',
    marginLeft: 3
  },
  base1: {
    position: 'absolute',
    height: 2,
    width: 6,
    backgroundColor: '#222',
    marginLeft: 7,
    marginTop: 10
  },
  base2: {
    position: 'absolute',
    height: 2,
    width: 10,
    backgroundColor: '#222',
    marginLeft: 5,
    marginTop: 12
  },
  flagpoleBigger: {
    height: 28,
    width: 4,
    marginLeft: 16
  },
  flagBigger: {
    height: 10,
    width: 14,
    marginLeft: 3
  },
  base1Bigger: {
    height: 4,
    width: 12,
    marginTop: 20,
    marginLeft: 12
  },
  base2Bigger: {
    height: 4,
    width: 20,
    marginLeft: 8,
    marginTop: 24
  }
})