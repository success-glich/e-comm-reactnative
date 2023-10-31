import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

import { useRoute } from '@react-navigation/native';

export default function Footer() {
    const route = useRoute();
    console.log(route.name);

    return (
        <View style={styles.container}>
            {/* <Text>Footer</Text> */}
            <TouchableOpacity style={styles.menuContainer} onPress={() => alert("Home Page")}>
                <AntDesign name={"home"} style={[styles.icon, route.name === "home" && styles.active]} />

                <Text style={styles.iconText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuContainer} onPress={() => alert("Notification Page")}>
                <AntDesign name={"bells"} style={[styles.icon, route.name === "notification" && styles.active]} />

                <Text style={styles.iconText}>Notification</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuContainer} onPress={() => alert("Account Page")}>
                <AntDesign name={"user"} style={[styles.icon, route.name === "account" && styles.active]} />

                <Text style={styles.iconText}>Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuContainer} onPress={() => alert("Cart Page")}>
                <AntDesign name={"shoppingcart"} style={[styles.icon, route.name === "cart" && styles.active]} />

                <Text style={styles.iconText}>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuContainer} onPress={() => alert("Logout Page")}>
                <AntDesign name={"logout"} style={styles.icon} />

                <Text style={styles.iconText}>Logout</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,

    },
    menuContainer: {
        alignItems: "center",
        justifyContent: "center",

    },
    icon: {
        fontSize: 25,
        color: "#000"
    },
    iconText: {
        color: "#000",
        fontSize: 10,
    },
    active: {
        color: "blue"
    }
})