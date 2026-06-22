import { Router } from 'express';
import {
  createWorkout,
  getWorkoutsByUser,
  getAllWorkouts,
  updateWorkout,
  deleteWorkout
} from '../controllers/workoutController';

const router = Router();

router.post('/workouts', createWorkout);
router.get('/workouts', getAllWorkouts);
router.get('/workouts/user/:userId', getWorkoutsByUser);
router.put('/workouts/:id', updateWorkout);
router.delete('/workouts/:id', deleteWorkout);

export default router;
