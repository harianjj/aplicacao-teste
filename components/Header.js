import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Header() {
    return(
        <View style={styles.header}>
            <Image source={require('../assets/images/gmail.png')} style={styles.gmail}/>       
            <View style={styles.pesquisa}>
              <Text style={styles.pesquisar}> Pesquisar </Text>
              <FontAwesome5 name= 'search' size={25} color='#C0C0C0'/>
            </View>       
        </View>
    );
}


const styles = StyleSheet.create({
    gmail: {
      width: 50,
      height: 50, 
    },
    
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 50,
      paddingRight: 10,
      backgroundColor: 'gray',
      fontSize: 30,
      borderRadius: 15,
      paddingTop: 5,
      paddingEnd: 20,
      paddingLeft: 20,
      paddingBottom: 5,
      margin: 10,
    },
    
    pesquisar: {
      color: '#C0C0C0',
      paddingEnd: 10,
      fontSize: 18,
    },

    pesquisa: {
      flexDirection: 'row',
    },
  });