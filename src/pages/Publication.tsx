import React, { useState } from 'react'
import {StyleSheet, Text, View } from 'react-native'
import PublicationsList from '../components/PublicationsList'
import { AntDesign } from '@expo/vector-icons';
import BookProvider from '../provider/BookProvider';
import BookModal from '../modals/BookModal';



const Publication = () => {
    const [show, setShow] = useState(false)
  return (
    <View>
        <BookProvider>
            <BookModal show={show} setShow={setShow}></BookModal>
            <PublicationsList/>
            <AntDesign style={styles.icon} name='plussquare' color='#039FE1' size={50} onPress={()=>{setShow(true)}}></AntDesign>
        </BookProvider>
    </View>
  )
}

const styles = StyleSheet.create({
    icon:{
        position:'absolute',
        bottom: 10,
        right: 10,
    }
})

export default Publication