import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { getWorkoutById } from "@/assets/data/workout";
import Colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeIn, FadeInLeft } from "react-native-reanimated";

const Dish = () => {
  const { id } = useLocalSearchParams();
  //super secure way of converting a string to a number xD

  const addToWorkout = () => {
    console.log("add to workout");
  };

  const item = getWorkoutById(+id);
  console.log(id, "show id");
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFF" }}
      edges={["bottom"]}
    >
      <View style={styles.container}>
        <Animated.Image
          entering={FadeIn.duration(500).delay(200)}
          source={item?.img as ImageSourcePropType}
          style={styles.image}
        />
        <View style={{ padding: 20 }}>
          <Animated.Text
            entering={FadeInLeft.duration(400).delay(200)}
            style={styles.exerciseName}
          >
            {item?.name}
          </Animated.Text>
          <Animated.Text
            entering={FadeInLeft.duration(400).delay(400)}
            style={styles.exerciseInfo}
          >
            {item?.instructions}
          </Animated.Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.fullButton} onPress={addToWorkout}>
            <Text style={styles.footerText}>Add to a custom Workout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  image: {
    height: 300,
    width: "100%",
  },
  exerciseName: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
  exerciseInfo: { fontSize: 16, color: Colors.mediumDark },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: 10,
    marginBottom: 20,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginTop: 10,
    paddingTop: 20,
  },
  fullButton: {
    backgroundColor: Colors.cubBlack,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  footerText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Dish;
