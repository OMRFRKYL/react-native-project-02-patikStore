import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#eceff1",
        padding:15,
        margin:5,
        borderRadius:10
    },
    ımage:{
        height:Dimensions.get("window").height/4,
        width:"100%",
        resizeMode:"contain",
        borderRadius:10
    },
    text_container:{},
    title:{},
    price:{
       
    },
    instock:{
        color:"red",
    }
})