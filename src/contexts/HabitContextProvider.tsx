import { useState, ReactNode, useCallback } from 'react';
import { HabitContext, HabitHandleContext } from './HabitContext';
import type { Habit } from 'interface/main';

export const HabitProvider = ({ children }: { children: ReactNode }) => {
  const [habits, setHabits] = useState<Habit[]>([]);

  const handleCreateHabit = useCallback(
    (newHabitContent: Omit<Habit, 'id'>) => {
      const newHabit: Habit = {
        id: habits.length < 1 ? 0 : habits[habits.length - 1].id + 1,
        ...newHabitContent,
      };
      setHabits([...structuredClone(habits), newHabit]);
    },
    [habits],
  );

  return (
    <HabitContext.Provider value={habits}>
      <HabitHandleContext.Provider value={handleCreateHabit}>
        {children}
      </HabitHandleContext.Provider>
    </HabitContext.Provider>
  );
};
