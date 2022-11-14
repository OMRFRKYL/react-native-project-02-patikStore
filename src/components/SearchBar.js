import React from "react";
import { SafeAreaView, TextInput,StyleSheet } from "react-native";


const SearchBar = ()=>{
    return(
        <SafeAreaView>
            <TextInput 
            style={styles.searchBar}
            placeholder="Ara..."
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    searchBar:{
        borderRadius:10,
        backgroundColor:"#ece1f1",
        margin:5,
        fontSize:20
    }
})

export default SearchBar;