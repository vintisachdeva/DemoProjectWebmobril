import React, { useState ,useEffect} from 'react';
import { Image, StyleSheet, SafeAreaView, TextInput, ImageBackground, ScrollView,
  View, Text, TouchableOpacity , Button} from 'react-native';

import * as axios from 'axios'

const Terms = (props) => {

    return(

      <SafeAreaView style={styles.container}>
        <ScrollView>
      
      <View  style={{ flexDirection:'row' ,alignItems:'flex-start', justifyContent:"flex-start", backgroundColor:"black", height:60}}>
      <TouchableOpacity  onPress={()=> props.navigation.goBack()}>
      <Image style={{height:16, width:10, marginTop:22, marginLeft:20}} source={require('../assets/chevron_right.png')}/>  
                </TouchableOpacity>
      
      <Text style={styles.fontapply}>Log In</Text>
      </View>
      <View style={{flex:1, alignItems:'center', padding:20, marginTop:100}}>
      <View style={{marginTop:40, backgroundColor:'#F2F2F2', height:300, padding:10, borderRadius:10}}>

      <Text style={{ marginLeft:90, fontSize:20, marginTop:20, color:'#006BA6' }}>Terms of service </Text>
      <Text style={{ marginLeft:10, marginTop:20, fontSize:16 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mauris in justo placerat
           tincidunt nec quis elit. Nunc pulvinar fringilla mi, nec suscipitLorem ipsum dolor sit amet,
            consectetur adipiscing elit. Proin in mauris in justo placerat tincidunt nec quis elit.
             Nunc pulvinar fringilla mi, nec suscipitplacerat tincidunt nec quis elit.</Text>
    </View>
    <View style={{marginTop:130}}>
    <Image source={require('../assets/terms.png')}/>
    </View>     
    </View>
    </ScrollView>
    
    </SafeAreaView>
    )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  logo: {
    width: 150,
    height: 122,
    marginTop:15
  },
  input: {
    height: 50,
    width: "90%",
    backgroundColor: '#F5F5F5',
    marginTop:2
    },
  fontText:{
    margin:"10%",
    fontSize: 20,
    fontWeight: "normal"
  },
  fontapply1:{
    left:10,
    margin:"10%",
    fontSize: 10,
    fontWeight: "normal",
    color:'#8F8F8F'
  },
  fontapply:{
    fontSize:20,
    marginLeft:30,
    marginTop:18,
    color:"white"
  },
  
});

export default Terms;