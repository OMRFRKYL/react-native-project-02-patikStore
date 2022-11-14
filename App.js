import React from "react";
import { View,Text,SafeAreaView,FlatList,StyleSheet } from "react-native";
import data from "./src/data.json"
import Product from "./src/components/Product";
import SearchBar from "./src/components/SearchBar";

const App = ()=>{
  return(
    <SafeAreaView >
    <View>
      <Text style={styled.header}>PATİKA STORE</Text>
  
      <FlatList 
      data={data} 
      renderItem={({item})=><Product data={item}/>} 
      numColumns={2} 
      keyExtractor={item=>item.id.toString()}
      ListHeaderComponent={() => <SearchBar />}/>
    </View>
    </SafeAreaView>
  )
}

const styled =StyleSheet.create({
  header:{
    fontWeight:"bold",
    color:"red",
    fontSize:40,
    textAlign:"center"
  }
})

export default App;