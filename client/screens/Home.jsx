import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Layout from "../components/Layout/Layout";
import Category from "../components/categorry/Category";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <Layout>
      <Category />

      <Banner />
      <View>
        <Text>Home Page</Text>
      </View>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
