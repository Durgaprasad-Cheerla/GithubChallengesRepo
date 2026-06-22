import { Request, Response } from 'express';
import { Workout } from '../models/Workout';

export const createWorkout = async (req: Request, res: Response) => {
  try {
    const { userId, exerciseName, duration, caloriesBurned, date } = req.body;

    if (!userId || !exerciseName || !duration || !caloriesBurned) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const workout = new Workout({ userId, exerciseName, duration, caloriesBurned, date });
    await workout.save();

    res.status(201).json({ message: 'Workout created successfully', workout });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create workout', details: error });
  }
};

export const getWorkoutsByUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const workouts = await Workout.find({ userId });

    if (workouts.length === 0) {
      return res.status(404).json({ error: 'No workouts found for this user' });
    }

    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch workouts', details: error });
  }
};

export const getAllWorkouts = async (req: Request, res: Response) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch workouts', details: error });
  }
};

export const updateWorkout = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const workout = await Workout.findByIdAndUpdate(id, updates, { new: true });

    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }

    res.json({ message: 'Workout updated successfully', workout });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update workout', details: error });
  }
};

export const deleteWorkout = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const workout = await Workout.findByIdAndDelete(id);

    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }

    res.json({ message: 'Workout deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete workout', details: error });
  }
};
