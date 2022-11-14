import React from "react";
import { View,Text,SafeAreaView,FlatList,StyleSheet } from "react-native";
import data from "./src/data.json"
import Product from "./src/components/Product";

const App = ()=>{
  return(
    <SafeAreaView>
    <View>
      <Text style={styled.header}>PATİKA STORE</Text>
      <FlatList data={data} renderItem={({item})=><Product data={item}/>}/>
    </View>
    </SafeAreaView>
  )
}

const styled =StyleSheet.create({
  header:{
    fontWeight:"bold",
    color:"red",
    fontSize:50
  }
})

export default App;