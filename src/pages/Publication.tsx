import React, { useContext, useState } from 'react'
import {StyleSheet, Text, View } from 'react-native'
import PublicationsList from '../components/PublicationsList'
import { AntDesign } from '@expo/vector-icons';
import BookProvider, { BookContext } from '../provider/BookProvider';
import BookModal from '../components/modals/BookModal';
import { Searchbar } from 'react-native-paper';



const Publication = () => {
    const [show, setShow] = useState(false)
    const [filter, setFilter] = useState('')

  return (
    <View style={{height:"100%"}}>
        <BookProvider>
            <BookModal show={show} setShow={setShow}></BookModal>
            <Searchbar 
                  style={styles.searchbar}
                  placeholder="Enseigne, wol..."
                  onChangeText={(e) => { setFilter(e); } }
                  value={filter} 
                ></Searchbar>
            <PublicationsList filter={filter}/>
            <AntDesign style={styles.icon} name='plussquare' color='#039FE1' size={50} onPress={()=>{setShow(true)}}></AntDesign>
        </BookProvider>
    </View>
  )
}

const styles = StyleSheet.create({
    searchbar: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 30,
        backgroundColor: 'white',
        borderRadius: 10
    },
    icon:{
        position:'absolute',
        bottom: 10,
        right: 10,
    }
})

export default Publication