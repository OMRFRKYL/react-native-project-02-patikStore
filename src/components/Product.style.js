import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#eceff1",
        padding:14, 
        margin:5,      
        borderRadius:10,
        paddingBottom:70
    },
    ımage:{
        height:Dimensions.get("window").height/4,
        width:"100%",
        resizeMode:"contain",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    text_container:{
        padding:5,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
    },
    title:{
        fontWeight:"bold",
        fontSize:25,
        color:"black",
        paddingBottom:15
        
    },
    price:{
        fontSize:25,
        color:"black"
       
    },
    instock:{
        color:"red",
        fontSize:20,
        fontStyle:"italic",
        textAlign:"right"
    }
})