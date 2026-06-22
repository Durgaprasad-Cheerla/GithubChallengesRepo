import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from './models/User';
import { Workout } from './models/Workout';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit-tracker';

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✓ Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Workout.deleteMany({});
    console.log('✓ Cleared existing data');

    // Seed users
    const users = await User.insertMany([
      {
        name: 'Alice Johnson',
        email: 'alice@octofit.com',
        password: 'password123',
        age: 28,
        weight: 65,
        height: 170
      },
      {
        name: 'Bob Smith',
        email: 'bob@octofit.com',
        password: 'password456',
        age: 35,
        weight: 80,
        height: 180
      },
      {
        name: 'Carol White',
        email: 'carol@octofit.com',
        password: 'password789',
        age: 31,
        weight: 60,
        height: 165
      }
    ]);
    console.log(`✓ Seeded ${users.length} users`);

    // Seed workouts
    const workouts = await Workout.insertMany([
      {
        userId: users[0]._id.toString(),
        exerciseName: 'Running',
        duration: 30,
        caloriesBurned: 300,
        date: new Date('2026-06-20')
      },
      {
        userId: users[0]._id.toString(),
        exerciseName: 'Weight Training',
        duration: 45,
        caloriesBurned: 250,
        date: new Date('2026-06-21')
      },
      {
        userId: users[1]._id.toString(),
        exerciseName: 'Cycling',
        duration: 60,
        caloriesBurned: 400,
        date: new Date('2026-06-20')
      },
      {
        userId: users[1]._id.toString(),
        exerciseName: 'Swimming',
        duration: 40,
        caloriesBurned: 350,
        date: new Date('2026-06-21')
      },
      {
        userId: users[2]._id.toString(),
        exerciseName: 'Yoga',
        duration: 50,
        caloriesBurned: 150,
        date: new Date('2026-06-20')
      },
      {
        userId: users[2]._id.toString(),
        exerciseName: 'HIIT Training',
        duration: 30,
        caloriesBurned: 280,
        date: new Date('2026-06-21')
      }
    ]);
    console.log(`✓ Seeded ${workouts.length} workouts`);

    console.log('\n🎉 Database initialization complete!');
    process.exit(0);
  } catch (error) {
    console.error('✗ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
