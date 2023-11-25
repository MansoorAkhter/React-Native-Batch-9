import { View, Text } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'


const CutsomTextInput = ({ label, onChangeText, icon }) => {
    return (
        <>
            <TextInput mode="flat" label={label} activeUnderlineColor='purple' onChangeText={onChangeText} right={<TextInput.Icon icon={icon} color={'purple'} />} />
        </>
    )
}

export default CutsomTextInput