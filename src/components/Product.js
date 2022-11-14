import React from "react";
import { View,Text,Image } from "react-native";
import styles from "./Product.style"


const Product =({data})=>{
    console.log(data)
    return(
        <View style={styles.container}>
            <Image style={styles.ımage} source={{uri:data.imgURL}}/>
            <View style={styles.text_container}>
                <Text>{data.title}</Text>
                <Text>{data.price}</Text>
                <Text style={styles.instock}>{data.inStock === true ? " " : "Stokta Yok"}</Text>
            </View>
        </View>
    )
}

export default Product;