import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017';
    const conn = await mongoose.connect(mongoUri);
     
    console.log(colors.yellow.underline(`[mongodb] connected to ${conn.connection.host}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default connectDB;