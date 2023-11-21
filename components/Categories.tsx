import { View, StyleSheet, Image, Text } from "react-native";
import React from "react";
import { categories, workouts } from "@/assets/data/home";
import { ScrollView } from "react-native-gesture-handler";

const imageDimension = 85;

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 15,
      }}
    >
      {categories.map((category, index) => (
        <View style={styles.categoryCard} key={index}>
          <Image source={category.img} style={styles.categoryImage} />
          <Text style={styles.categoryText}>{category.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    backgroundColor: "white",
    marginEnd: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    borderRadius: 4,
  },
  categoryImage: {
    width: imageDimension, // Set the desired width
    height: imageDimension, // Set the desired height
    resizeMode: "cover", // You can use 'cover' or 'contain' based on your preference
  },
  categoryText: {
    padding: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Categories;
