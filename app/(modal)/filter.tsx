import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import { useNavigation } from "expo-router";
import categories from "@/assets/data/filter.json";
import useFetch from "@/hook/useFetch";

interface Category {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
}

const Filter = () => {
  const navigation = useNavigation();

  // const [filterName, setFilterName] = useState("");
  // const [filterMuscle, setFilterMuscle] = useState("");
  // const [filterDifficulty, setFilterDifficulty] = useState("");
  // const [filterType, setFilterType] = useState("");

  const renderItem: ListRenderItem<Category> = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={categories} renderItem={renderItem} />

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.fullButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.footerText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.lightGrey,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "#FFF",
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  fullButton: {
    backgroundColor: Colors.cubBlack,
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
  },
  footerText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Filter;
