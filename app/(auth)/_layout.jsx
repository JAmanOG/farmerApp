import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const auth = () => {
  return (
  <>
    <Stack>
      <Stack.Screen name="sign-in" 
      options={{headerShown: false}}
      />
            <Stack.Screen name="sign-up" 
      options={{headerShown: false}}
      />
    </Stack>
    <StatusBar 
    backgroundColor='#FFFFFF'
    style='dark'
    />
  </>
  )
}

export default auth
