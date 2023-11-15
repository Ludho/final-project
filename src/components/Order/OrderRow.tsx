import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

interface Props{
    title: string,
    count: Number
}

const OrderRow = (props: Props) => {
  return (
    <View style={{margin:5}}>
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={styles.text}>{props.count.toString()}</Text>
        </View>
        <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
            }}
            />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'space-between',
        display:'flex',
        flexDirection:'row'
    },
    text:{
        fontSize: 20,
    }
  });

export default OrderRow