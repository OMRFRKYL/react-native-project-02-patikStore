import React from "react";
import { View,Text,Image } from "react-native";
import styles from "./Product.style"


const Product =({data})=>{
    return(
        <View style={styles.container}>
            <Image style={styles.ımage} source={{uri:data.imgURL}}/>
            <View style={styles.text_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.price}>{data.price}</Text>
                <Text style={styles.instock}>{data.inStock === true ? " " : "STOKTA YOK"}</Text>
            </View>
        </View>
    )
}

export default Product;