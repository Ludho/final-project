import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Status } from '../models/status';

interface Props{
    status: Status,
}

const StatusIcon = (props: Props) => {

    const renderText= (status: Status): string=>{
        switch(status){
            case 0: 
                return "En attente";
            case 1:
                return "Envoyée";
            case 2:
                return "Livrée";
            case 3:
                return "Récupérée" 
        }
        return ""
    }

    const renderColor= (status: Status): string=>{
        switch(status){
            case 0: 
                return "#4287f5";
            case 1:
                return "#f5f242";
            case 2:
                return "#f5a442";
            case 3:
                return "#42f54e" 
        }
        return ""
    }

  return (
    <View style={{
        backgroundColor:renderColor(props.status),
        borderRadius: 20,
        padding:5,
        }}>
        <Text style={styles.text}>{renderText(props.status)}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    text:{
        fontSize:16,
    }
});
export default StatusIcon