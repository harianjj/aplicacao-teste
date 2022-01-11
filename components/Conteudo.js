import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons';


export default function Conteudo({navigation}) {

  const[conteudo, setConteudo] = useState([])

  useEffect(function(){
    async function getData() {
      const response = await fetch('https://mobile.ect.ufrn.br:3002/emails')
      const conteudo = await response.json()
      setConteudo(conteudo)
    }
    getData()
  }, [])

      function renderItem({ item }) {
        return <View style={styles.post} >
                  <TouchableOpacity onPress={() => navigation.navigate('Email', {id: item.id})}>
                      <View style={styles.postHeader} >
                          <View style={styles.postHeaderEsquerda}>
                              <Image source={{ uri: item.picture}} style={styles.postHeaderImg}  />
                              <View>
                                  <Text style={styles.bold} > {item.to} </Text>
                                  <Text style={styles.btitle}> {item.tittle} </Text>
                                  <Text> {item.summary} </Text>                                  
                              </View>                              
                          </View>
                          <View style={styles.direita}>
                          <AntDesign name='star' size={24} color='black'/>
                          
                            <Text> {item.time} </Text>
                          </View>                                                
                      </View>
                  </TouchableOpacity>                 
                </View>
      }
      
    return(
            <View style={styles.conteudo}>              
                <FlatList
                        data={conteudo}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                    />                
            </View>
    );
}

const styles = StyleSheet.create({
    bold: {
      fontWeight: "bold",
      fontSize: 18,
    },
    btitle: {
      fontWeight: "bold",
      fontSize: 15,
    },
    conteudo: {
      flex: 1,   
    },
    direita: {
      alignItems: 'center',
    },

    post: {
      paddingTop: 7,
      paddingBottom: 3,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
    },
    postHeader: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      height: 60,
      margin: 5,
      alignItems: 'center',
      justifyContent: 'space-between',      
    },
    postHeaderEsquerda: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    
    postHeaderImg: {
      width: 50,
      height: 50,
      margin: 8,
      borderRadius: 25,
    },
 
});
  