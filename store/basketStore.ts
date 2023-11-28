import { create } from "zustand";

export interface Exercise {
  name: string;
  id: number;
  img: string;
  difficulty: string;
  instructions: string;
}

export interface BasketState {
  exercises: Array<Exercise & { quantity: number }>;
  addExercise: (exercise: Exercise) => void;
  removeExercise: (exercise: Exercise) => void;
  clearExercises: () => void;
  total: number;
}

const useBasketStire = create<BasketState>((set) => ({
  exercises: [],
  total: 0,
  addExercise: (exercise) => {
    set((state) => {
      state.total += 1;
      const hasExercise = state.exercises.find((p) => p.id === exercise.id);

      if (hasExercise) {
        hasExercise.quantity += 1;
        return {
          exercises: state.exercises,
        };
      } else {
        state.exercises.push({ ...exercise, quantity: 1 });
        return {
          exercises: state.exercises,
        };
      }
    });
  },
  removeExercise: (exercise) => {
    set((state) => {
      return {
        exercises: state.exercises.filter((p) => p.id !== exercise.id),
      };
    });
  },
  clearExercises: () => set({ exercises: [], total: 0 }),
}));
