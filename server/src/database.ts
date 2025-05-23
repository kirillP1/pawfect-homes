import mongoose from 'mongoose';

export async function connectToDatabase(uri: string) {
  if (!uri) {
    throw new Error('MONGODB_URI is not defined');
  }

  await mongoose.connect(uri);
  console.log('Connected to MongoDB');
}

export async function disconnectFromDatabase() {
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');
}