import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';


import Header from '../components/Header';
import Amigos from '../components/Story';
import Conteudo from '../components/Conteudo';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Header/>
      <Amigos navigation={navigation}/>
      <Conteudo navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
});
