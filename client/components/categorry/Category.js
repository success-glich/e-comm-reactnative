import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { categoriesData } from '../../data/CategoriesData'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
export default function Category() {
    const navigation = useNavigation();
    const handleNavigate = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            style={{ backgroundColor: "#ffffff" }} >
            <View style={styles.container}>

                {categoriesData?.map(item => (
                    <View key={item._id} >
                        <TouchableOpacity style={styles.categoryContainer} onPress={() => handleNavigate(item.path)} >
                            <AntDesign name={item.icon} style={styles.categoryIcon} />
                            <Text style={styles.categoryTitle}>{item.title}</Text>

                        </TouchableOpacity>

                    </View>
                ))}
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        padding: 5,
        flexDirection: "row",
    },
    categoryContainer: {
        padding: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    categoryIcon: {
        fontSize: 30,
        verticalAlign: 'top'
    },
    categoryTitle: {
        fontSize: 12
    }
})