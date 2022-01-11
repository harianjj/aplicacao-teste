import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from 'react-native';



export default function Amigos() {
  const [amigos, setAmigos] = useState([])

  useEffect(function(){
    async function getData() {
      const response = await fetch('https://mobile.ect.ufrn.br:3002/emails')
      const amigos = await response.json()
      setAmigos(amigos)
    }
    getData()
  }, [])

    const adicionar = [
      {
        id: 14,
        nome: 'Adicionar',
        src: require('../assets/images/adicionar.png'),
      },
      
    ];


    function renderItem({ item }) {
      return <TouchableOpacity >
              <View style={styles.story}>

                  <Image source={{ uri: item.picture}} style={styles.perfil}/>
                  <Text> {item.to} </Text>

              </View>
            </TouchableOpacity>
    }

    return(
      <View>
          <View style={styles.padding}>
          </View>

          <View style={styles.stories}>
              <View style={styles.story}>
                <Image source={require('../assets/images/adicionar.png')} style={styles.perfil}/>
                <Text> Adicionar </Text>
              </View>

              <FlatList
                data={adicionar}
                data={amigos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
          </View>

          <View style={styles.padding}>
              <Text> CAIXA DE ENTRADA </Text>
          </View>
      </View>
    );
}


const styles = StyleSheet.create({
    
  padding: {
    padding: 5,
  },
    stories: {
      height: 90,
      backgroundColor: '#fff',
      paddingRight: 10,
      flexDirection: 'row',
      marginBottom: 10,
      borderBottomColor: 'red',  
    },

    story: {
      height: 90,
      width: 90,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 3,   
    },

    perfil: {
      width: 70,
      height: 70,
      borderRadius: 35,
    },    
  });