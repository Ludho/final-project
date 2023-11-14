import React from 'react'
import { Text, StyleSheet, StyleProp, TextStyle, View, TextInput } from 'react-native'

interface Props{
    placeholder: string,
    value: string,
    onChangeText: Function,
    label: string,
}

const CustomTextInput = (props: Props) => {
  return (
    <View style={styles.border}>
    <Text style={styles.label}>{props.label}</Text>
    <TextInput 
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={(e)=>props.onChangeText(e)}
    />
    </View>

  )
}
const styles = StyleSheet.create({
    border:{
        width: 200,
        borderColor:"gray",
        borderWidth:1,
        paddingHorizontal:10,
        paddingTop:5,
        margin: 10,
    },
    label:{
        color: '#039FE1'
    },
    input:{
        fontSize: 18,
        width: '100%',
    },
})
export default CustomTextInput