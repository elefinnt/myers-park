import { Text, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Categories from "@/components/Categories";
import { SafeAreaView } from "react-native-safe-area-context";
import Workouts from "@/components/Workouts";
import Colors from "@/constants/Colors";

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Categories />
        <Text style={styles.header}>Your top Exercises for the week</Text>
        <Workouts />
        <Text style={styles.header}>??????????</Text>
        <Workouts />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 70,
    backgroundColor: Colors.lightGrey,
  },

  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,

    paddingHorizontal: 16,
  },
});

export default index;
