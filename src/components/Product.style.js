import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#eceff1",
        padding:14, 
        margin:5,      
        borderRadius:10,
        width:"100%"
    },
    ımage:{
        height:Dimensions.get("window").height/4,
        width:"100%",
        resizeMode:"contain",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    text_container:{
        backgroundColor:"orange",
        padding:5,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10
     
    },
    title:{
        fontWeight:"bold",
        fontSize:25,
        color:"black",
        
    },
    price:{
        fontSize:16,
        color:"white"
       
    },
    instock:{
        color:"red",
        fontSize:20,
        fontStyle:"italic",
        textAlign:"right"
    }
})