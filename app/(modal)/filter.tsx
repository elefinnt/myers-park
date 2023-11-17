import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import { useNavigation } from "expo-router";
import categories from "@/assets/data/filter.json";
import { Ionicons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface Category {
  name: string;
  count: number;
  checked?: boolean;
}

const ItemBox = () => (
  <>
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="arrow-down-outline" size={20} color={Colors.medium} />
        <Text style={{ flex: 1 }}>Sort</Text>
        <Ionicons name="chevron-forward-circle" size={22} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Ionicons name="barbell-outline" size={20} color={Colors.medium} />
        <Text style={{ flex: 1 }}>Difficulty</Text>
        <Ionicons name="chevron-forward-circle" size={22} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Ionicons name="reorder-four-outline" size={20} color={Colors.medium} />
        <Text style={{ flex: 1 }}>Type</Text>
        <Ionicons name="chevron-forward-circle" size={22} />
      </TouchableOpacity>
    </View>
    <Text style={styles.header}>Category</Text>
  </>
);

const Filter = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState<Category[]>(categories);
  const renderItem: ListRenderItem<Category> = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.itemText}>
        {item.name} ({item.count})
      </Text>
      <BouncyCheckbox
        isChecked={items[index].checked}
        disableBuiltInState
        fillColor={Colors.cubBlack}
        unfillColor="#FFF"
        iconStyle={{
          borderColor: Colors.cubBlack,
          borderRadius: 4,
          borderWidth: 1,
        }}
        innerIconStyle={{ borderColor: Colors.cubBlack, borderRadius: 4 }}
        onPress={() => {
          const isChecked = items[index].checked;
          const updatedItems = items.map((item)  => {
            if (item.name === items[index].name) {
              item.checked = !isChecked;
            }
            return item;
          }
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        ListHeaderComponent={<ItemBox />}
      />
      <View style={{ height: 76 }} />
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
  itemContainer: {
    backgroundColor: "#FFF",
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderColor: Colors.grey,
    borderBottomWidth: 1,
  },
  itemText: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFF",
  },
});

export default Filter;
