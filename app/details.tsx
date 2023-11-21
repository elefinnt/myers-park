import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import Colors from "@/constants/Colors";
import { workout } from "@/assets/data/workout";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Details = () => {
  const navigation = useNavigation();
  //   const [isLiked, setIsLiked] = useState(false);

  //   const handleLike = () => {
  //     setIsLiked(!isLiked);
  //   };

  useLayoutEffect(
    () => {
      navigation.setOptions({
        headerTransparent: true,
        headerTitle: "",
        headerTintColor: Colors.cubBlack,
        headerLeft: () => (
          <TouchableOpacity
            style={styles.roundButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color={Colors.cubBlack} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View style={styles.bar}>
            <TouchableOpacity style={styles.roundButton}>
              <Ionicons
                name="share-outline"
                size={24}
                color={Colors.cubBlack}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.roundButton}
              //    onPress={handleLike}
            >
              <Ionicons
                name="heart-outline"
                //   {isLiked ? `heart` : `heart-outline`}
                size={24}
                color={Colors.cubBlack}
              />
            </TouchableOpacity>
          </View>
        ),
      });
    },
    [
      // isLiked
    ]
  );

  return (
    <>
      <ParallaxScrollView
        backgroundColor={"#FFF"}
        style={{ flex: 1 }}
        parallaxHeaderHeight={250}
        stickyHeaderHeight={50}
        renderBackground={() => <Image source={workout.img} />}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}></View>
        )}
      >
        <View style={styles.detailsContainer}>
          <Text>Details</Text>
        </View>
      </ParallaxScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: Colors.lightGrey,
  },
  stickySection: {
    backgroundColor: "red",
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Details;
