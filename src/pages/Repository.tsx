import React, { useState } from 'react'
import ContactProvider from '../provider/ContactProvider'
import { View, StyleSheet } from 'react-native'
import ContactModal from '../components/modals/ContactModal'
import { Searchbar } from 'react-native-paper';
import ContactList from '../components/Repository/ContactList';
import { AntDesign } from '@expo/vector-icons';



const Repository = () => {
  const [show, setShow] = useState(false)
  const [filter, setFilter] = useState('')

return (
  <ContactProvider>
    <View style={{height:"100%"}}>
            <ContactModal show={show} setShow={setShow}></ContactModal>
            <Searchbar 
                  style={styles.searchbar}
                  placeholder="Enseigne, wol..."
                  onChangeText={(e) => { setFilter(e); } }
                  value={filter} 
                ></Searchbar>
            <ContactList filter={filter}/>
            <AntDesign style={styles.icon} name='plussquare' color='#039FE1' size={50} onPress={()=>{setShow(true)}}></AntDesign>
    </View>
  </ContactProvider>
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

export default Repository