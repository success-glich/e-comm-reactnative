import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'
import { productsData } from '../../data/ProductsData'


const Products = () => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <View style={styles.productContainer}>
                {/* <Text>Products</Text> */}
                {productsData.map(product => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </View>
        </ScrollView >
    )
}

export default Products

const styles = StyleSheet.create({

    productContainer: {
        flexDirection: "row",

    }
})