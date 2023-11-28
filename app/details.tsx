import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SectionList,
  ListRenderItem,
  ImageSourcePropType,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import Colors from "@/constants/Colors";
import { workout } from "@/assets/data/workout";
import { Link, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Details = () => {
  const navigation = useNavigation();
  //   const [isLiked, setIsLiked] = useState(false);

  //   const handleLike = () => {
  //     setIsLiked(!isLiked);
  //   };

  const DATA = workout.exercise.map((item, index) => ({
    title: item.category,
    data: item.movements,
    index,
  }));

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
            <Ionicons name="arrow-back" size={24} color={"#FFF"} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View style={styles.bar}>
            <TouchableOpacity style={styles.roundButton}>
              <Ionicons name="share-outline" size={24} color={"#FFF"} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.roundButton}
              //    onPress={handleLike}
            >
              <Ionicons
                name="heart-outline"
                //   {isLiked ? `heart` : `heart-outline`}
                size={24}
                color={"#FFF"}
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

  const renderItem: ListRenderItem<any> = ({ item, index }) => (
    <Link href={{ pathname: "/(modal)/dish", params: { id: item.id } }} asChild>
      <TouchableOpacity style={styles.item}>
        <View style={{ flex: 1 }}>
          <Text style={styles.exercise}>{item.name}</Text>
          <Text style={styles.exerciseText}>{item.reps}</Text>
          <Text style={styles.exerciseText}>{item.difficulty}</Text>
        </View>
        <Image source={item.img} style={styles.exerciseImage} />
      </TouchableOpacity>
    </Link>
  );
  return (
    <>
      <ParallaxScrollView
        backgroundColor={"#FFF"}
        style={{ flex: 1 }}
        parallaxHeaderHeight={250}
        stickyHeaderHeight={100}
        renderBackground={() => (
          <Image
            source={workout.img as ImageSourcePropType}
            style={{ height: 300, width: "100%" }}
          />
        )}
        contentBackgroundColor={Colors.lightGrey}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>{workout.name}</Text>
          </View>
        )}
      >
        <View style={styles.detailsContainer}>
          <Text style={styles.workoutName}>{workout.name}</Text>
          <Text style={styles.workoutDescription}>
            {workout.duration} - {workout.tags.join(", ")}
          </Text>
          <Text style={styles.workoutDescription}>{workout.about}</Text>

          <SectionList
            sections={DATA}
            contentContainerStyle={{ paddingBottom: 50 }}
            keyExtractor={(item, index) => `${item.id + index}`}
            scrollEnabled={false}
            SectionSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: Colors.grey }} />
            )}
            renderItem={renderItem}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  marginHorizontal: 16,
                  height: 1,
                  backgroundColor: Colors.grey,
                }}
              />
            )}
            renderSectionHeader={({ section: { title, index } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
          />
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
    backgroundColor: "white",
    marginLeft: 70,
    height: 100,
    justifyContent: "flex-end",
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.cubBlack,
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  stickySectionText: {
    fontSize: 20,
    margin: 20,
  },
  workoutName: {
    fontSize: 30,
    margin: 16,
  },
  workoutDescription: {
    fontSize: 16,
    margin: 16,
    lineHeight: 22,
    color: Colors.medium,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 40,
    margin: 16,
  },
  item: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#FFF",
  },
  exerciseImage: {
    height: 80,
    width: 80,
    borderRadius: 4,
  },
  exercise: {
    fontSize: 16,
    fontWeight: "bold",
  },
  exerciseText: {
    fontSize: 14,
    color: Colors.mediumDark,
    paddingVertical: 4,
  },
});

export default Details;
