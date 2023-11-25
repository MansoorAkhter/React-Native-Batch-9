import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import CutsomTextInput from '../component/CutsomTextInput'

const Login = () => {
  const [userName, setUsername] = useState('')
  const [passwrod, setPassword] = useState('')

  console.log('user name', userName)
  console.log('password', passwrod)

  const loginHandler =  () => console.log('Pressed')

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center", padding: 30 }}>
        <View style={{ marginBottom: 70 }}>
          <Text style={styles.heading}>Happy Coding</Text>
        </View>

        <View style={styles.inputs}>
          <CutsomTextInput label="Username" onChangeText={setUsername} icon={"account"}/>
          <CutsomTextInput label="Password" onChangeText={setPassword} icon={"key"}/>
        </View>

        <Button icon="key" mode="contained" buttonColor='purple' uppercase={true} style={{ width: "50%", marginTop: 30 }} onPress={loginHandler}>
          Login
        </Button>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  heading: { fontSize: 30, color: "purple", fontWeight: "900", textTransform: "uppercase" },
  inputs: { width: '100%', rowGap: 15 }
})