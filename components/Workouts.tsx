import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { workouts } from "@/assets/data/home";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";

const Workouts = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 15,
      }}
    >
      {workouts.map((workout, index) => (
        <Link href={"/details"} key={index} asChild>
          <TouchableOpacity>
            <View style={styles.categoryCard}>
              <Image source={workout.img} style={styles.image} />
              <View style={styles.categoryBox}>
                <Text style={styles.categoryText}>{workout.name}</Text>
                <Text style={{ color: Colors.green }}>
                  {workout.rating} {workout.ratings}
                </Text>
                <Text style={{ color: Colors.medium }}>
                  {workout.tags.join(" ")}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    width: 300,
    height: 250,
    backgroundColor: "white",
    marginEnd: 10,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    borderRadius: 4,
  },
  categoryText: {
    paddingVertical: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  image: {
    // turn flex on to make image fill the container when I have actual images lol
    flex: 5,
    width: undefined,
    height: undefined,
    resizeMode: "stretch",
  },
  categoryBox: {
    flex: 2,
    padding: 10,
    // backgroundColor: "green",
  },
});

export default Workouts;
