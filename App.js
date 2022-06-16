import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CodePush from 'react-native-code-push'

const App = () => {
  
  const codePushOptions = {checkFrequency: CodePush.checkFrequency.ON_APP_START}
  
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default codePush(codePushOptions)(App)
// export default App

const styles = StyleSheet.create({})