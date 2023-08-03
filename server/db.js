import mongoose from 'mongoose';

const db = async () => {
    try {
        mongoose.set("strictQuery",false)
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Database connected');
  } catch (error) {
    console.log(error);
  }
}

export default db;