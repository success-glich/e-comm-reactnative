import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { productsData } from '../data/ProductsData';

export default function ProductDetail({ route }) {
    const [productDetail, setProductDetail] = useState({});
    const [qty, setQty] = useState(1)
    //get product details

    // console.log(route.params);
    const { params } = route
    useEffect(() => {
        const getProduct = productsData.find((product) => product.id = params?._id);
        setProductDetail(getProduct);
    }, [params?._id]);

    //handle function for + =

    const handleAddQty = () => {
        if (qty <= 1) return;
        setQty(prev => prev + 1);
    }
    const handleSubQty = () => {
        if (qty === 0) return alert('You cannot select less than 1 quantity')
        setQty(prev => prev - 1);
    }
    return (
        <View>
            <Image style={styles.image} source={{ uri: productDetail?.image }} />
            <View style={styles.container}>

                <Text style={styles.title}>{productDetail?.title}</Text>
                <Text style={styles.title}>Price: Rs. {productDetail?.price} </Text>
                <Text style={styles.desc}>{productDetail?.description} </Text>

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnCart} onPress={() => alert(`${qty} items added to cart`)}>
                        <Text style={styles.btnCartText}>ADD TO CART</Text>
                    </TouchableOpacity>
                    <View style={styles.btnContainer}>


                        <TouchableOpacity style={styles.btnQty} onPress={handleSubQty}>
                            <Text style={styles.btnQtyText}>-</Text>

                        </TouchableOpacity>
                        <Text style={styles.btnQtyText}>{qty}</Text>
                        <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
                            <Text>+</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        height: 300,
        width: '100%'
    }
    ,
    container: {
        marginVertical: 15,
        marginHorizontal: 10
    },
    title: {
        fontSize: 18,
        textAlign: "left"
    },
    desc: {
        fontSize: 12,
        textTransform: "capitalize",
        textAlign: "justify",
        marginVertical: 10
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,

    },
    btnCart: {
        width: 180,
        backgroundColor: "#000",
        borderRadius: 5,
        height: 40,
        justifyContent: "center"

    },
    btnCartText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 15
    },
    btnQty: {
        backgroundColor: 'lightgray',
        width: 40,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    btnQtyText: {
        fontSize: 20,


    }

})