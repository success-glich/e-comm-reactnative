import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';




export default function Header() {

    const [searchText, setSearchText] = useState("");
    //function for search 

    const handleSearch = () => {
        console.log(searchText);
    }
    return (
        <View style={{
            height: 90, marginTop: 10,
            backgroundColor: "lightgray"
        }}>

            <View style={styles.container}>


                <TextInput value={searchText} onChangeText={(text) => setSearchText(text)} style={styles.inputBox} />
                <TouchableOpacity style={styles.searchBtn} onPress={handleSearch} >
                    <FontAwesome name="search" style={styles.icon} />

                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 15
    },
    inputBox: {
        borderWidth: 0.3,
        width: "100%",
        position: 'absolute',
        left: 15,
        height: 40,
        color: '#000000',
        backgroundColor: "#ffffff",
        paddingLeft: 10,
        fontSize: 16,
        borderRadius: 5,

    },
    searchBtn: {
        position: 'absolute',
        left: "95%"
    },
    icon: {
        color: "#000000",
        fontSize: 18,

    }
})