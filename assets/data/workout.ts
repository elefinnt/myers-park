export const getWorkoutById = (id: number) => {
  const movements = workout.exercise.flatMap((category) => category.movements);
  return movements.find((movement) => movement?.id === id);
};

interface WorkoutType {
  name: string;
  rating: string;
  ratings: string;
  img: string;
  exercises: string;
  duration: string;
  tags: string[];
  about: string;
  exercise: ExerciseType[];
}

interface ExerciseType {
  category: string;
  movements: MovementType[];
}

interface MovementType {
  id: number;
  name: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
  img: string;
  reps: string;
}

export const workout: WorkoutType = {
  name: "Push",
  rating: "4.5 ★",
  ratings: "(500+)",
  img: require("@/assets/data/test.jpg"),
  exercises: "6-8",
  duration: "60-90 minutes",
  tags: ["Chest", "Shoulders", "Triceps"],

  about:
    "A push workout is a type of resistance training routine that focuses on exercises where you push weight away from your body. This typically involves working the muscles involved in pushing movements, primarily the chest, shoulders, and triceps. The main goal of a push workout is to strengthen and develop these muscle groups, as well as improve overall upper body strength and endurance.",
  exercise: [
    {
      category: "Chest",
      movements: [
        {
          id: 1,
          name: "Dumbbell Bench Press",
          muscle: "Chest",
          equipment: "dumbbell",
          difficulty: "beginner",
          reps: "6-8",
          instructions:
            "Lie down on a flat bench with a dumbbell in each hand resting on top of your thighs. The palms of your hands will be facing each other. Then, using your thighs to help raise the dumbbells up, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width. Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. The dumbbells should be just to the sides of your chest, with your upper arm and forearm creating a 90 degree angle. Be sure to maintain full control of the dumbbells at all times. This will be your starting position. Then, as you breathe out, use your chest to push the dumbbells up. Lock your arms at the top of the lift and squeeze your chest, hold for a second and then begin coming down slowly. Tip: Ideally, lowering the weight should take about twice as long as raising it. Repeat the movement for the prescribed amount of repetitions of your training program. Caution: When you are done, do not drop the dumbbells next to you as this is dangerous to your rotator cuff in your shoulders and others working out around you. Just lift your legs from the floor bending at the knees, twist your wrists so that the palms of your hands are facing each other and place the dumbbells on top of your thighs. When both dumbbells are touching your thighs simultaneously push your upper torso up (while pressing the dumbbells on your thighs) and also perform a slight kick forward with your legs (keeping the dumbbells on top of the thighs). By doing this combined movement, momentum will help you get back to a sitting position with both dumbbells still on top of your thighs. At this moment you can place the dumbbells on the floor. Variations: Another variation of this exercise is to perform it with the palms of the hands facing each other. Also, you can perform the exercise with the palms facing each other and then twisting the wrist as you lift the dumbbells so that at the top of the movement the palms are facing away from the body. I personally do not use this variation very often as it seems to be hard on my shoulders.",
          img: require("@/assets/data/test.jpg"),
        },
        {
          id: 2,
          name: "Incline dumbbell bench press",
          muscle: "Chest",
          equipment: "dumbbell",
          difficulty: "beginner",
          reps: "8-12",
          instructions:
            "Lie back on an incline bench with a dumbbell in each hand atop your thighs. The palms of your hands will be facing each other. Then, using your thighs to help push the dumbbells up, lift the dumbbells one at a time so that you can hold them at shoulder width. Once you have the dumbbells raised to shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. This will be your starting position. Be sure to keep full control of the dumbbells at all times. Then breathe out and push the dumbbells up with your chest. Lock your arms at the top, hold for a second, and then start slowly lowering the weight. Tip Ideally, lowering the weights should take about twice as long as raising them. Repeat the movement for the prescribed amount of repetitions. When you are done, place the dumbbells back on your thighs and then on the floor. This is the safest manner to release the dumbbells. Variations: You can use several angles on the incline bench if the bench you are using is adjustable. Another variation of this exercise is to perform it with the palms of the hands facing each other. Also, you can perform the exercise with the palms facing each other and then twisting the wrist as you lift the dumbbells so that at the top of the movement the palms are facing away from the body. I personally do not use this variation very often as it seems to be hard on my shoulders.",
          img: require("@/assets/data/test.jpg"),
        },
        {
          id: 3,
          name: "Incline cable chest fly",
          muscle: "Chest",
          equipment: "dumbbell",
          difficulty: "intermediate",
          reps: "12-15",
          instructions:
            "To get yourself into the starting position, set the pulleys at the floor level (lowest level possible on the machine that is below your torso). Place an incline bench (set at 45 degrees) in between the pulleys, select a weight on each one and grab a pulley on each hand. With a handle on each hand, lie on the incline bench and bring your hands together at arms length in front of your face. This will be your starting position. With a slight bend of your elbows (in order to prevent stress at the biceps tendon), lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary. The movement should only occur at the shoulder joint. Return your arms back to the starting position as you squeeze your chest muscles and exhale. Hold the contracted position for a second. Tip: Make sure to use the same arc of motion used to lower the weights. Repeat the movement for the prescribed amount of repetitions. Variation: You can vary the angle of the bench in order to target the upper chest at slightly different angles.",
          img: require("@/assets/data/test.jpg"),
        },
      ],
    },
    {
      category: "Shoulders",
      movements: [
        {
          id: 4,
          name: "Seated dumbbell shoulder press",
          muscle: "shoulders",
          equipment: "dumbbell",
          difficulty: "intermediate",
          reps: "8-12",
          instructions:
            "Sit on a Military Press Bench with a bar behind your head and either have a spotter give you the bar (better on the rotator cuff this way) or pick it up yourself carefully with a pronated grip (palms facing forward). Tip: Your grip should be wider than shoulder width and it should create a 90-degree angle between the forearm and the upper arm as the barbell goes down. Once you pick up the barbell with the correct grip length, lift the bar up over your head by locking your arms. Hold at about shoulder level and slightly in front of your head. This is your starting position. Lower the bar down to the collarbone slowly as you inhale. Lift the bar back up to the starting position as you exhale. Repeat for the recommended amount of repetitions. Variations: This exercise can also be performed standing but those with lower back problems are better off performing this seated variety. The behind the neck variation is not recommended for people with shoulder problems as it can be hard on the rotator cuff due to the hyperextension created by bringing the bar behind the neck.",
          img: require("@/assets/data/test.jpg"),
        },
        {
          id: 5,
          name: "Side Lateral Raise",
          muscle: "shoulders",
          equipment: "dumbbell",
          difficulty: "beginner",
          reps: "12-15",
          instructions:
            "Pick a couple of dumbbells and stand with a straight torso and the dumbbells by your side at arms length with the palms of the hand facing you. This will be your starting position. While maintaining the torso in a stationary position (no swinging), lift the dumbbells to your side with a slight bend on the elbow and the hands slightly tilted forward as if pouring water in a glass. Continue to go up until you arms are parallel to the floor. Exhale as you execute this movement and pause for a second at the top. Lower the dumbbells back down slowly to the starting position as you inhale. Repeat for the recommended amount of repetitions. Variation: This exercise can also be performed sitting down.",
          img: require("@/assets/data/test.jpg"),
        },
      ],
    },
    {
      category: "Triceps",
      movements: [
        {
          id: 6,
          name: "Triceps Pushdown - Rope Attachment",
          muscle: "triceps",
          equipment: "Cables",
          difficulty: "beginner",
          reps: "12-15",
          instructions:
            "Attach a rope attachment to a high pulley and grab with a neutral grip (palms facing each other). Standing upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the rope with the palms facing each other. This is your starting position. Using the triceps, bring the rope down as you bring each side of the rope to the side of your thighs. At the end of the movement the arms are fully extended and perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement. After holding for a second, at the contracted position, bring the rope slowly up to the starting point. Breathe in as you perform this step. Repeat for the recommended amount of repetitions. Variations: There are many variations to this movement. For instance you can use an E-Z bar attachment as well as a V-angled bar or straight bar. Same as the Triceps Pushdown except with the rope attachment.",
          img: require("@/assets/data/test.jpg"),
        },
        {
          id: 7,
          name: "EZ-Bar Skullcrusher",
          muscle: "triceps",
          equipment: "e-z_curl_bar",
          difficulty: "intermediate",
          reps: "8-12",
          instructions:
            "Using a close grip, lift the EZ bar and hold it with your elbows in as you lie on the bench. Your arms should be perpendicular to the floor. This will be your starting position. Keeping the upper arms stationary, lower the bar by allowing the elbows to flex. Inhale as you perform this portion of the movement. Pause once the bar is directly above the forehead. Lift the bar back to the starting position by extending the elbow and exhaling. Repeat.",
          img: require("@/assets/data/test.jpg"),
        },
        {
          id: 8,
          name: "Mamak Malaysian Restaurant",
          muscle: "triceps",
          equipment: "e-z_curl_bar",
          difficulty: "intermediate",
          reps: "Infinite",
          instructions: "Eat as much as you can",
          img: require("@/assets/data/2023-06-06.jpg"),
        },
      ],
    },
  ],
};
