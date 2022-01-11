import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import {FontAwesome5, AntDesign} from '@expo/vector-icons';


export default function Email({ route }) {

    const {id} = route.params
    const[email, setEmail] = useState([])

  useEffect(function(){
    async function getData() {
        
        const response = await fetch('https://mobile.ect.ufrn.br:3002/emails/' +id)
        const email = await response.json()

      setEmail(email)
    }
    getData()
  }, [])
  
    return(
            <View style={styles.container}>
                <View style={styles.conteudo}>

                        <View style={styles.post} >
                            <View style={styles.postHeader}>
                                <View style={styles.postHeaderEsquerda}>  
                                    <Text style={styles.bold}> {email.tittle} </Text>

                                    <View style={styles.entrada}>  
                                        <Text> Entrada </Text>
                                    </View>
                                </View>
                                
                                <View style={styles.direita}>
                                <AntDesign name='star' size={24} color='black'/> 
                                </View>   
                            </View>
                        </View> 

                        <View style={styles.post} >
                            <View style={styles.postHeader}>
                                <View style={styles.postHeaderEsquerda}>
                                    <Image source={{ uri: email.picture}} style={styles.postHeaderImg} />
                                    <View>
                                        <Text style={styles.bold} > {email.to} </Text>
                                        <Text> {email.time} </Text>
                                    </View>
                                    
                                </View>
                                
                                <View style={styles.direita}>
                                    <FontAwesome5 name='reply' size={20} color= "black" style={styles.padding} onPress={() => console.log('reponder')}/>
                                    <FontAwesome5 name='ellipsis-v' size={20} color= "black" style={styles.star} onPress={() => console.log('config')}/>    
                                </View>   
                            </View>
                        </View> 
                        <View style={styles.body}>
                            <Text> De: {email.from} </Text>
                            <Text> {email.body} </Text>
                        </View>
                        
                    
                </View>
            </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',        
    },

    padding: {
      paddingRight: 18,
    },
    
    bold: {
      fontWeight: "bold",
      fontSize: 22,
    },

    body: {
        padding: 10,
        fontSize: 50,
    },

    entrada: {
        backgroundColor: '#D3D3D3',
        color: '#F8F8FF',
        alignItems: 'center',
        padding: 2,
        borderRadius: 6,
    },

    direita: {
      alignItems: 'center',
      flexDirection: 'row',
      padding: 7,
    },

    post: {
      paddingTop: 1,
      paddingBottom: 3,
      borderBottomWidth: 1,
      backgroundColor: '#fff',
      borderBottomColor: '#F5F5F5',
    },

    postHeader: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      height: 60,
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 3,
    },

    postHeaderEsquerda: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    
    postHeaderImg: {
      width: 50,
      height: 50,
      borderRadius: 25,
      margin: 8,
    },
  });