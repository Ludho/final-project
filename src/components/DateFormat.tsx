import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Status } from '../models/status';

interface Props{
    status: Status,
    date: string,
}

const DateFormat = (props: Props) => {

    const renderText= (status: Status): string=>{
        switch(status){
            case 0: 
                return "Modifiée le:";
            case 1:
                return "Envoyée le:";
            case 2:
                return "Livrée le:";
            case 3:
                return "Récupérée le:" 
        }
        return ""
    }

  return (
    <View style={{marginLeft:'auto'}}>
        <Text style={styles.text}>{renderText(props.status)}</Text>
        <Text style={styles.text}>{props.date}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: 'gray',
        fontSize:16,
    }
})
export default DateFormat