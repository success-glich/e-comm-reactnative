import { View, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { } from 'expo-status-bar'

export default function Layout({ children }) {
    return (
        <>
            <StatusBar />

            <View>
                {children}
            </View>

            <View style={styles.footerContainer}>

                <Footer />
            </View>

        </>
    )
}
const styles = StyleSheet.create({
    footerContainer: {
        display: "flex",
        width: "100%",
        flex: 1,
        justifyContent: 'flex-end',
        zIndex: 100,
        borderTopWidth: 1,
        position: "absolute",
        borderColor: "lightgray",
        bottom: 0,
        padding: 10
    }


});