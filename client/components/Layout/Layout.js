import { View, StatusBar } from 'react-native'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { } from 'expo-status-bar'

export default function Layout({ children }) {
    return (
        <>
            <StatusBar />
            <Header />

            <View>
                {children}
            </View>

            <Footer />
        </>
    )
}